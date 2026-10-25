#!/usr/bin/env node
/**
 * 낱장 슬라이드 빌더
 *
 *   node oneoff/make.js <파일이름>
 *
 * oneoff/<파일이름>.js 가 내보낸 슬라이드 함수들로 한 파일을 만든다.
 * 테마·레이아웃·글꼴이 본 덱과 같으므로 그대로 복사해 붙여 넣을 수 있다.
 */
const path = require("path");
const fs = require("fs");
const PptxGenJS = require("pptxgenjs");
const { FONT, THEME, defineLayouts, enforceFont } = require("../src/theme");
const { applyTheme } = require("../src/apply-theme");
const { fixEastAsianFont } = require("../src/finalize");
const { flushWarnings } = require("../src/components");

async function main() {
  const name = process.argv[2];
  if (!name) {
    console.error("사용법: node oneoff/make.js <파일이름>");
    process.exit(2);
  }
  const mod = require(path.join(__dirname, name));

  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_WIDE";
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  pres.author = "박성은 목사";
  pres.title = mod.title || name;

  defineLayouts(pres);
  enforceFont(pres, FONT);
  pres.addSection({ title: mod.section || mod.title || name });
  mod.slides.forEach((build) => build(pres));

  const outDir = path.join(__dirname, "..", "dist");
  fs.mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, `${mod.fileName || name}.pptx`);
  await pres.writeFile({ fileName: out });
  await applyTheme(out, THEME);
  await fixEastAsianFont(out, FONT);

  const warnings = flushWarnings();
  if (warnings.length) {
    console.warn(`\n⚠ 레이아웃 경고 ${warnings.length}건`);
    warnings.forEach((w) => console.warn("  - " + w));
  }
  console.log(`생성 완료: ${out}  (${pres.slides.length} 슬라이드)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
