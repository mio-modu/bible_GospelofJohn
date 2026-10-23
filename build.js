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
const { THEME, defineLayouts } = require("./src/theme");
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
  lesson.parts.forEach((part) => part(pres));

  const outDir = path.join(__dirname, "dist");
  fs.mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, lesson.fileName);
  await pres.writeFile({ fileName: out });
  await applyTheme(out, THEME); // pptxgenjs 는 테마 색을 쓰지 못하므로 사후 주입

  const warnings = flushWarnings();
  if (warnings.length) {
    console.warn(`\n⚠ 레이아웃 경고 ${warnings.length}건 (글자가 상자를 넘칠 수 있음)`);
    warnings.forEach((w) => console.warn("  - " + w));
    console.warn("");
  }
  console.log(`생성 완료: ${out}  (${pres.slides.length} 슬라이드)`);
}

build(process.argv[2] || "01").catch((e) => {
  console.error(e);
  process.exit(1);
});
