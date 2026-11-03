/**
 * 빌드 마무리 — pptxgenjs 가 남기는 문제들을 한 번에 손본다.
 *
 *  1. 테마 fontScheme 의 빈 <a:latin/ea/cs> 를 채운다 (한글이 대체 글꼴로 빠지는 것 방지)
 *  2. 발표자 노트 글자 크기를 지정한다 (pptxgenjs 는 크기를 적지 않아 기본값으로 떨어진다)
 *  3. 한 슬라이드 안에서 겹친 도형 ID 를 떼어 놓는다
 *     — pptxgenjs 는 슬라이드 번호 자리틀에 항상 같은 ID(25)를 쓴다. 도형이 25개를 넘는
 *       슬라이드에서 충돌이 생기고, PowerPoint 가 "복구하시겠습니까"를 띄운다.
 *  4. 압축 파일 안의 빈 폴더 항목을 없앤다 (OPC 규격에 없는 항목)
 */
const fs = require("fs");

function jszip() {
  return require(require.resolve("jszip", { paths: [require.resolve("pptxgenjs")] }));
}

const xmlEsc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** 한 파트 안에서 중복된 <p:cNvPr id="..."> 를 비어 있는 번호로 옮긴다. */
function dedupeShapeIds(xml) {
  const ids = [...xml.matchAll(/<p:cNvPr id="(\d+)"/g)].map((m) => Number(m[1]));
  if (!ids.length) return { xml, fixed: 0 };
  const used = new Set(ids);
  let next = Math.max(...ids) + 1;
  const seen = new Set();
  let fixed = 0;
  const out = xml.replace(/<p:cNvPr id="(\d+)"/g, (m, raw) => {
    const id = Number(raw);
    if (!seen.has(id)) {
      seen.add(id);
      return m;
    }
    while (used.has(next)) next += 1;
    used.add(next);
    seen.add(next);
    fixed += 1;
    return `<p:cNvPr id="${next}"`;
  });
  return { xml: out, fixed };
}

/** 노트 런에 글자 크기를 박는다. 자식 요소는 건드리지 않고 속성만 넣는다. */
function sizeNotesRuns(xml, sz) {
  return xml.replace(/<p:sp>[\s\S]*?<\/p:sp>/g, (sp) => {
    if (!sp.includes('<p:ph type="body"')) return sp;
    return sp.replace(/<a:(rPr|endParaRPr)\b([^>]*?)(\/?)>/g, (m, tag, attrs, close) =>
      /\bsz="/.test(attrs) ? m : `<a:${tag}${attrs} sz="${sz}"${close}>`
    );
  });
}

async function finalizeDeck(deckPath, { font, notesSize = 24 } = {}) {
  const JSZip = jszip();
  const zip = await JSZip.loadAsync(fs.readFileSync(deckPath));
  const sz = Math.round(notesSize * 100);
  const report = { idFixes: 0, notes: 0 };

  // 1. 테마 글꼴
  if (font) {
    const part = "ppt/theme/theme1.xml";
    const esc = xmlEsc(font);
    const xml = await zip.file(part).async("string");
    zip.file(part, xml.replace(/<a:(latin|ea|cs) typeface=""\/>/g, (m, tag) => `<a:${tag} typeface="${esc}"/>`));
  }

  for (const name of Object.keys(zip.files)) {
    const f = zip.files[name];
    if (f.dir || !name.endsWith(".xml")) continue;
    let xml = await f.async("string");
    const before = xml;

    // 2. 노트 글자 크기
    if (/^ppt\/notesSlides\/notesSlide\d+\.xml$/.test(name)) {
      xml = sizeNotesRuns(xml, sz);
      if (xml !== before) report.notes += 1;
    }
    if (/^ppt\/notesMasters\/notesMaster\d+\.xml$/.test(name)) {
      xml = xml.replace(/(<p:notesStyle>[\s\S]*?<\/p:notesStyle>)/, (block) =>
        block.replace(/<a:defRPr\b([^>]*?)\bsz="\d+"/g, (m, attrs) => `<a:defRPr${attrs}sz="${sz}"`)
      );
    }

    // 3. 도형 ID 충돌
    if (/^ppt\/(slides|notesSlides|slideLayouts|slideMasters|notesMasters)\/[^/]+\.xml$/.test(name)) {
      const r = dedupeShapeIds(xml);
      xml = r.xml;
      report.idFixes += r.fixed;
    }

    if (xml !== before) zip.file(name, xml);
  }

  // 4. 폴더 항목을 뺀 새 압축 파일로 다시 쓴다
  const clean = new JSZip();
  for (const name of Object.keys(zip.files)) {
    const f = zip.files[name];
    if (f.dir) continue;
    clean.file(name, await f.async("nodebuffer"), { date: f.date, createFolders: false });
  }
  fs.writeFileSync(deckPath, await clean.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
  return report;
}

module.exports = { finalizeDeck };
