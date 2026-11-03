/** 제3강 · 여는 장 */
const { LAYOUT } = require("../../theme");
const { rows, statement, keyline } = require("../../components");

module.exports = function open(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: "여는 장" });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: "여는 장" });

  // ── 표지
  {
    const s = S("COVER");
    s.addText("O B C   요한복음  ·  제 3 강", { placeholder: "kicker" });
    s.addText("영광을 드러내시다", { placeholder: "title" });
    s.addText(
      [
        { text: "요한복음 4:43 ~ 6:71", options: { bold: true, breakLine: true } },
        { text: "BEE Korea 교재 제3과", options: { fontSize: 17, color: C.accent6, breakLine: true } },
        { text: "박성은 목사", options: { fontSize: 17, color: C.accent6 } },
      ],
      { placeholder: "body" }
    );
    s.addNotes(
      "제3과 '영광을 드러내시다'입니다. 요 4:43~6:71.\n\n" +
        "2과가 '영광이 드러나다'였다면 3과는 '영광을 드러내시다'입니다. " +
        "조사 하나가 바뀌었습니다. 드러난 것에서, 예수님이 능동적으로 드러내시는 것으로 옮겨갑니다.\n\n" +
        "오늘은 네 가지 방식으로 영광을 드러내십니다 — 고치심, 선포하심, 표적, 가르치심.\n" +
        "그리고 그 끝에서 사람들이 갈립니다. 떠나는 자와 남는 자."
    );
  }

  // ── 지난 주
  {
    const s = S("CONTENT_DARK");
    s.addText("지난 주", { placeholder: "title" });
    statement(s, pres, {
      y: 2.1, size: 36, dark: true,
      text: "영광은 드러났습니다\n믿는 자에게만 보였습니다",
      sub: "세례 요한 · 첫 제자들 · 가나 · 니고데모 · 사마리아 여인",
      ref: "요한복음 1:19~4:54",
    });
    keyline(s, pres, { y: 5.6, h: 0.92, text: "오늘은 그 영광을 친히 드러내십니다", fontSize: 27 });
    s.addNotes(
      "복습은 짧게. 이 한 장이면 충분합니다.\n\n" +
        "2과에서 본 것 — 세례 요한이 가리켰고, 첫 제자들이 와서 보았고, " +
        "가나에서 첫 표적이 있었고, 니고데모는 거듭남을, 사마리아 여인은 예배를 배웠습니다.\n\n" +
        "그 모든 장면의 공통점은 '같은 자리, 다른 결과'였습니다. " +
        "영광은 드러났는데 믿는 자에게만 보였습니다.\n\n" +
        "3과는 거기서 한 걸음 나아갑니다. 예수님이 직접, 적극적으로 자신을 드러내십니다. " +
        "그리고 그 드러냄 앞에서 사람들이 둘로 갈립니다."
    );
  }

  // ── 오늘의 네 걸음
  {
    const s = S("CONTENT");
    s.addText("오늘, 네 가지 방식으로", { placeholder: "title" });
    rows(
      s,
      pres,
      [
        { tag: "1", head: "고치심으로", body: "왕의 신하의 아들 · 38년 된 병자    4:43~5:15" },
        { tag: "2", head: "선포하심으로", body: "나는 아버지와 같다 · 생명과 심판    5:16~47" },
        { tag: "3", head: "표적으로", body: "오병이어 · 물 위를 걸으심    6:1~21" },
        { tag: "4", head: "가르치심으로", body: "나는 생명의 떡이다    6:22~71" },
      ],
      { y: 1.88, headSize: 28, bodySize: 18, tagW: 0.8, gap: 0.12 }
    );
    s.addNotes(
      "오늘의 지도입니다. 네 걸음으로 갑니다.\n\n" +
        "고치심 — 몸을 고치시며 자신이 누구신지 보이십니다.\n" +
        "선포하심 — 말로 직접 밝히십니다. '나는 아버지와 같다.' 여기서 갈등이 폭발합니다.\n" +
        "표적 — 오병이어와 물 위를 걸으심. 창조의 능력과 자연의 주 되심.\n" +
        "가르치심 — '나는 생명의 떡이다.' 요한복음 일곱 자기선언 중 첫 번째가 여기 나옵니다.\n\n" +
        "흐름을 하나로 꿰십시오. 1강에서 '예수님은 누구신가', 2강에서 '그 영광이 어떻게 드러나는가', " +
        "그리고 오늘 '그 영광 앞에서 나는 어떻게 반응하는가'입니다.\n\n" +
        "마지막 장면이 오늘의 과녁입니다 — 6:67 '너희도 가려느냐.'"
    );
  }
};
