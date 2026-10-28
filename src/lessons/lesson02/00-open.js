/** 제2강 · 여는 부분 (3장) — 화면은 짧게, 설명은 발표자 노트로 */
const { LAYOUT } = require("../../theme");
const { rows, statement, keyline } = require("../../components");

const SECTION = "여는 말";

module.exports = function open(pres) {
  const C = pres.SchemeColor;
  pres.addSection({ title: SECTION });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: SECTION });

  // ── 표지
  {
    const s = S("COVER");
    s.addText("OBC 요한복음 · 제 2 강", { placeholder: "kicker" });
    s.addText("영광이 드러나다", { placeholder: "title" });
    s.addText(
      [
        { text: "요한복음 1:19 ~ 4:54", options: { bold: true, breakLine: true } },
        { text: "BEE Korea 교재 제2과", options: { fontSize: 17, breakLine: true } },
        { text: "박성은 목사", options: { fontSize: 17, color: C.accent1, bold: true } },
      ],
      { placeholder: "body" }
    );
    s.addNotes(
      "인사 → 소감문 나눔 → 1강 복습 → 2과 본론.\n\n" +
        "2과는 범위가 넓습니다(1:19~4:54). 다 설명하려 하지 말고 네 장면만 붙드십시오 — " +
        "세례 요한의 증언, 첫 제자들, 가나와 성전, 니고데모와 수가성 여인."
    );
  }

  // ── 지난 주 한 장
  {
    const s = S("CONTENT_DARK");
    s.addText("지난 주", { placeholder: "title" });
    statement(s, pres, {
      y: 2.3, size: 44, dark: true,
      text: "예수님은 누구신가",
      sub: "말씀 · 창조주 · 인도자 · 하나님",
      ref: "요한복음 1:1~18",
    });
    keyline(s, pres, { y: 5.4, h: 1.0, text: "그러면 그 영광은 어떻게 드러나는가", fontSize: 28 });
    s.addNotes(
      "1강 복습을 길게 하지 마십시오. 이 한 장으로 충분합니다.\n\n" +
        "1강은 '예수님은 누구신가'에 답했습니다 — 태초부터 계신 말씀, 만물을 지으신 창조주, " +
        "어둠을 비추는 빛이자 인도자, 그리고 육신이 되어 오신 하나님.\n\n" +
        "2과는 그다음 질문입니다. 그 영광이 실제로 어떻게, 누구에게 드러나는가. " +
        "오늘 보실 것은 그 영광이 사람들 앞에 처음 드러나기 시작하는 장면들입니다."
    );
  }

  // ── 2과 학습 개요
  {
    const s = S("CONTENT");
    s.addText("오늘의 네 장면", { placeholder: "title" });
    rows(
      s,
      pres,
      [
        { tag: "1", head: "준비", body: "세례 요한의 증언 · 첫 제자들   1:19~51" },
        { tag: "2", head: "제자들에게", body: "가나의 혼인잔치 · 성전 청결   2장" },
        { tag: "3", head: "니고데모에게", body: "거듭남 · 믿음   3장" },
        { tag: "4", head: "사마리아인에게", body: "수가성 여인 · 영과 진리의 예배   4장" },
      ],
      { y: 1.86, headSize: 27, bodySize: 18, tagW: 1.0, gap: 0.13 }
    );
    s.addNotes(
      "2과의 구조를 한 번에 보여주는 장입니다.\n\n" +
        "주목할 점은 영광이 드러나는 '대상'입니다. 처음에는 제자들에게(2장), " +
        "다음은 유대 최고의 종교 지도자에게(3장), 그다음은 유대인이 상종하지 않던 " +
        "사마리아 여인에게(4장) 드러납니다.\n\n" +
        "안에서 밖으로, 중심에서 변두리로 퍼져 갑니다. 이것이 2과 전체를 꿰는 흐름입니다. " +
        "4장 끝의 왕의 신하 아들 치유(두 번째 표적)까지 가면 이방 지역까지 닿습니다."
    );
  }
};
