/** 제1강 · PART 3 — 1과 후반 : 하나님에 대한 증언이신 예수님 (1:1~18, 질문 22~41, 11장) */
const { LAYOUT } = require("../../theme");
const { cardGrid, bullets, keyline, subhead, scripture, flow, compare } = require("../../components");

const SECTION = "1과 · 하나님에 대한 증언";

module.exports = function part2(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: SECTION });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: SECTION });

  const qtag = (s, text) =>
    s.addText(text, {
      x: 10.9, y: LAYOUT.TITLE_Y, w: 1.68, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });

  // ── 섹션 구분
  {
    const s = S("DIVIDER");
    s.addText("03", { placeholder: "num" });
    s.addText("하나님에 대한 증언이신 예수님", { placeholder: "title" });
    s.addText("요한복음 1:1~18   ·   창조주 · 인도자 · 하나님이신 예수님", { placeholder: "body" });
  }

  // ── 1:1~3 본문
  {
    const s = S("CONTENT_DARK");
    s.addText("요한복음 1:1~3", { placeholder: "title" });
    scripture(s, pres, {
      x: M, y: 1.8, w: 11.8, h: 3.4,
      text: "태초에 말씀이 계시니라 이 말씀이 하나님과 함께 계셨으니 이 말씀은 곧 하나님이시니라 그가 태초에 하나님과 함께 계셨고 만물이 그로 말미암아 지은 바 되었으니 지은 것이 하나도 그가 없이는 된 것이 없느니라",
      ref: "요한복음 1:1~3 (개역개정)",
      fontSize: 26,
    });
    keyline(s, pres, { y: 5.42, h: 0.84, text: "족보도, 출생도, 배경도 없이 — 요한은 ‘태초’에서 시작합니다", fontSize: 19 });
  }

  // ── 가. 창조주이신 예수님
  {
    const s = S("CONTENT");
    s.addText("가. 창조주이신 예수님 (1:1~3)", { placeholder: "title" });
    qtag(s, "질문 22~23");
    cardGrid(
      s,
      pres,
      [{ tag: "22", head: "1절과 14절의 ‘말씀’은 누구인가", body: "예수님 — 14절이 이를 확정한다" }],
      { y: 1.64, h: 1.72, cols: 1, w: 6.4, headSize: 17, bodySize: 14 }
    );
    scripture(s, pres, {
      x: 7.4, y: 1.64, w: 5.18, h: 1.72, dark: false, fontSize: 15,
      text: "태초부터 있는 생명의 말씀에 관하여는 우리가 들은 바요 눈으로 본 바요 … 손으로 만진 바라",
      ref: "요한일서 1:1 — 같은 저자의 같은 어법",
    });
    subhead(s, pres, { y: 3.52, tag: "23", text: "왜 예수님을 ‘말씀(로고스)’이라 묘사했는가" });
    cardGrid(
      s,
      pres,
      [
        { head: "하나님을 알려주시기 때문", body: "우리는 하나님에 대한 개념을\n예수님을 통해서 얻는다.\n예수님은 ‘하나님에 대한 말씀’이다." },
        { head: "하나님이 먼저 행동하셨기 때문", body: "우리 편에서 하나님을 만날 수 없다.\n그래서 하나님이 먼저 말씀을 주셨다." },
        { head: "하나님을 떠오르게 하시기 때문", body: "말씀을 들으면 말하는 분이 떠오른다\n우리는 예수님을 통해\n초월해 계신 하나님을 만난다." },
      ],
      { y: 4.06, h: 2.16, cols: 3, headSize: 15, bodySize: 13.5 }
    );
    s.addText("말씀 = 하나님을 설명하는 가장 정확한 단어. 예수님을 보면 하나님이 보입니다 (14:9)", {
      x: M, y: 6.3, w: LAYOUT.CONTENT_W, h: 0.38, margin: 0, isTextBox: true,
      fontSize: 15, bold: true, color: C.accent5, objectName: "note",
    });
  }

  // ── 1절 세 마디 + 예수님의 두 모습
  {
    const s = S("CONTENT");
    s.addText("1절을 세 마디로 끊어 읽기", { placeholder: "title" });
    qtag(s, "질문 24~28");
    cardGrid(
      s,
      pres,
      [
        { tag: "①", head: "태초에 말씀이 계시니라", body: "시간 밖에 계신 분\n→ 예수님은 영원하신 분\n(질문 27)" },
        { tag: "②", head: "하나님과 함께 계셨으니", body: "두 분은 함께 계셨다\n→ 구분된 인격 · 친밀한 관계\n(질문 24)" },
        { tag: "③", head: "말씀은 곧 하나님이시니라", body: "예수님은 곧 하나님이시다\n→ 동일한 본질\n(질문 25)" },
      ],
      { y: 1.64, h: 2.2, cols: 3, headSize: 17, bodySize: 14 }
    );
    subhead(s, pres, { y: 3.96, tag: "26", text: "어떻게 하나님과 ‘함께’ 계시면서 동시에 ‘하나님’이실 수 있는가 — 삼위일체(Trinity)" });
    compare(s, pres, {
      y: 4.48, h: 1.86,
      left: { head: "동일한 본질 (Essence)", fontSize: 14, items: ["성부 · 성자 · 성령은 한 하나님이시다", "“나와 아버지는 하나이니라” (10:30)"] },
      right: { head: "구분된 위격 (Person)", fontSize: 14, items: ["세 분은 인격으로 구분되신다", "아버지와 아들은 서로 사랑하고 대화하신다 (17장)"] },
    });
    keyline(s, pres, {
      y: 6.46, h: 0.42,
      text: "질문 28 · 3절  ·  “만물이 그로 말미암아 지은 바 되었으니” → 예수님은 ② 창조주이시다 (cf. 골 1:15~17)",
      fontSize: 13,
    });
  }

  // ── 나. 인도자이신 예수님 (1:4~5 포함)
  {
    const s = S("CONTENT");
    s.addText("나. 인도자이신 예수님 (1:4~13)", { placeholder: "title" });
    qtag(s, "질문 29~30");
    scripture(s, pres, {
      x: M, y: 1.56, w: 11.8, h: 1.22, dark: false, fontSize: 18,
      text: "그 안에 생명이 있었으니 이 생명은 사람들의 빛이라 빛이 어둠에 비치되 어둠이 깨닫지 못하더라",
      ref: "요한복음 1:4~5",
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "29", head: "‘생명’ 외의 또 다른 비유", body: "빛 (4~9절)" },
        { tag: "기능", head: "빛은 무엇을 하는가", body: "어둠 속에서 보게 한다\n하나님을 알게 한다\n내면의 어둠을 물러나게 한다" },
        { tag: "30", head: "그래서 예수님은", body: "인도자 (모습 ③)\n빛은 ‘인도’의 기능을 수행한다" },
      ],
      { y: 2.86, h: 2.18, cols: 3, headSize: 16, bodySize: 13.5 }
    );
    flow(
      s,
      pres,
      [
        { head: "창조", body: "그분에 의해 지어지고\n생명을 얻었다" },
        { head: "타락", body: "근원을 버리고\n어둠 속으로 들어갔다" },
        { head: "돌아섬", body: "오직 빛을 향해\n돌아서는 길밖에 없다" },
        { head: "생명", body: "생명이 그분 안에 있다\n빛 안에서 삶이 보인다" },
      ],
      { y: 5.14, h: 1.24, headSize: 16, bodySize: 12.5 }
    );
    s.addText("어둠은 빛을 이기지 못합니다 — 다만 깨닫지 못할 뿐입니다 (1:5)", {
      x: M, y: 6.48, w: LAYOUT.CONTENT_W, h: 0.36, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, color: C.accent5, objectName: "note",
    });
  }

  // ── 세례요한의 자리 + 영접
  {
    const s = S("CONTENT");
    s.addText("세례 요한의 자리, 그리고 ‘영접’의 뜻", { placeholder: "title" });
    qtag(s, "질문 31~35");
    compare(s, pres, {
      y: 1.62, h: 2.66,
      left: {
        head: "31. 세례 요한의 사역 (6~8절)",
        fontSize: 15,
        items: [
          { text: "빛에 대해 증언해 예수님을 믿게 하는 것", sub: "“그는 빛이 아니요 이 빛에 대하여 증언하러 온 자라”" },
          { text: "요한복음은 세례요한의 비중을 의도적으로 낮춘다", sub: "“그는 흥하여야 하겠고 나는 쇠하여야 하리라” (3:30)" },
        ],
      },
      right: {
        head: "32~33. 영접 = 믿음 = 순종",
        fontSize: 15,
        items: [
          { text: "영접 = 그 이름을 믿는 것 (1:12)", sub: "‘영접함’과 ‘믿음’이 같은 뜻으로 쓰인다" },
          { text: "믿음 = 순종 (3:36)", sub: "요한복음의 믿음은 ‘행동하는 믿음’이다" },
        ],
      },
    });
    subhead(s, pres, { y: 4.32, tag: "34", text: "13절 — 하나님의 자녀가 되는 길" });
    cardGrid(
      s,
      pres,
      [
        { tag: "✕", head: "혈통이 아니라", body: "모태신앙이어서가 아니다" },
        { tag: "✕", head: "육정이 아니라", body: "사람의 욕구나 노력이 아니다" },
        { tag: "✕", head: "사람의 뜻이 아니라", body: "누군가의 결정으로 되지 않는다" },
        { tag: "○", head: "오직 하나님께로 난 자", body: "하나님이 낳으셔야 한다", foot: "근원은 예수님 (35)" },
      ],
      { y: 4.78, h: 1.98, cols: 4, headSize: 15, bodySize: 13, footSize: 11.5, badgeD: 0.4, pad: 0.2 }
    );
  }

  // ── 나눔 Q6 · Q7 · Q8
  {
    const s = S("SHARE");
    s.addText("나눔 · 질문 Q6 · Q7 · Q8", { placeholder: "kicker" });
    s.addText("창조주 앞에서, 빛 앞에서", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "Q6", head: "예수님이 나의 창조주라는 사실", body: "내 삶에 어떤 영향을 주나요?\n왜 창조하셨을까요?\n→ 우리와 교제하기 위해\n\n그분은 나를 얼마나 아실까요?" },
        { tag: "Q7", head: "나에게 세례요한은 누구였나", body: "나를 예수님께로 가리켜 준\n사람의 이름을 떠올려 봅시다.\n\n그리고 — 나는 누구에게\n그런 사람이 되려 합니까?" },
        { tag: "Q8", head: "어두운 세상에서 빛을 밝히려면", body: "내가 할 수 있는 일은?\n\n이번 주에 실제로 할 수 있는\n한 가지를 적어 봅시다." },
      ],
      { y: 2.42, h: 3.36, cols: 3, headSize: 19, bodySize: 14.5, dark: true, fill: C.text2 }
    );
    s.addText("조별 나눔 10분 → 전체 나눔 2명", {
      x: M, y: 5.92, w: 8, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, color: C.accent1, objectName: "guide",
    });
  }

  // ── 다. 하나님이신 예수님 — 성육신 (1:14 포함)
  {
    const s = S("CONTENT");
    s.addText("다. 하나님이신 예수님 (1:14~18) — 성육신", { placeholder: "title" });
    qtag(s, "질문 36~37");
    scripture(s, pres, {
      x: M, y: 1.58, w: 11.8, h: 1.3, dark: false, fontSize: 18,
      text: "말씀이 육신이 되어 우리 가운데 거하시매 우리가 그의 영광을 보니 아버지의 독생자의 영광이요 은혜와 진리가 충만하더라",
      ref: "요한복음 1:14 — 요한복음에서 ‘영광’이 처음 등장하는 자리",
    });
    keyline(s, pres, {
      y: 3.04, h: 0.62,
      text: "36. 말씀이 육신이 되었다 = 성육신(Incarnation)  ·  먼저 찾아와 주시는 하나님, 가까이 계시는 하나님",
      fontSize: 17,
    });
    subhead(s, pres, { y: 3.88, tag: "37", text: "인간이 되기 위해 예수님이 포기하신 것, 그리고 그 이유" });
    compare(s, pres, {
      y: 4.3, h: 2.16,
      left: {
        head: "포기하신 것",
        fontSize: 13.5,
        items: ["하나님으로서의 영광 그 자체 (빌 2:6)", "신적 특권 — 전능·전지의 사용", "하나님과의 깊은 관계성"],
      },
      right: {
        head: "왜 포기하셨는가",
        fontSize: 13.5,
        items: ["자녀가 되는 권세를 주기 위해 (1:12)", "구원의 놀라운 은혜를 주기 위해", "“자기를 비워 종의 형체를 가지사” (빌 2:7)"],
      },
    });
    s.addText("포기 없는 사랑은 없습니다. 하나님이 먼저 포기하셨습니다.", {
      x: M, y: 6.52, w: LAYOUT.CONTENT_W, h: 0.36, margin: 0, isTextBox: true,
      fontSize: 15, bold: true, color: C.accent5, objectName: "note",
    });
  }

  // ── 율법과 은혜
  {
    const s = S("CONTENT");
    s.addText("율법과 은혜 (1:16~17)", { placeholder: "title" });
    qtag(s, "질문 38~40");
    scripture(s, pres, {
      x: M, y: 1.62, w: 11.8, h: 1.0, dark: false, fontSize: 17,
      text: "율법은 모세로 말미암아 주어진 것이요 은혜와 진리는 예수 그리스도로 말미암아 온 것이라",
      ref: "요한복음 1:17",
    });
    compare(s, pres, {
      y: 2.76, h: 2.66,
      left: {
        head: "율법의 역할",
        fontSize: 15,
        items: [
          { text: "죄를 깨닫게 하고 정죄한다", sub: "죄를 있는 그대로 보여주기 위해 주어졌다" },
          { text: "진단은 하지만 치료는 못 한다", sub: "체온계와 같다 — 열이 있음을 알려주지만 열을 내리지는 못한다" },
        ],
      },
      right: {
        head: "은혜의 역할",
        fontSize: 15,
        items: [
          { text: "죄인을 용서한다", sub: "죄의 치료이며 해결이다" },
          { text: "노력이 아닌 하나님의 선물", sub: "예수님의 십자가가 죄의 문제를 푸는 열쇠다" },
        ],
      },
    });
    keyline(s, pres, {
      y: 5.62, h: 1.0,
      text: "38. 왜 비교되는가 — 유대인은 율법을 지킴으로 구원받는다고 생각했습니다.\n그러나 누구도 완벽히 지킬 수 없기에, 하나님의 은혜로 용서받을 필요가 있습니다.",
      fontSize: 16,
    });
  }

  // ── 18절
  {
    const s = S("CONTENT");
    s.addText("18절 — 아버지 품 속에 있는 독생하신 하나님", { placeholder: "title" });
    qtag(s, "질문 41");
    scripture(s, pres, {
      x: M, y: 1.62, w: 11.8, h: 1.1, dark: false, fontSize: 18,
      text: "본래 하나님을 본 사람이 없으되 아버지 품 속에 있는 독생하신 하나님이 나타내셨느니라",
      ref: "요한복음 1:18",
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "①", head: "아버지 품 속 — 관계성", body: "하나님과의 친밀한 인격적 관계를 뜻한다.\n1절의 “하나님과 함께 계셨으니”와 같은 의미다." },
        { tag: "②", head: "독생하신 하나님 — 신성", body: "하나님과 동일한 속성을 가지셨다는 뜻이며,\n피조된 분이 아님을 뜻한다." },
        { tag: "③", head: "나타내셨느니라 — 계시", body: "아무도 보지 못한 하나님을\n예수님이 보여주셨다.\n요한복음은 이 계시에 대한 복음서다." },
      ],
      { y: 2.9, h: 2.5, cols: 3, headSize: 17, bodySize: 14 }
    );
    bullets(
      s,
      pres,
      [
        { text: "“하나님을 본 사람이 없다”면 모세는? — 모세도 하나님의 본체를 본 것이 아닙니다 (출 33:20~23).", bold: true },
        "유한하고 죄악된 인생이 하나님을 보는 것은 곧 죽음을 의미합니다. 그래서 하나님이 사람이 되어 오셨습니다.",
      ],
      { y: 5.56, h: 1.2, fontSize: 16, space: 9 }
    );
  }

  // ── 나눔 Q9 · Q10 · Q11
  {
    const s = S("SHARE");
    s.addText("나눔 · 질문 Q9 · Q10 · Q11", { placeholder: "kicker" });
    s.addText("말씀이 육신이 되셨다면, 나는", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "Q9", head: "성육신의 의미", body: "“말씀이 육신이 되셨다”는 것이\n나에게 어떤 의미입니까?\n\n가까이 계시는 하나님 · 포기하시는 분\n말씀의 능력" },
        { tag: "Q10", head: "예수님을 통해 알게 된 하나님", body: "예수님을 통해 하나님의\n어떤 부분을 알게 되었습니까?\n\n구원의 뜻 · 진리 · 사랑" },
        { tag: "Q11", head: "나는 무엇을 포기할 것인가", body: "이웃을 위해 무엇을 포기하시겠습니까?\n\n시간 · 돈 · 편안함 · 자존심\n이번 주에 한 가지를 정해 봅시다." },
      ],
      { y: 2.5, h: 3.1, cols: 3, headSize: 18, bodySize: 14.5, dark: true, fill: C.text2 }
    );
    s.addText("조별 나눔 10분 → 전체 나눔 2명", {
      x: M, y: 5.88, w: 8, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, color: C.accent1, objectName: "guide",
    });
  }
};
