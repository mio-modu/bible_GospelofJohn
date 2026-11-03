#!/usr/bin/env node
/**
 * 강의안 PPTX 빌더
 *
 *   node build.js        # 1강 생성
 *   node build.js 02     # 특정 강 생성
 *   node build.js 03 --notes 28   # 발표자 노트 글자 크기를 바꿔 생성
 *
 * 결과물은 dist/ 에 생성된다.
 */
const path = require("path");
const fs = require("fs");
const PptxGenJS = require("pptxgenjs");
const { FONT, THEME, useTheme, defineLayouts, enforceFont } = require("./src/theme");
const { applyTheme } = require("./src/apply-theme");
const { flushWarnings } = require("./src/components");
const { finalizeDeck } = require("./src/finalize");

const LESSONS = {
  "01": require("./src/lessons/lesson01"),
  "02": require("./src/lessons/lesson02"),
  "03": require("./src/lessons/lesson03"),
};

/** 발표자 노트 글자 크기 (pt). 기본 24, 강별 설정이나 --notes 로 바꾼다. */
function notesPt(lesson) {
  const flag = process.argv.indexOf("--notes");
  if (flag > -1 && process.argv[flag + 1]) return Number(process.argv[flag + 1]);
  return lesson.notesSize || 24;
}

async function build(id) {
  const lesson = LESSONS[id];
  if (!lesson) {
    console.error(`알 수 없는 강의 번호: ${id} (가능: ${Object.keys(LESSONS).join(", ")})`);
    process.exit(2);
  }

  useTheme(lesson.palette || "glory"); // 레이아웃을 만들기 전에 팔레트를 정한다

  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 in — 반드시 슬라이드 추가 전에 설정
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  pres.author = "박성은 목사";
  pres.title = `요한복음 제${Number(id)}강 ${lesson.title}`;
  pres.subject = lesson.subject;

  defineLayouts(pres, lesson.layoutOpts || {});
  enforceFont(pres, FONT); // 모든 글자를 맑은 고딕으로 고정
  lesson.parts.forEach((part) => part(pres));

  const outDir = path.join(__dirname, "dist");
  fs.mkdirSync(outDir, { recursive: true });
  const flag = process.argv.indexOf("--out");
  const out = flag > -1 ? process.argv[flag + 1] : path.join(outDir, lesson.fileName);
  await pres.writeFile({ fileName: out });
  await applyTheme(out, THEME); // pptxgenjs 는 테마 색을 쓰지 못하므로 사후 주입
  const fin = await finalizeDeck(out, { font: FONT, notesSize: notesPt(lesson) });

  const warnings = flushWarnings();
  if (warnings.length) {
    console.warn(`\n⚠ 레이아웃 경고 ${warnings.length}건 (글자가 상자를 넘칠 수 있음)`);
    warnings.forEach((w) => console.warn("  - " + w));
    console.warn("");
  }
  if (fin.idFixes) console.log(`도형 ID 충돌 ${fin.idFixes}건 정리`);
  console.log(`생성 완료: ${out}  (${pres.slides.length} 슬라이드, 노트 ${notesPt(lesson)}pt)`);
}

build(process.argv[2] || "01").catch((e) => {
  console.error(e);
  process.exit(1);
});
