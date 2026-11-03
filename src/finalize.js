/** 빌드 마무리 — pptxgenjs 가 남기는 빈 칸들을 채운다. */
const fs = require("fs");

function jszip() {
  return require(require.resolve("jszip", { paths: [require.resolve("pptxgenjs")] }));
}

/** 테마 fontScheme 의 <a:ea> 가 비어 있으면 한글이 기본 글꼴로 떨어진다. */
async function fixEastAsianFont(deckPath, font) {
  const zip = await jszip().loadAsync(fs.readFileSync(deckPath));
  const part = "ppt/theme/theme1.xml";
  const xml = await zip.file(part).async("string");
  const esc = font.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  zip.file(part, xml.replace(/<a:ea typeface=""\/>/g, `<a:ea typeface="${esc}"/>`));
  fs.writeFileSync(deckPath, await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
}

/**
 * 발표자 노트 글자 키우기.
 * pptxgenjs 는 노트에 크기를 적지 않아 12pt 기본값으로 떨어진다.
 * 강의 중에 읽어야 하는 글이므로 런(run)마다 크기를 박고, 노트 마스터 기본값도 올린다.
 */
async function setNotesFontSize(deckPath, pt = 18, font) {
  const zip = await jszip().loadAsync(fs.readFileSync(deckPath));
  const sz = Math.round(pt * 100);
  const esc = font ? font.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : null;
  const latin = esc ? `<a:latin typeface="${esc}"/><a:ea typeface="${esc}"/><a:cs typeface="${esc}"/>` : "";

  // 런의 rPr 에 크기(+글꼴)를 넣는다. 이미 크기가 있으면 건드리지 않는다.
  const bumpRuns = (xml) =>
    xml.replace(/<a:(rPr|endParaRPr)\b([^>]*?)(\/?)>/g, (m, tag, attrs, selfClose) => {
      if (/\bsz="/.test(attrs)) return m;
      if (!latin) return `<a:${tag}${attrs} sz="${sz}"${selfClose}>`;
      return selfClose ? `<a:${tag}${attrs} sz="${sz}">${latin}</a:${tag}>` : `<a:${tag}${attrs} sz="${sz}">${latin}`;
    });

  let touched = 0;
  for (const name of Object.keys(zip.files)) {
    if (!/^ppt\/notesSlides\/notesSlide\d+\.xml$/.test(name)) continue;
    const xml = await zip.file(name).async("string");
    // 슬라이드 번호 도형까지 키우지 않도록 본문 자리틀(<p:ph type="body">)만 손본다.
    const out = xml.replace(/<p:sp>[\s\S]*?<\/p:sp>/g, (sp) =>
      sp.includes('<p:ph type="body"') ? bumpRuns(sp) : sp
    );
    if (out !== xml) touched += 1;
    zip.file(name, out);
  }

  // 노트 마스터의 기본 크기 (슬라이드 노트 보기 · 인쇄에 적용된다)
  for (const name of Object.keys(zip.files)) {
    if (!/^ppt\/notesMasters\/notesMaster\d+\.xml$/.test(name)) continue;
    const xml = await zip.file(name).async("string");
    zip.file(
      name,
      xml.replace(/(<p:notesStyle>[\s\S]*?<\/p:notesStyle>)/, (block) =>
        block.replace(/<a:defRPr\b([^>]*?)\bsz="\d+"/g, (m, attrs) => `<a:defRPr${attrs}sz="${sz}"`)
      )
    );
  }

  fs.writeFileSync(deckPath, await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
  return touched;
}

module.exports = { fixEastAsianFont, setNotesFontSize };
