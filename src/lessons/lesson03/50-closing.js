/** 제3강 · 마무리 */
const { LAYOUT } = require("../../theme");
const { rows, statement, cardGrid, scripture } = require("../../components");

module.exports = function closing(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: "마무리" });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: "마무리" });

  // ── 3강 한 장 정리
  {
    const s = S("CONTENT");
    s.addText("3강 한 장 정리", { placeholder: "title" });
    rows(
      s,
      pres,
      [
        { tag: "고치심", head: "38년 된 병자 — 일어나 네 자리를 들고 걸어가라", body: "" },
        { tag: "선포", head: "내 아버지께서 일하시니 나도 일한다 — 하나님과 동등", body: "" },
        { tag: "권한", head: "생명과 심판 — 사망에서 생명으로 옮겼느니라 (5:24)", body: "" },
        { tag: "증언", head: "요한 · 사역 · 아버지 · 성경, 그리고 오늘은 성령", body: "" },
        { tag: "걸림돌", head: "하나님을 사랑하지 않음 · 자기 영광 · 성경을 믿지 않음", body: "" },
        { tag: "표적", head: "오병이어 · 물 위를 걸으심 — 창조와 자연의 주", body: "" },
        { tag: "가르침", head: "나는 생명의 떡이다 — 너희도 가려느냐", body: "" },
      ],
      { y: 1.82, headSize: 25, tagW: 1.9, gap: 0.08 }
    );
    s.addNotes(
      "3과 전체를 한 장으로 되짚습니다.\n\n" +
        "네 가지 방식 — 고치심, 선포하심, 표적, 가르치심 — 이 모두 한 곳을 가리킵니다. " +
        "'이분이 누구신가.'\n\n" +
        "그리고 그 끝에서 사람이 갈립니다. 표적만 구한 사람은 떠났고, " +
        "말씀을 붙든 사람은 남았습니다.\n\n" +
        "2과와 이어 주십시오. 2과는 '영광이 드러났는데 믿는 자에게만 보였다'였고, " +
        "3과는 '그 영광 앞에서 사람이 갈린다'입니다."
    );
  }

  // ── 한 문장으로
  {
    const s = S("CONTENT_DARK");
    s.addText("한 문장으로", { placeholder: "title" });
    statement(s, pres, {
      y: 2.4, size: 42, dark: true,
      text: "떡을 구하면 떠나고\n말씀을 구하면 남습니다",
      sub: "표적은 표지판입니다. 목적지가 아닙니다.",
    });
    s.addNotes(
      "오늘 강의를 한 문장으로 묶습니다.\n\n" +
        "오병이어를 먹은 오천 명이 다음 날 쫓아왔습니다. 그런데 떡 이야기가 끝나고 " +
        "'내 살을 먹으라'는 말씀이 나오자 떠났습니다. 떡을 구했기 때문입니다.\n\n" +
        "베드로는 남았습니다. 다 이해해서가 아니라 '영생의 말씀이 주께 있사오니' 때문입니다.\n\n" +
        "표적은 표지판입니다. 표지판 앞에 주저앉으면 목적지에 못 갑니다. " +
        "표적의 근원이신 분께 가야 합니다.\n\n" +
        "기도로 마치시되, 오늘 나눔에서 나온 '내 삶의 무게중심'을 한 번 더 언급해 주십시오."
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
        { tag: "1", head: "3강 소감문", body: "가장 마음에 남은 한 장면", foot: "제출 : 다음 주" },
        { tag: "2", head: "제4과 예습", body: "교재 질문 미리 답하기", foot: "" },
        { tag: "3", head: "통독", body: "요한복음 5~6장 다시", foot: "권장" },
        { tag: "4", head: "암송", body: "요한복음 5:24", foot: "필수" },
      ],
      { y: 1.9, h: 2.9, cols: 4, headSize: 23, bodySize: 18, footSize: 16 }
    );
    scripture(s, pres, {
      x: M, y: 5.1, w: LAYOUT.CONTENT_W, h: 1.6, dark: false, fontSize: 23,
      text: "내 말을 듣고 또 나 보내신 이를 믿는 자는 영생을 얻었고 심판에 이르지 아니하나니 사망에서 생명으로 옮겼느니라",
      ref: "요한복음 5:24 — 이번 주 암송 구절",
    });
    s.addNotes(
      "소감문은 분량보다 한 장면에 집중하게 하십시오.\n\n" +
        "5:24는 반드시 암송하게 하십시오. 구원의 확신을 다루는 가장 분명한 구절입니다. " +
        "다음 주 시작할 때 함께 외우고 시작하면 좋습니다.\n\n" +
        "소그룹에 남길 질문 하나 — " +
        "'이번 주, 내가 구하고 있는 것은 떡입니까 말씀입니까?'"
    );
  }

  // ── 맺음
  {
    const s = pres.addSlide({ masterName: "COVER", sectionTitle: "마무리" });
    s.addText("제3강을 마칩니다", { placeholder: "kicker" });
    s.addText("영광을 드러내시다", { placeholder: "title" });
    s.addText(
      [
        { text: "“주여 영생의 말씀이 주께 있사오니", options: { italic: true, breakLine: true } },
        { text: "우리가 누구에게로 가오리이까”", options: { italic: true, breakLine: true } },
        { text: "요한복음 6:68", options: { bold: true, fontSize: 17 } },
      ],
      { placeholder: "body" }
    );
    s.addNotes("6:68을 함께 읽고 기도로 마무리하십시오.");
  }
};
