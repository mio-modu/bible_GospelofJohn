/** 제2강 · PART 6 마무리 */
const { LAYOUT } = require("../../theme");
const { rows, statement, keyline, cardGrid, scripture } = require("../../components");

module.exports = function closing(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: "마무리" });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: "마무리" });

  // ── 2강 한 장 정리
  {
    const s = S("CONTENT");
    s.addText("2강 한 장 정리", { placeholder: "title" });
    rows(
      s,
      pres,
      [
        { tag: "증언", head: "세례 요한 — 나는 소리다", body: "" },
        { tag: "부름", head: "첫 제자들 — 와서 보라, 호칭이 바뀐다", body: "" },
        { tag: "표적 1", head: "가나 — 물이 포도주로", body: "" },
        { tag: "성전", head: "이제 성전은 당신입니다", body: "" },
        { tag: "거듭남", head: "니고데모 — 물과 성령으로", body: "" },
        { tag: "예배", head: "사마리아 여인 — 영과 진리로", body: "" },
        { tag: "표적 2", head: "왕의 신하 — 말씀만으로", body: "" },
      ],
      { y: 1.82, headSize: 26, tagW: 2.1, gap: 0.08 }
    );
    s.addNotes(
      "2과 전체를 한 장으로 되짚습니다. 각 장면이 결국 한 질문을 향합니다 — " +
        "'이분이 누구신가.'\n\n" +
        "세례 요한은 자기를 비우며 가리켰고, 첫 제자들은 와서 보았고, " +
        "가나에서 영광이 처음 드러났고, 성전이 예수님 자신으로 옮겨졌고, " +
        "니고데모는 거듭남을, 사마리아 여인은 예배를, 왕의 신하는 말씀을 배웠습니다.\n\n" +
        "흐름 하나만 강조해 주십시오 — 표적을 보고 믿는 믿음에서 " +
        "말씀을 듣고 믿는 믿음으로 올라갑니다."
    );
  }

  // ── 한 문장
  {
    const s = S("CONTENT_DARK");
    s.addText("한 문장으로", { placeholder: "title" });
    statement(s, pres, {
      y: 2.4, size: 42, dark: true,
      text: "영광은 드러났습니다\n믿는 자에게만 보입니다",
      sub: "제자들은 믿었고, 종교 지도자들은 표적을 요구했습니다",
    });
    s.addNotes(
      "2과의 제목이 '영광이 드러나다'입니다. 드러났는데 모두가 본 것은 아닙니다.\n\n" +
        "가나에서 하인들은 물을 길었고, 연회장은 맛만 알았고, 제자들은 영광을 보고 믿었습니다. " +
        "같은 자리, 같은 사건, 다른 결과입니다.\n\n" +
        "니고데모는 영적인 말씀을 육신으로 들었고, 사마리아 여인은 생수를 우물물로 들었습니다. " +
        "그런데 여인은 끝까지 대화를 이어가 메시아를 만났습니다.\n\n" +
        "결론 — 영광은 이미 드러나 있습니다. 문제는 보는 눈입니다. " +
        "그 눈은 거듭남으로 열립니다. 그래서 3장이 2과의 심장입니다."
    );
  }

  // ── 다음 주까지
  {
    const s = S("CONTENT");
    s.addText("다음 주까지", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "2강 소감문", body: "가장 마음에 남은 한 장면", foot: "제출 : 다음 주" },
        { tag: "2", head: "제3과 예습", body: "교재 질문 미리 답하기", foot: "영광을 체험하다" },
        { tag: "3", head: "통독", body: "요한복음 1~4장 다시", foot: "권장" },
        { tag: "4", head: "암송", body: "요한복음 3:16", foot: "필수" },
      ],
      { y: 1.9, h: 2.9, cols: 4, headSize: 23, bodySize: 18, footSize: 16 }
    );
    scripture(s, pres, {
      x: M, y: 5.1, w: LAYOUT.CONTENT_W, h: 1.6, dark: false, fontSize: 24,
      text: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라",
      ref: "요한복음 3:16 — 이번 주 암송 구절",
    });
    s.addNotes(
      "소감문은 분량보다 한 장면에 집중하게 하십시오.\n\n" +
        "3:16은 반드시 암송하게 하십시오. 다음 주 시작할 때 함께 외우고 시작하면 좋습니다.\n\n" +
        "소그룹에서 나눌 질문 하나만 남겨 주십시오 — " +
        "'이번 주, 내가 눈을 들어 보아야 할 밭은 어디입니까?'"
    );
  }

  // ── 맺음
  {
    const s = pres.addSlide({ masterName: "COVER", sectionTitle: "마무리" });
    s.addText("제2강을 마칩니다", { placeholder: "kicker" });
    s.addText("영광이 드러나다", { placeholder: "title" });
    s.addText(
      [
        { text: "“예수께서 이 처음 표적을 갈릴리 가나에서 행하여", options: { italic: true, breakLine: true } },
        { text: "그의 영광을 나타내시매 제자들이 그를 믿었더라”", options: { italic: true, breakLine: true } },
        { text: "요한복음 2:11", options: { bold: true, fontSize: 17 } },
      ],
      { placeholder: "body" }
    );
    s.addNotes("마치며 2:11을 함께 읽고 기도로 마무리하십시오.");
  }
};
