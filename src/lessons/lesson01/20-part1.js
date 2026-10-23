/** 제1강 · PART 2 — 1과 전반부 : 예수님에 대한 증언인 요한복음 (질문 1~21) */
const { LAYOUT, HEX } = require("../../theme");
const { cardGrid, bullets, stats, keyline, subhead, scripture, flow, compare, tableOpts, headRow, panel, badge } = require("../../components");

const SECTION = "1과 · 예수님에 대한 증언";

module.exports = function part1(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: SECTION });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: SECTION });

  // ── 섹션 구분
  {
    const s = S("DIVIDER");
    s.addText("02", { placeholder: "num" });
    s.addText("제1과  영광을 만나기 위한 준비", { placeholder: "title" });
    s.addText("요한복음 ~1:18   ·   예수님은 누구신가에 대한 설명", { placeholder: "body" });
  }

  // ── 1과 학습 개요
  {
    const s = S("CONTENT");
    s.addText("1과 학습 개요", { placeholder: "title" });
    compare(s, pres, {
      y: 1.62, h: 5.1,
      left: {
        head: "1. 예수님에 대한 증언인 요한복음",
        fontSize: 15,
        items: [
          { text: "가. 사도 요한", sub: "이 복음서의 저자는 누구인가 (질문 1~5)" },
          { text: "나. 요한과 예수님의 만남", sub: "포기하고 따름 (질문 6~8)" },
          { text: "다. 요한의 변화", sub: "모난 성품이 예수님의 성품으로 (질문 9)" },
          { text: "라. 요한의 증언으로서의 요한복음", sub: "직접 목격한 사실 (질문 10~12)" },
          { text: "마. 요한의 사역", sub: "부활을 증거함 (질문 13~17)" },
          { text: "바. 기록목적", sub: "예수를 믿고 생명을 얻게 함 (질문 18~21)" },
        ],
      },
      right: {
        head: "2. 하나님에 대한 증언이신 예수님 (1:1~18)",
        fontSize: 15,
        items: [
          { text: "가. 창조주이신 예수님 (1:1~3)", sub: "예수님은 말씀 · 말씀으로 창조 (질문 22~28)" },
          { text: "나. 인도자이신 예수님 (1:4~13)", sub: "빛이 어둠에 비침 (질문 29~35)" },
          { text: "다. 하나님이신 예수님 (1:14~18)", sub: "성육신 · 은혜 · 삼위일체 하나님 (질문 36~41)" },
          { text: "오늘의 흐름", sub: "저자 요한을 알고 → 그가 증언한 예수님을 만난다" },
        ],
      },
    });
    s.addNotes("“저자에 대해 알면 알수록 그 글을 더 깊이 이해할 수 있다.” — 요한복음을 공부하기 전에 먼저 요한을 알자.");
  }

  // ── 가. 사도 요한 : 저자 문제
  {
    const s = S("CONTENT");
    s.addText("가. 사도 요한 — 저자는 누구인가", { placeholder: "title" });
    s.addText("질문 1~5", {
      x: 11.2, y: LAYOUT.TITLE_Y, w: 1.38, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });
    scripture(s, pres, {
      x: M, y: 1.68, w: 6.5, h: 2.5, dark: false, fontSize: 18,
      text: "이 일을 증언하고 이것을 기록한 제자가 이 사람이라 우리는 그의 증언이 참된 줄 아노라",
      ref: "요한복음 21:24  ·  cf. 21:20 “예수께서 사랑하시던 그 제자”",
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "!", head: "저자는 자신의 이름을 끝까지 밝히지 않는다", body: "‘예수께서 사랑하시던 제자’라고만 표현한다.\n열두 제자 중 예수님의 특별한 사랑을 받은 제자이지만, 정확히 누구인지는 말하지 않는다." },
      ],
      { x: 7.5, y: 1.68, w: 5.08, h: 2.5, cols: 1, headSize: 17, bodySize: 14 }
    );
    subhead(s, pres, { y: 4.4, tag: "논증", text: "그래서 ‘소거법’으로 저자를 찾아간다" });
    flow(
      s,
      pres,
      [
        { head: "열두 제자", body: "후보 12명" },
        { head: "이름이 밝혀진 제자 제외", body: "저자는 익명이므로" },
        { head: "6명으로 압축", body: "야고보 · 요한 · 바돌로매\n마태 · 야고보 · 시몬" },
        { head: "예수님이 신임하신 3인", body: "베드로 · 야고보 · 요한" },
        { head: "요한", body: "최종 결론" },
      ],
      { y: 4.88, h: 1.7, headSize: 15, bodySize: 12 }
    );
  }

  // ── 저자 추적: 이름이 밝혀진 제자
  {
    const s = S("CONTENT");
    s.addText("저자 추적 ① 요한복음에 이름이 나오는 제자들", { placeholder: "title" });
    const rows = [
      headRow(pres, ["제자", "본문", "제외 근거"]),
      ["빌립", "6:7 · 14:8", "이름이 직접 기록됨"],
      ["베드로 · 안드레", "6:8", "이름이 직접 기록됨"],
      ["도마", "11:16 · 14:5 · 20:24~28", "이름이 직접 기록됨"],
      ["유다 (가룟인이 아닌)", "14:22", "이름이 직접 기록됨"],
      ["가룟 유다", "6:71 · 12:4 · 13:2 등", "이름이 직접 기록됨"],
    ];
    const body = rows.map((r, i) =>
      i === 0
        ? r
        : r.map((t, j) => ({
            text: t,
            options: {
              align: j === 1 ? "center" : "left",
              bold: j === 0,
              color: j === 2 ? C.accent3 : C.text1,
              fill: { color: i % 2 === 0 ? "FFFFFF" : "F7F9FB" },
            },
          }))
    );
    s.addTable(body, { ...tableOpts(pres, { colW: [3.2, 4.3, 4.33], y: 1.66, rowH: 0.5, fontSize: 14 }) });
    keyline(s, pres, {
      y: 4.58, h: 0.78,
      text: "남는 제자  ·  야고보(요한의 형제) · 요한 · 바돌로매 · 마태 · 야고보(알패오의 아들) · 시몬(셀롯) — 6명",
      fontSize: 16,
    });
    bullets(
      s,
      pres,
      [
        { text: "저자가 스스로를 ‘예수께서 사랑하시는 제자’라 표현하므로, 본문에 이름이 등장하는 제자는 저자가 될 수 없다.", bold: true },
        "요한복음은 유독 열두 제자의 명단 전체를 소개하지 않는다 — 부르심·파송 이야기도 없다.",
      ],
      { y: 5.56, h: 1.0, fontSize: 15, space: 8 }
    );
  }

  // ── 저자 추적: 최종 3명
  {
    const s = S("CONTENT");
    s.addText("저자 추적 ② 최종 후보 3명에서 한 명으로", { placeholder: "title" });
    s.addText("공관복음에서 예수님이 특별히 신임하신 세 제자 — 변화산, 야이로의 딸, 겟세마네에 함께 있던 제자들", {
      x: M, y: 1.6, w: LAYOUT.CONTENT_W, h: 0.42, margin: 0, isTextBox: true,
      fontSize: 15, color: C.accent3, objectName: "lead",
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "✕", head: "베드로", body: "본서에 이름이 직접 언급된다\n(6:8, 13:6 등)", foot: "제외" },
        { tag: "✕", head: "야고보", body: "일찍이 순교했다 (행 12:2, AD 44년경)\n1세기 말~2세기 초 기록과 맞지 않는다", foot: "제외" },
        { tag: "○", head: "요한", body: "이름이 밝혀지지 않았고, 생존했으며,\n예수님의 사역 전체를 가장 가까이서 목격한 제자", foot: "결론" },
      ],
      { y: 2.16, h: 3.0, cols: 3, headSize: 26, bodySize: 14, badgeD: 0.5 }
    );
    keyline(s, pres, {
      y: 5.3, h: 1.0,
      text: "이 복음서는 ‘가장 가까이에서 예수님을 보고 경험한 한 제자의 진실된 기록’입니다.\n저자를 알고 읽으면, 문장마다 목격자의 떨림이 들립니다.",
      fontSize: 16,
    });
  }

  // ── 사도 요한 인물카드
  {
    const s = S("CONTENT");
    s.addText("사도 요한은 누구인가", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "가족", head: "어부의 아들", body: "아버지는 어부 세베대\n어머니는 살로메 — 예수님의 이모 (요 19:25)" },
        { tag: "형제", head: "야고보의 동생", body: "형 야고보와 함께 부르심을 받았고\n함께 ‘우레의 아들’이라 불렸다" },
        { tag: "출발", head: "원래 세례요한의 제자", body: "요 1:35~40 · 세례요한의 증언을 듣고\n예수님을 따라갔다 (오후 10시의 만남)" },
        { tag: "맡음", head: "마리아를 친어머니처럼 모심", body: "요 19:26~27\n십자가 아래 어머니를 맡기신 제자" },
        { tag: "교회", head: "예루살렘 교회의 기둥", body: "갈 2:9\n베드로와 함께 초대교회를 돌보았다" },
        { tag: "기록", head: "신약 다섯 권의 저자", body: "요한복음 · 요한1·2·3서 · 요한계시록\n밧모섬 유배 중 계시를 받아 기록했다" },
      ],
      { y: 1.72, h: 4.6, cols: 3, headSize: 17, bodySize: 13.5 }
    );
    s.addText("※ 요한복음을 읽는다는 것은, 예수님의 이모의 아들이자 십자가 아래 끝까지 서 있던 제자의 증언을 듣는 일입니다.", {
      x: M, y: 6.44, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 13, color: C.accent3, objectName: "note",
    });
  }

  // ── 나. 요한과 예수님의 만남
  {
    const s = S("CONTENT");
    s.addText("나. 요한과 예수님의 만남", { placeholder: "title" });
    s.addText("질문 6~8", {
      x: 11.2, y: LAYOUT.TITLE_Y, w: 1.38, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });
    scripture(s, pres, {
      x: M, y: 1.64, w: 7.0, h: 2.0, dark: false, fontSize: 17,
      text: "… 예수께서 시몬에게 이르시되 무서워하지 말라 이제 후로는 네가 사람을 취하리라 하시니 그들이 모든 것을 버려 두고 예수를 따르니라",
      ref: "누가복음 5:10~11",
    });
    keyline(s, pres, {
      x: 7.95, y: 1.64, w: 4.63, h: 2.0,
      text: "만남은 소명으로,\n소명은 순종과\n내려놓음으로 이어집니다",
      fontSize: 20,
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "6", head: "요한에 대해 알 수 있는 것", body: "세베대의 아들 · 야고보의 형제\n시몬 베드로의 동업자 · 직업은 어부" },
        { tag: "7", head: "즉각 응답한 가장 큰 이유", body: "말씀에 순종해 그물을 내렸을 때\n엄청나게 많은 고기가 잡힌\n예수님의 능력을 직접 경험했기 때문" },
        { tag: "8", head: "포기한 것", body: "배를 포함한 생업 전부\n— 요한에게 그것은 삶의 근간이었다" },
      ],
      { y: 3.9, h: 2.3, cols: 3, headSize: 16, bodySize: 13.5, badgeD: 0.4 }
    );
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
        {
          tag: "Q1",
          head: "예수님을 믿기로 결정했을 때 가장 영향을 주었던 것은 예수님의 어떤 면이었습니까?",
          body: "예) 그분의 인격  ·  죄를 사하시는 능력  ·  나를 향한 사랑  ·  말씀의 권위",
        },
        {
          tag: "Q2",
          head: "예수님을 따르기 위해 내가 포기한 것은, 또 포기해야 할 것은 무엇입니까?",
          body: "포기할 때 걸림돌이 되는 이유는 무엇인가요?\n포기한 것을 후회한 적이 있습니까? 그럴 때 예수님께서 베풀어 주신 것은 무엇이었나요?",
        },
      ],
      { y: 2.5, h: 3.1, cols: 2, headSize: 18, bodySize: 15, dark: true, fill: C.text2 }
    );
    s.addText("조별 나눔 10분 → 전체 나눔 2명", {
      x: M, y: 5.86, w: 8, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, color: C.accent1, objectName: "guide",
    });
  }

  // ── 다. 요한의 변화
  {
    const s = S("CONTENT");
    s.addText("다. 요한의 변화 — 변하기 전의 모습", { placeholder: "title" });
    s.addText("질문 9", {
      x: 11.2, y: LAYOUT.TITLE_Y, w: 1.38, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });
    cardGrid(
      s,
      pres,
      [
        {
          tag: "1",
          head: "막 3:17  우레의 아들",
          body: "예수님이 야고보와 요한에게 ‘보아너게’라는 이름을 주심\n→ 그만큼 급하고 목소리가 컸다",
          foot: "성품 : 급함",
        },
        {
          tag: "2",
          head: "막 9:38~39  축사를 막다",
          body: "자신과 함께하지 않는 사람이 귀신을 쫓자 금지함\n→ 예수님 : “금하지 말라”",
          foot: "성품 : 배타적",
        },
        {
          tag: "3",
          head: "막 10:35~41  좌우편 자리",
          body: "영광 받으실 때 좌우편에 앉기를 구함\n→ 예수님 : “내 고난에 동참해야 한다”",
          foot: "성품 : 교만 · 자기중심",
        },
        {
          tag: "4",
          head: "눅 9:52~56  불로 멸하자",
          body: "사마리아 마을이 출입을 막자 불을 명해 멸하려 함\n→ 예수님께서 꾸짖으심",
          foot: "성품 : 반대자에게 무자비",
        },
      ],
      { y: 1.72, h: 3.3, cols: 4, headSize: 15.5, bodySize: 13, footSize: 12 }
    );
    keyline(s, pres, {
      y: 5.26, h: 1.0,
      text: "부정적 : 급함 · 자기중심적 · 교만함 · 반대자에게 무자비     /     긍정적 : 적극적인 면\n→ 네 본문 모두가 예수님께 꾸중을 들은 장면입니다. 요한은 ‘완성된 사람’으로 부름받지 않았습니다.",
      fontSize: 16,
    });
  }

  // ── Before / After + 사랑 빈도 차트
  {
    const s = S("CONTENT");
    s.addText("우레의 아들에서 사랑의 사도로", { placeholder: "title" });
    compare(s, pres, {
      x: M, y: 1.64, w: 6.9, h: 3.8,
      left: {
        head: "예수님을 만나기 전",
        fontSize: 15,
        items: ["급하다 · 목소리가 크다", "권세에 민감하다 (좌우편에 서기)", "자기중심적이고 교만하다", "반대자에게 무자비하다"],
      },
      right: {
        head: "예수님을 만난 후",
        fontSize: 15,
        items: ["예수님의 성품을 닮아 갔다", "사랑을 가장 중요하게 여겼다", "‘서로 사랑하라’는 새 계명", "마침내 사랑의 사도가 되었다"],
      },
    });
    s.addChart(
      pres.ChartType.bar,
      [
        {
          name: "‘사랑’ 사용 횟수",
          labels: ["마태복음", "마가복음", "누가복음", "요한복음"],
          values: [12, 7, 16, 51],
        },
      ],
      {
        x: 8.1, y: 1.64, w: 4.48, h: 3.8,
        barDir: "col",
        showTitle: true,
        title: "복음서별 ‘사랑’ 사용 횟수",
        titleFontSize: 13,
        titleColor: HEX.dk1,
        showLegend: false,
        showValue: true,
        dataLabelPosition: "outEnd",
        dataLabelFontSize: 12,
        dataLabelFontFace: "+mn-lt",
        dataLabelColor: HEX.dk1,
        chartColors: [HEX.accent4, HEX.accent4, HEX.accent4, HEX.accent1],
        catAxisLabelColor: HEX.accent3,
        catAxisLabelFontSize: 11,
        catAxisLabelFontFace: "+mn-lt",
        valAxisHidden: true,
        valGridLine: { style: "none" },
        catGridLine: { style: "none" },
        barGapWidthPct: 55,
      }
    );
    keyline(s, pres, {
      y: 5.56, h: 0.88,
      text: "자기중심적이던 요한이 예수님과 함께 지내며 그분의 성품을 닮아 갔습니다.\n요한복음에 ‘사랑’이 51번 — 요한이 사랑을 얼마나 중요하게 여겼는지를 단적으로 보여줍니다.",
      fontSize: 16,
    });
    s.addText("성품은 타고나는 것이 아니라, 누구와 함께 있는지에 따라 바뀝니다.", {
      x: M, y: 6.54, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, color: C.accent5, objectName: "note",
    });
  }

  // ── 나눔 Q3
  {
    const s = S("SHARE");
    s.addText("나눔 · 질문 Q3", { placeholder: "kicker" });
    s.addText("예수님은 나의 성품을 바꾸실 수 있습니까", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "칭찬하실 성품", body: "내 성품 중 예수님께서\n칭찬하실 만한 부분은 무엇인가요?" },
        { tag: "2", head: "책망하실 성품", body: "예수님께서 지금 책망하실\n부분은 어디인가요?" },
        { tag: "3", head: "바꾸실 것이라는 믿음", body: "예수님께서 그 성품을\n정말 바꾸실 것이라 믿습니까?\n요한처럼 될 수 있을까요?" },
      ],
      { y: 2.5, h: 3.0, cols: 3, headSize: 20, bodySize: 15, dark: true, fill: C.text2 }
    );
    s.addText("요한도 처음에는 ‘우레의 아들’이었습니다. 변화는 만남에서 시작됩니다.", {
      x: M, y: 5.78, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 15, bold: true, color: C.accent6, objectName: "guide",
    });
  }

  // ── 라. 요한의 증언으로서의 요한복음
  {
    const s = S("CONTENT");
    s.addText("라. 요한의 증언으로서의 요한복음", { placeholder: "title" });
    s.addText("질문 10~12", {
      x: 11.0, y: LAYOUT.TITLE_Y, w: 1.58, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "10", head: "무엇에 근거한 기록인가", body: "자신이 직접 ‘본 것’\n“이를 본 자가 증언하였으니 그 증언이 참이라” (19:35)" },
        { tag: "11", head: "진실성은 어떻게 말하는가", body: "“우리는 그의 증언이 참된 줄 아노라” (21:24)\n공동체가 함께 보증한다" },
      ],
      { y: 1.68, h: 1.95, cols: 2, headSize: 17, bodySize: 14 }
    );
    subhead(s, pres, { y: 3.78, tag: "12", text: "요한은 결정적인 네 장면 모두에 있었다" });
    cardGrid(
      s,
      pres,
      [
        { head: "예수님의 죽음", body: "십자가 현장에서\n어머니와 함께 목격 (19:26~27)" },
        { head: "빈 무덤", body: "부활 소식을 듣고\n가장 먼저 빈 무덤에 도달\n(20:3~8)" },
        { head: "부활하신 예수님", body: "부활하신 예수님을 만나고\n알아본 제자\n(20:19~20, 21:7)" },
        { head: "승천", body: "승천을 목격한 제자\n(행 1:9~13)" },
      ],
      { y: 4.34, h: 1.75, cols: 4, headSize: 17, bodySize: 13.5 }
    );
    keyline(s, pres, {
      y: 6.2, h: 0.6,
      text: "요한은 예수님의 사역 초창기부터 함께하며 가장 많이 목격하고, 가장 가까이에서 섬긴 제자입니다",
      fontSize: 16,
    });
  }

  // ── 마. 요한의 사역
  {
    const s = S("CONTENT");
    s.addText("마. 요한의 사역 — 무엇을 증언했는가", { placeholder: "title" });
    s.addText("질문 13~17", {
      x: 11.0, y: LAYOUT.TITLE_Y, w: 1.58, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "13", head: "증언의 주된 내용", body: "부활\n(행 3:11~16, 4:2)", foot: "베드로와 함께" },
        { tag: "14", head: "증언의 결과", body: "핍박을 받음\n옥에 갇히고 심문을 당함", foot: "행 4:1~3" },
        { tag: "15", head: "심문자들 앞에서", body: "담대히 말함\n학문 없는 범인으로 알았는데", foot: "행 4:13" },
        { tag: "16", head: "금지 명령에 대한 대답", body: "“하나님 앞에서 너희의 말을 듣는 것이\n하나님의 말씀을 듣는 것보다 옳은가 판단하라”", foot: "행 4:19~20" },
      ],
      { y: 1.72, h: 2.7, cols: 4, headSize: 16, bodySize: 13, footSize: 12 }
    );
    subhead(s, pres, { y: 4.62, tag: "17", text: "이 모든 일이 그들이 목격한 것에 대해 무엇을 말해 주는가" });
    bullets(
      s,
      pres,
      [
        { text: "그 증언이 ‘진실’이라는 것", sub: "요한은 자신이 목격한 것을 전했고 기록했으며, 그것 때문에 해받는 것을 기꺼이 감수했다" },
        { text: "거짓을 위해 목숨을 걸 사람은 없다", sub: "핍박을 감수한 증언은, 그가 전하고 기록한 것이 진실임을 보여주는 객관적인 증거다" },
      ],
      { y: 5.2, h: 1.45, fontSize: 16, space: 10 }
    );
  }

  // ── 행 4:20 인용
  {
    const s = S("CONTENT_DARK");
    s.addText("무엇이 요한을 담대하게 만들었는가", { placeholder: "title" });
    scripture(s, pres, {
      x: M, y: 1.9, w: 11.8, h: 2.3,
      text: "우리는 보고 들은 것을 말하지 아니할 수 없다",
      ref: "사도행전 4:20",
      fontSize: 36,
    });
    keyline(s, pres, {
      y: 4.5, h: 1.3,
      text: "직접 보았기 때문입니다.\n요한복음은 추론이나 전해 들은 이야기가 아니라, 목격자가 목숨을 걸고 남긴 기록입니다.\n그래서 우리는 이 책을 ‘증언’이라고 부릅니다.",
      fontSize: 18,
    });
    s.addNotes("여기서 잠시 멈추고 질문: 여러분을 담대하게 만드는 것은 무엇입니까?");
  }

  // ── 바. 기록목적
  {
    const s = S("CONTENT");
    s.addText("바. 기록목적 — 요한이 밝힌 두 가지", { placeholder: "title" });
    s.addText("질문 18~21", {
      x: 11.0, y: LAYOUT.TITLE_Y, w: 1.58, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "①", head: "믿게 하려 함", body: "예수님이 하나님의 아들이시며\n그리스도이심을 믿게 하기 위해 (20:31, cf. 마 16:16)" },
        { tag: "②", head: "생명을 얻게 하려 함", body: "믿고 그 이름을 힘입어\n생명을 얻게 하기 위해" },
      ],
      { y: 1.64, h: 2.0, cols: 2, headSize: 19, bodySize: 14 }
    );
    subhead(s, pres, { y: 3.74, tag: "뜻", text: "그러면 이 말들은 각각 무슨 뜻인가" });
    cardGrid(
      s,
      pres,
      [
        { tag: "19", head: "하나님의 아들이란?", body: "하나님과 동일한 본성을 지니셨다는 뜻\n피조물이 아니라 하나님 자신이시다" },
        { tag: "20", head: "그리스도란?", body: "‘기름부음을 받은 자’ (메시야)\n왕 · 제사장 · 선지자로 세우심을 받은 분" },
        { tag: "21", head: "그리스도로 믿는다는 것은?", body: "그분을 하나님의 아들로 믿는 것\n→ 죄 사함 · 구원 · 하나님의 자녀가 됨" },
      ],
      { y: 4.22, h: 2.2, cols: 3, headSize: 17, bodySize: 14 }
    );
    s.addText("여기까지가 요한복음을 공부할 준비입니다 — 예수님을 더 잘 알고, 은혜로 얻은 생명의 소중함을 깨닫게 됩니다.", {
      x: M, y: 6.5, w: LAYOUT.CONTENT_W, h: 0.38, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, color: C.accent5, objectName: "note",
    });
  }

  // ── 나눔 Q4 · Q5
  {
    const s = S("SHARE");
    s.addText("나눔 · 질문 Q4 · Q5", { placeholder: "kicker" });
    s.addText("요한을 알고 나니 무엇이 달라졌습니까", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        {
          tag: "Q4",
          head: "요한이나 요한복음에 대해 새롭게 알게 된 것은 무엇입니까?",
          body: "특히 ‘요한의 변화’를 보며 나에게 드는 생각은 무엇인가요?\n그렇다면 나도 변할 수 있지 않을까요?",
        },
        {
          tag: "Q5",
          head: "“예수가 하나님의 아들 그리스도시다” — 당신은 이것을 어떻게 받아들입니까?",
          body: "머리로만 아는 지식입니까, 삶을 움직이는 고백입니까?\n내 입으로 한 문장으로 표현해 봅시다.",
        },
      ],
      { y: 2.5, h: 3.1, cols: 2, headSize: 18, bodySize: 15, dark: true, fill: C.text2 }
    );
    s.addText("조별 나눔 8분 → 전체 나눔 2명", {
      x: M, y: 5.86, w: 8, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, color: C.accent1, objectName: "guide",
    });
  }
};
