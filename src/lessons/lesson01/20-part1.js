/** 제1강 · PART 2 — 1과 전반 : 예수님에 대한 증언인 요한복음 (질문 1~21, 12장) */
const { LAYOUT, HEX } = require("../../theme");
const { cardGrid, bullets, keyline, subhead, scripture, flow, compare } = require("../../components");

const SECTION = "1과 · 예수님에 대한 증언";

module.exports = function part1(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: SECTION });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: SECTION });

  const qtag = (s, text) =>
    s.addText(text, {
      x: 10.7, y: LAYOUT.TITLE_Y, w: 1.88, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 16, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });

  // ── 섹션 구분
  {
    const s = S("DIVIDER");
    s.addText("02", { placeholder: "num" });
    s.addText("제1과  영광을 만나기 위한 준비", { placeholder: "title" });
    s.addText("요한복음 ~1:18   ·   예수님은 누구신가", { placeholder: "body" });
  }

  // ── 1과 학습 개요
  {
    const s = S("CONTENT");
    s.addText("1과 학습 개요", { placeholder: "title" });
    compare(s, pres, {
      y: 1.76, h: 5.0,
      left: {
        head: "1. 예수님에 대한 증언인 요한복음",
        fontSize: 17,
        items: [
          "가. 사도 요한 — 저자는 누구인가 (1~5)",
          "나. 요한과 예수님의 만남 (6~8)",
          "다. 요한의 변화 (9)",
          "라. 요한의 증언으로서의 요한복음 (10~12)",
          "마. 요한의 사역 (13~17)",
          "바. 기록목적 (18~21)",
        ],
      },
      right: {
        head: "2. 하나님에 대한 증언이신 예수님",
        fontSize: 17,
        items: [
          "가. 창조주이신 예수님 (1:1~3 / 22~28)",
          "나. 인도자이신 예수님 (1:4~13 / 29~35)",
          "다. 하나님이신 예수님 (1:14~18 / 36~41)",
          "",
          "오늘의 흐름 — 저자 요한을 알고,\n그가 증언한 예수님을 만난다",
        ],
      },
    });
    s.addNotes("“저자에 대해 알면 알수록 그 글을 더 깊이 이해할 수 있다.”");
  }

  // ── 가. 사도 요한 — 저자 추적
  {
    const s = S("CONTENT");
    s.addText("가. 사도 요한 — 저자는 누구인가", { placeholder: "title" });
    qtag(s, "질문 1~5");
    scripture(s, pres, {
      x: M, y: 1.72, w: 11.8, h: 1.5, dark: false, fontSize: 21,
      text: "이 일을 증언하고 이것을 기록한 제자가 이 사람이라 우리는 그의 증언이 참된 줄 아노라",
      ref: "요한복음 21:24  ·  cf. 21:20 “예수께서 사랑하시던 그 제자”",
    });
    subhead(s, pres, { y: 3.42, tag: "소거법", text: "저자는 이름을 밝히지 않는다 → 소거법으로 찾아간다" });
    flow(
      s,
      pres,
      [
        { head: "열두 제자", body: "후보 12명" },
        { head: "이름이 나온 제자 제외", body: "빌립 · 베드로 · 안드레\n도마 · 유다 · 가룟 유다" },
        { head: "6명으로 압축", body: "야고보 · 요한 · 바돌로매\n마태 · 야고보 · 시몬" },
        { head: "신임하신 3인", body: "베드로 · 야고보 · 요한" },
        { head: "요한", body: "최종 결론" },
      ],
      { y: 4.04, h: 1.86, headSize: 17, bodySize: 14.5 }
    );
    keyline(s, pres, {
      y: 6.04, h: 0.76,
      text: "베드로 — 이름이 언급되어 제외   /   야고보 — 일찍이 순교하여 제외 (행 12:2)",
      fontSize: 19,
    });
  }

  // ── 사도 요한은 누구인가
  {
    const s = S("CONTENT");
    s.addText("사도 요한은 누구인가", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "가족", head: "어부의 아들", body: "아버지 세베대\n어머니 살로메\n— 예수님의 이모" },
        { tag: "형제", head: "야고보의 동생", body: "형과 함께 부르심을 받고\n‘우레의 아들’이라 불렸다" },
        { tag: "출발", head: "세례요한의 제자", body: "요 1:35~40\n증언을 듣고 따라갔다" },
        { tag: "맡음", head: "마리아를 모심", body: "요 19:26~27\n십자가 아래 맡기신 제자" },
        { tag: "교회", head: "예루살렘 교회의 기둥", body: "갈 2:9\n초대교회를 돌보았다" },
        { tag: "기록", head: "신약 다섯 권의 저자", body: "복음서 · 서신 3권\n요한계시록" },
      ],
      { y: 1.72, h: 5.1, cols: 3, headSize: 21, bodySize: 16.5 }
    );
  }

  // ── 나. 요한과 예수님의 만남
  {
    const s = S("CONTENT");
    s.addText("나. 요한과 예수님의 만남", { placeholder: "title" });
    qtag(s, "질문 6~8");
    scripture(s, pres, {
      x: M, y: 1.72, w: 11.8, h: 1.5, dark: false, fontSize: 21,
      text: "무서워하지 말라 이제 후로는 네가 사람을 취하리라 하시니 그들이 모든 것을 버려 두고 예수를 따르니라",
      ref: "누가복음 5:10~11",
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "6", head: "요한은 누구였나", body: "세베대의 아들\n야고보의 형제\n베드로의 동업자 · 어부" },
        { tag: "7", head: "왜 즉각 응답했나", body: "말씀에 순종해 그물을 내리자\n많은 고기가 잡힘\n→ 능력을 직접 경험" },
        { tag: "8", head: "무엇을 포기했나", body: "배를 포함한 생업 전부\n— 삶의 근간이었다" },
      ],
      { y: 3.4, h: 2.74, cols: 3, headSize: 21, bodySize: 17 }
    );
    keyline(s, pres, { y: 6.32, h: 0.48, text: "만남은 소명으로, 소명은 순종과 내려놓음으로 이어집니다", fontSize: 22 });
  }

  // ── 나눔 Q1 · Q2
  {
    const s = S("SHARE");
    s.addText("나눔 · 질문 Q1 · Q2", { placeholder: "kicker" });
    s.addText("나는 무엇을 내려놓았는가", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "Q1", head: "예수님을 믿기로 결정했을 때 가장 영향을 준 것은?", body: "그분의 인격  ·  죄를 사하시는 능력\n나를 향한 사랑  ·  말씀의 권위" },
        { tag: "Q2", head: "예수님을 따르기 위해 포기한 것, 포기해야 할 것은?", body: "포기할 때 걸림돌이 되는 이유는?\n후회한 적이 있습니까?\n그때 예수님께서 베푸신 것은?" },
      ],
      { y: 2.6, h: 3.3, cols: 2, headSize: 21, bodySize: 18, dark: true, fill: C.text2 }
    );
    s.addText("조별 나눔 10분 → 전체 나눔 2명", {
      x: M, y: 6.08, w: 8, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 16, bold: true, color: C.accent1, objectName: "guide",
    });
  }

  // ── 다. 요한의 변화
  {
    const s = S("CONTENT");
    s.addText("다. 요한의 변화 — 변하기 전의 모습", { placeholder: "title" });
    qtag(s, "질문 9");
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "막 3:17", body: "‘우레의 아들’이라는\n이름을 주심", foot: "급함" },
        { tag: "2", head: "막 9:38~39", body: "제자 아닌 이의 축사를 금함\n→ “금하지 말라”", foot: "배타적" },
        { tag: "3", head: "막 10:35~41", body: "좌우편에 앉기를 구함\n→ “고난에 동참하라”", foot: "교만 · 자기중심" },
        { tag: "4", head: "눅 9:52~56", body: "사마리아 마을에\n불을 명해 멸하려 함", foot: "무자비" },
      ],
      { y: 1.76, h: 3.5, cols: 4, headSize: 20, bodySize: 16, footSize: 15 }
    );
    keyline(s, pres, {
      y: 5.44, h: 1.36,
      text: "부정적 : 급함 · 자기중심 · 교만 · 무자비     /     긍정적 : 적극적인 면\n네 본문 모두 예수님께 꾸중을 들은 장면 — 요한은 ‘완성된 사람’으로 부름받지 않았습니다.",
      fontSize: 19,
    });
  }

  // ── Before / After + 차트
  {
    const s = S("CONTENT");
    s.addText("우레의 아들에서 사랑의 사도로", { placeholder: "title" });
    compare(s, pres, {
      x: M, y: 1.74, w: 7.1, h: 4.2,
      left: {
        head: "만나기 전",
        fontSize: 18,
        items: ["급하고 목소리가 크다", "권세에 민감하다", "자기중심적이고 교만하다", "반대자에게 무자비하다"],
      },
      right: {
        head: "만난 후",
        fontSize: 18,
        items: ["예수님을 닮아 갔다", "사랑을 중요하게 여겼다", "새 계명 : 서로 사랑하라", "사랑의 사도가 되었다"],
      },
    });
    s.addChart(
      pres.ChartType.bar,
      [{ name: "‘사랑’ 사용 횟수", labels: ["마태", "마가", "누가", "요한"], values: [12, 7, 16, 51] }],
      {
        x: 8.3, y: 1.74, w: 4.28, h: 4.2,
        barDir: "col",
        showTitle: true,
        title: "복음서별 ‘사랑’ 사용 횟수",
        titleFontSize: 16,
        titleColor: HEX.dk1,
        showLegend: false,
        showValue: true,
        dataLabelPosition: "outEnd",
        dataLabelFontSize: 15,
        dataLabelFontFace: "+mn-lt",
        dataLabelColor: HEX.dk1,
        chartColors: [HEX.accent4, HEX.accent4, HEX.accent4, HEX.accent1],
        catAxisLabelColor: HEX.accent3,
        catAxisLabelFontSize: 14,
        catAxisLabelFontFace: "+mn-lt",
        valAxisHidden: true,
        valGridLine: { style: "none" },
        catGridLine: { style: "none" },
        barGapWidthPct: 55,
      }
    );
    keyline(s, pres, { y: 6.1, h: 0.7, text: "성품은 타고나는 것이 아니라, 누구와 함께 있는지에 따라 바뀝니다", fontSize: 22 });
  }

  // ── 라. 요한의 증언
  {
    const s = S("CONTENT");
    s.addText("라. 요한의 증언으로서의 요한복음", { placeholder: "title" });
    qtag(s, "질문 10~12");
    cardGrid(
      s,
      pres,
      [
        { tag: "10", head: "무엇에 근거한 기록인가", body: "자신이 직접 ‘본 것’\n“이를 본 자가 증언하였으니\n그 증언이 참이라” (19:35)" },
        { tag: "11", head: "진실성은 어떻게 말하는가", body: "“우리는 그의 증언이\n참된 줄 아노라” (21:24)\n공동체가 함께 보증한다" },
      ],
      { y: 1.76, h: 2.5, cols: 2, headSize: 21, bodySize: 17 }
    );
    subhead(s, pres, { y: 4.42, tag: "12", text: "요한은 결정적인 네 장면 모두에 있었다" });
    cardGrid(
      s,
      pres,
      [
        { head: "예수님의 죽음", body: "십자가 현장에서\n(19:26~27)" },
        { head: "빈 무덤", body: "가장 먼저 도달\n(20:3~8)" },
        { head: "부활하신 예수님", body: "만나고 알아본 제자\n(20:19~20)" },
        { head: "승천", body: "목격한 제자\n(행 1:9~13)" },
      ],
      { y: 5.02, h: 1.78, cols: 4, headSize: 19, bodySize: 16 }
    );
  }

  // ── 마. 요한의 사역
  {
    const s = S("CONTENT");
    s.addText("마. 요한의 사역 — 무엇을 증언했는가", { placeholder: "title" });
    qtag(s, "질문 13~17");
    cardGrid(
      s,
      pres,
      [
        { tag: "13", head: "증언의 내용", body: "부활\n(행 3:11~16)" },
        { tag: "14", head: "증언의 결과", body: "핍박을 받음\n옥에 갇히고 심문당함" },
        { tag: "15", head: "심문자들 앞에서", body: "담대히 말함\n(행 4:13)" },
        { tag: "16", head: "금지 명령에 대한 대답", body: "“하나님의 말씀보다\n너희 말이 옳은가 판단하라”\n(행 4:19)" },
      ],
      { y: 1.76, h: 3.12, cols: 4, headSize: 19, bodySize: 16 }
    );
    keyline(s, pres, { y: 5.04, h: 0.92, text: "“우리는 보고 들은 것을 말하지 아니할 수 없다” — 사도행전 4:20", fontSize: 26 });
    s.addText("17. 핍박을 감수한 증언은, 그 기록이 진실임을 보여주는 객관적인 증거입니다.", {
      x: M, y: 6.2, w: LAYOUT.CONTENT_W, h: 0.42, margin: 0, isTextBox: true,
      fontSize: 19, bold: true, color: C.accent5, objectName: "note",
    });
    s.addNotes("여기서 잠시 멈추고 질문: 여러분을 담대하게 만드는 것은 무엇입니까?");
  }

  // ── 바. 기록목적
  {
    const s = S("CONTENT");
    s.addText("바. 기록목적", { placeholder: "title" });
    qtag(s, "질문 18~21");
    cardGrid(
      s,
      pres,
      [
        { tag: "①", head: "믿게 하려 함", body: "하나님의 아들\n그리스도이심을 믿도록" },
        { tag: "②", head: "생명을 얻게 하려 함", body: "그 이름을 힘입어\n생명을 얻도록" },
      ],
      { y: 1.68, h: 2.2, cols: 2, headSize: 22, bodySize: 18 }
    );
    subhead(s, pres, { y: 4.12, tag: "뜻", text: "그러면 이 말들은 각각 무슨 뜻인가" });
    cardGrid(
      s,
      pres,
      [
        { tag: "19", head: "하나님의 아들", body: "하나님과 동일한 본성\n피조물이 아니다" },
        { tag: "20", head: "그리스도", body: "‘기름부음 받은 자’\n왕 · 제사장 · 선지자" },
        { tag: "21", head: "믿는다는 것", body: "죄 사함 · 구원\n하나님의 자녀가 됨" },
      ],
      { y: 4.6, h: 2.2, cols: 3, headSize: 21, bodySize: 17 }
    );
  }

  // ── 나눔 Q3 · Q4 · Q5
  {
    const s = S("SHARE");
    s.addText("나눔 · 질문 Q3 · Q4 · Q5", { placeholder: "kicker" });
    s.addText("요한을 알고 나니 무엇이 달라졌습니까", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "Q3", head: "나의 성품", body: "예수님께서 칭찬하실 성품은?\n책망하실 성품은?\n\n그 성품을 바꾸실 것이라\n믿습니까?" },
        { tag: "Q4", head: "새롭게 알게 된 것", body: "요한복음에 대해\n새롭게 알게 된 것은?\n\n‘요한의 변화’를 보며\n드는 생각은?" },
        { tag: "Q5", head: "나의 고백", body: "“예수가 하나님의 아들\n그리스도시다”\n\n머리로 아는 지식입니까,\n삶을 움직이는 고백입니까?" },
      ],
      { y: 2.6, h: 3.3, cols: 3, headSize: 21, bodySize: 17, dark: true, fill: C.text2 }
    );
    s.addText("조별 나눔 10분 → 전체 나눔 2명", {
      x: M, y: 6.08, w: 8, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 16, bold: true, color: C.accent1, objectName: "guide",
    });
  }
};
