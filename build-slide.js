#!/usr/bin/env node
/**
 * 한 장만 뽑아내기
 *
 *   node build-slide.js 15          # 15번 슬라이드 한 장짜리 pptx
 *   node build-slide.js 15 내이름    # 파일명 지정
 *
 * 전체 덱을 만든 뒤 지정한 슬라이드만 남긴다. 테마·레이아웃·글꼴이
 * 본 덱과 똑같으므로, 받은 한 장을 본 덱에 그대로 붙여 넣어도 어긋나지 않는다.
 */
const path = require("path");
const fs = require("fs");
const { execFileSync } = require("child_process");

const num = parseInt(process.argv[2], 10);
if (!num) {
  console.error("사용법: node build-slide.js <슬라이드번호> [파일명]");
  process.exit(2);
}
const label = process.argv[3] || `slide-${String(num).padStart(2, "0")}`;

const outDir = path.join(__dirname, "dist");
const full = path.join(outDir, "_full.pptx");
const out = path.join(outDir, `${label}.pptx`);

// 1) 전체 덱을 임시로 만든다 (번호와 섹션이 본 덱과 같아야 하므로)
execFileSync(process.execPath, [path.join(__dirname, "build.js"), "01", "--out", full], { stdio: "inherit" });

// 2) 지정한 슬라이드만 남기고 나머지를 들어낸다
execFileSync("python3", [path.join(__dirname, "tools", "keep-slide.py"), full, String(num), out], { stdio: "inherit" });
fs.unlinkSync(full);
console.log(`생성 완료: ${out}`);
