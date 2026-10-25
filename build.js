#!/usr/bin/env node
/**
 * 강의안 PPTX 빌더
 *
 *   node build.js        # 1강 생성
 *   node build.js 01     # 특정 강 생성
 *
 * 결과물은 dist/ 에 생성된다.
 */
const path = require("path");
const fs = require("fs");
const PptxGenJS = require("pptxgenjs");
const { FONT, THEME, defineLayouts, enforceFont } = require("./src/theme");
const { applyTheme } = require("./src/apply-theme");
const { flushWarnings } = require("./src/components");

const LESSONS = { "01": require("./src/lessons/lesson01") };

async function build(id) {
  const lesson = LESSONS[id];
  if (!lesson) {
    console.error(`알 수 없는 강의 번호: ${id} (가능: ${Object.keys(LESSONS).join(", ")})`);
    process.exit(2);
  }

  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 in — 반드시 슬라이드 추가 전에 설정
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  pres.author = "박성은 목사";
  pres.title = `요한복음 제${Number(id)}강 ${lesson.title}`;
  pres.subject = lesson.subject;

  defineLayouts(pres);
  enforceFont(pres, FONT); // 모든 글자를 맑은 고딕으로 고정
  lesson.parts.forEach((part) => part(pres));

  const outDir = path.join(__dirname, "dist");
  fs.mkdirSync(outDir, { recursive: true });
  const flag = process.argv.indexOf("--out");
  const out = flag > -1 ? process.argv[flag + 1] : path.join(outDir, lesson.fileName);
  await pres.writeFile({ fileName: out });
  await applyTheme(out, THEME); // pptxgenjs 는 테마 색을 쓰지 못하므로 사후 주입
  await fixEastAsianFont(out, FONT); // 테마의 빈 <a:ea> 를 채워 한글이 대체 글꼴로 빠지지 않게

  const warnings = flushWarnings();
  if (warnings.length) {
    console.warn(`\n⚠ 레이아웃 경고 ${warnings.length}건 (글자가 상자를 넘칠 수 있음)`);
    warnings.forEach((w) => console.warn("  - " + w));
    console.warn("");
  }
  console.log(`생성 완료: ${out}  (${pres.slides.length} 슬라이드)`);
}

/** 테마 fontScheme 의 East Asian 슬롯이 비어 있으면 한글이 기본 글꼴로 떨어진다. */
async function fixEastAsianFont(deckPath, font) {
  const JSZip = require(require.resolve("jszip", { paths: [require.resolve("pptxgenjs")] }));
  const zip = await JSZip.loadAsync(fs.readFileSync(deckPath));
  const part = "ppt/theme/theme1.xml";
  const xml = await zip.file(part).async("string");
  const esc = font.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  zip.file(part, xml.replace(/<a:ea typeface=""\/>/g, `<a:ea typeface="${esc}"/>`));
  fs.writeFileSync(deckPath, await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
}

build(process.argv[2] || "01").catch((e) => {
  console.error(e);
  process.exit(1);
});
