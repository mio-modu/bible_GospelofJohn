/** 빌드 마무리 — pptxgenjs 가 남기는 빈 East Asian 글꼴 칸을 채운다. */
const fs = require("fs");

/** 테마 fontScheme 의 <a:ea> 가 비어 있으면 한글이 기본 글꼴로 떨어진다. */
async function fixEastAsianFont(deckPath, font) {
  const JSZip = require(require.resolve("jszip", { paths: [require.resolve("pptxgenjs")] }));
  const zip = await JSZip.loadAsync(fs.readFileSync(deckPath));
  const part = "ppt/theme/theme1.xml";
  const xml = await zip.file(part).async("string");
  const esc = font.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  zip.file(part, xml.replace(/<a:ea typeface=""\/>/g, `<a:ea typeface="${esc}"/>`));
  fs.writeFileSync(deckPath, await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
}

module.exports = { fixEastAsianFont };
