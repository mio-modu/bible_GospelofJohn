/** 제1강 · PART 3 — 1과 후반부 : 하나님에 대한 증언이신 예수님 (1:1~18, 질문 22~41) */
const { LAYOUT, HEX } = require("../../theme");
const { cardGrid, bullets, stats, keyline, subhead, scripture, flow, compare, tableOpts, headRow, panel, badge } = require("../../components");

const SECTION = "1과 · 하나님에 대한 증언";

module.exports = function part2(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: SECTION });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: SECTION });

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
    s.addText("질문 22~28", {
      x: 11.0, y: LAYOUT.TITLE_Y, w: 1.58, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "22", head: "1절과 14절의 ‘말씀’은 누구를 가리키나", body: "예수님\n14절 “말씀이 육신이 되어”가 이를 확정한다" },
      ],
      { y: 1.64, h: 1.95, cols: 1, w: 6.4, headSize: 17, bodySize: 14 }
    );
    scripture(s, pres, {
      x: 7.4, y: 1.64, w: 5.18, h: 1.95, dark: false, fontSize: 15,
      text: "태초부터 있는 생명의 말씀에 관하여는 우리가 들은 바요 눈으로 본 바요 자세히 보고 우리의 손으로 만진 바라",
      ref: "요한일서 1:1 — 같은 저자의 같은 어법",
    });
    subhead(s, pres, { y: 3.7, tag: "23", text: "왜 예수님을 ‘말씀(로고스)’이라 묘사했는가" });
    cardGrid(
      s,
      pres,
      [
        { head: "하나님을 알려주시기 때문", body: "우리는 하나님에 대한 개념을\n예수님을 통해서 얻는다.\n예수님은 ‘하나님에 대한 말씀’이다." },
        { head: "하나님이 먼저 행동하셨기 때문", body: "우리 편에서 하나님을 만나는 것은 불가능하다.\n그래서 하나님께서 먼저 말씀을 주셨다." },
        { head: "하나님을 떠오르게 하시기 때문", body: "말씀을 들으면 말하는 분이 떠오른다.\n우리는 예수님을 통해\n초월해 계신 하나님을 만난다." },
      ],
      { y: 4.18, h: 1.9, cols: 3, headSize: 16, bodySize: 13.5 }
    );
    keyline(s, pres, { y: 6.18, h: 0.6, text: "말씀 = 하나님을 설명하는 가장 정확한 단어. 예수님을 보면 하나님이 보입니다 (14:9)", fontSize: 16 });
  }

  // ── 1절 세 마디 분해
  {
    const s = S("CONTENT");
    s.addText("1절을 세 마디로 끊어 읽기", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "27", head: "태초에 말씀이 계시니라", body: "시간 밖에 계신 분\n→ 예수님은 영원하신 분", foot: "질문 27 · 모습 ①" },
        { tag: "24", head: "하나님과 함께 계셨으니", body: "두 분은 함께 계셨다\n→ 구분된 인격, 친밀한 관계", foot: "질문 24" },
        { tag: "25", head: "이 말씀은 곧 하나님이시니라", body: "예수님은 곧 하나님이시다\n→ 동일한 본질", foot: "질문 25" },
      ],
      { y: 1.68, h: 2.3, cols: 3, headSize: 17, bodySize: 14, footSize: 12 }
    );
    subhead(s, pres, { y: 4.04, tag: "26", text: "어떻게 하나님과 ‘함께’ 계시면서 동시에 ‘하나님’이실 수 있는가 — 삼위일체(Trinity)" });
    compare(s, pres, {
      y: 4.48, h: 2.2,
      left: { head: "동일한 본질 (Essence)", fontSize: 15, items: ["성부 · 성자 · 성령은 한 하나님이시다", "본질에서 나뉘지 않는다 — “나와 아버지는 하나이니라” (10:30)"] },
      right: { head: "구분된 위격 (Person)", fontSize: 15, items: ["세 분은 인격으로 구분되신다", "아버지와 아들은 서로 사랑하고 대화하신다 (17장)"] },
    });
    s.addNotes("1절은 신약에서 삼위일체를 가장 압축적으로 보여주는 구절 중 하나입니다.");
  }

  // ── 1:1~3이 보여주는 예수님
  {
    const s = S("CONTENT");
    s.addText("1:1~3이 보여주는 예수님의 두 모습", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        {
          tag: "①",
          head: "영원하신 분",
          body: "“태초에 말씀이 계시니라”\n\n창조 이전부터 계셨다.\n시작도 끝도 없으시다.\n요한복음에는 예수님의 족보도, 출생 기사도 없다 — 영원에서 물질 세계로 들어오신 분이기 때문이다.",
        },
        {
          tag: "②",
          head: "창조주",
          body: "“만물이 그로 말미암아 지은 바 되었으니\n지은 것이 하나도 그가 없이는 된 것이 없느니라” (3절)\n\n창세기 1장의 “하나님이 말씀하시니…”와 연결된다.\ncf. 골 1:15~17 — 만물이 그에게서 창조되고 그로 말미암아 함께 섰다.",
        },
      ],
      { y: 1.72, h: 3.5, cols: 2, headSize: 24, bodySize: 15, badgeD: 0.52 }
    );
    keyline(s, pres, {
      y: 5.5, h: 1.0,
      text: "나를 지으신 분이 나를 구원하러 오셨습니다.\n창조주가 피조물을 가장 잘 아십니다 — 내가 나를 아는 것보다 더 잘.",
      fontSize: 18,
    });
  }

  // ── 나눔 Q6
  {
    const s = S("SHARE");
    s.addText("나눔 · 질문 Q6", { placeholder: "kicker" });
    s.addText("예수님이 나의 창조주라는 사실", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "어떤 영향을 주는가", body: "예수님이 창조주시라는 사실이\n내 삶에 주는 영향은 무엇인가요?\n(예: 위안 · 모든 것을 맡길 수 있음)" },
        { tag: "2", head: "왜 창조하셨을까", body: "특정한 목적이 있었을까요?\n→ 우리와 교제하기 위해" },
        { tag: "3", head: "얼마나 아시는가", body: "그분은 우리를 얼마나 아실까요?\n내가 나를 아는 것보다 더 잘 아실까요?" },
      ],
      { y: 2.5, h: 3.0, cols: 3, headSize: 20, bodySize: 15, dark: true, fill: C.text2 }
    );
    s.addText("창조는 ‘소유’가 아니라 ‘관계’를 위한 일이었습니다.", {
      x: M, y: 5.78, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 15, bold: true, color: C.accent6, objectName: "guide",
    });
  }

  // ── 1:4~5 본문
  {
    const s = S("CONTENT_DARK");
    s.addText("요한복음 1:4~5", { placeholder: "title" });
    scripture(s, pres, {
      x: M, y: 1.95, w: 11.8, h: 2.6,
      text: "그 안에 생명이 있었으니 이 생명은 사람들의 빛이라 빛이 어둠에 비치되 어둠이 깨닫지 못하더라",
      ref: "요한복음 1:4~5 (개역개정)",
      fontSize: 30,
    });
    keyline(s, pres, {
      y: 4.9, h: 1.2,
      text: "생명 → 빛 → 어둠.\n요한복음의 모든 대조(빛/어둠, 영/육, 진리/거짓, 자유/종)가 여기서 시작됩니다.",
      fontSize: 19,
    });
  }

  // ── 나. 인도자이신 예수님
  {
    const s = S("CONTENT");
    s.addText("나. 인도자이신 예수님 (1:4~13)", { placeholder: "title" });
    s.addText("질문 29~35", {
      x: 11.0, y: LAYOUT.TITLE_Y, w: 1.58, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "29", head: "‘생명’ 외에 또 다른 비유는?", body: "빛 (4~9절)" },
        { tag: "기능", head: "빛은 무엇을 하는가", body: "어둠 속에서 볼 수 있게 한다\n각 사람에게 비추어 하나님을 보고 알게 한다\n내면의 어둠을 물러나게 한다" },
        { tag: "30", head: "그래서 예수님은", body: "인도자 (모습 ③)\n빛은 ‘인도’의 기능을 수행한다" },
      ],
      { y: 1.66, h: 2.45, cols: 3, headSize: 16.5, bodySize: 14 }
    );
    subhead(s, pres, { y: 4.22, tag: "흐름", text: "모든 사람은 그분에 의해 창조되고 생명을 얻었다 — 그런데" });
    flow(
      s,
      pres,
      [
        { head: "창조", body: "그분에 의해 지어지고\n생명을 얻었다" },
        { head: "타락", body: "근원을 버리고\n어둠 속으로 들어갔다" },
        { head: "돌아섬", body: "새로운 방향으로 돌아오려면\n오직 빛을 향해 돌아서는 길밖에 없다" },
        { head: "생명", body: "생명이 그분 안에 있다\n빛으로 나아갈 때\n나와 다른 사람의 삶을 이해하게 된다" },
      ],
      { y: 4.7, h: 1.72, headSize: 17, bodySize: 13 }
    );
    s.addText("어둠은 빛을 이기지 못합니다 — 다만 깨닫지 못할 뿐입니다 (1:5)", {
      x: M, y: 6.52, w: LAYOUT.CONTENT_W, h: 0.38, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, color: C.accent5, objectName: "note",
    });
  }

  // ── 세례요한의 자리 + 영접
  {
    const s = S("CONTENT");
    s.addText("세례 요한의 자리, 그리고 ‘영접’의 뜻", { placeholder: "title" });
    s.addText("질문 31~33", {
      x: 11.0, y: LAYOUT.TITLE_Y, w: 1.58, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });
    compare(s, pres, {
      y: 1.64, h: 2.6,
      left: {
        head: "31. 세례 요한의 사역 (6~8절)",
        fontSize: 15,
        items: [
          { text: "빛에 대해 증언함으로 예수님을 믿게 하는 것", sub: "“그는 빛이 아니요 이 빛에 대하여 증언하러 온 자라”" },
          { text: "요한복음은 세례요한의 비중을 의도적으로 낮춘다", sub: "“그는 흥하여야 하겠고 나는 쇠하여야 하리라” (3:30)" },
        ],
      },
      right: {
        head: "32~33. 영접한다는 것 = 믿는 것 = 순종하는 것",
        fontSize: 15,
        items: [
          { text: "영접 = 그 이름을 믿는 것 (1:12)", sub: "‘영접함’과 ‘믿음’이 같은 뜻으로 쓰인다" },
          { text: "믿음 = 순종 (3:36)", sub: "요한복음의 믿음은 ‘행동하는 믿음’이다" },
        ],
      },
    });
    subhead(s, pres, { y: 4.34, tag: "34", text: "13절 — 하나님의 자녀가 되는 길" });
    cardGrid(
      s,
      pres,
      [
        { tag: "✕", head: "혈통으로 나지 아니하고", body: "모태신앙이어서가 아니다" },
        { tag: "✕", head: "육정으로 나지 아니하고", body: "사람의 욕구나 노력이 아니다" },
        { tag: "✕", head: "사람의 뜻으로 나지 않고", body: "누군가의 결정으로 되지 않는다" },
        { tag: "○", head: "오직 하나님께로 난 자들", body: "하나님이 낳으셔야 한다", foot: "35. 자녀 됨의 근원은 예수님" },
      ],
      { y: 4.8, h: 1.85, cols: 4, headSize: 15, bodySize: 13, footSize: 11.5, badgeD: 0.4, pad: 0.2 }
    );
  }

  // ── 나눔 Q7 · Q8
  {
    const s = S("SHARE");
    s.addText("나눔 · 질문 Q7 · Q8", { placeholder: "kicker" });
    s.addText("나는 누구에게 빛을 가리켜 줄 것인가", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        {
          tag: "Q7",
          head: "당신에게 세례요한의 역할을 한 사람은 누구입니까?",
          body: "나를 예수님께로 가리켜 준 사람의 이름을 떠올려 봅시다.\n그리고 — 당신은 누구에게 그런 사람이 되려 합니까?",
        },
        {
          tag: "Q8",
          head: "어두운 세상에서 예수님의 빛을 밝히기 위해 할 수 있는 일은 무엇입니까?",
          body: "이번 주에 실제로 할 수 있는 한 가지를 구체적으로 적어 봅시다.",
        },
      ],
      { y: 2.5, h: 3.1, cols: 2, headSize: 18, bodySize: 15, dark: true, fill: C.text2 }
    );
    s.addText("조별 나눔 10분 → 전체 나눔 2명", {
      x: M, y: 5.86, w: 8, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, color: C.accent1, objectName: "guide",
    });
  }

  // ── 1:14 본문
  {
    const s = S("CONTENT_DARK");
    s.addText("요한복음 1:14", { placeholder: "title" });
    scripture(s, pres, {
      x: M, y: 1.85, w: 11.8, h: 3.1,
      text: "말씀이 육신이 되어 우리 가운데 거하시매 우리가 그의 영광을 보니 아버지의 독생자의 영광이요 은혜와 진리가 충만하더라",
      ref: "요한복음 1:14 (개역개정)",
      fontSize: 28,
    });
    keyline(s, pres, { y: 5.26, h: 0.86, text: "요한복음에서 ‘영광’이 처음 등장하는 자리 — 영광은 성육신에서 보입니다", fontSize: 19 });
  }

  // ── 다. 하나님이신 예수님 (성육신)
  {
    const s = S("CONTENT");
    s.addText("다. 하나님이신 예수님 (1:14~18) — 성육신", { placeholder: "title" });
    s.addText("질문 36~37", {
      x: 11.0, y: LAYOUT.TITLE_Y, w: 1.58, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });
    keyline(s, pres, {
      y: 1.66, h: 1.0,
      text: "36. 말씀이 육신이 되었다 = 성육신(Incarnation)\n먼저 찾아와 주시는 하나님 · 가까이 계시는 하나님",
      fontSize: 18,
    });
    subhead(s, pres, { y: 2.9, tag: "37", text: "인간이 되기 위해 예수님이 포기하신 것, 그리고 그 이유" });
    compare(s, pres, {
      y: 3.46, h: 2.9,
      left: {
        head: "포기하신 것",
        fontSize: 15,
        items: [
          "하나님으로서의 영광 그 자체 (빌 2:6)",
          "신적 특권 — 전능·전지의 자유로운 사용",
          "하나님과의 깊은 관계성 (“어찌하여 나를 버리셨나이까”)",
        ],
      },
      right: {
        head: "왜 포기하셨는가",
        fontSize: 15,
        items: [
          "믿는 이들에게 하나님의 자녀가 되는 권세를 주기 위해 (1:12)",
          "구원의 놀라운 은혜를 주기 위해",
          "“자기를 비워 종의 형체를 가지사 사람들과 같이 되셨고” (빌 2:7)",
        ],
      },
    });
    s.addText("포기 없는 사랑은 없습니다. 하나님이 먼저 포기하셨습니다.", {
      x: M, y: 6.5, w: LAYOUT.CONTENT_W, h: 0.38, margin: 0, isTextBox: true,
      fontSize: 15, bold: true, color: C.accent5, objectName: "note",
    });
  }

  // ── 율법 vs 은혜
  {
    const s = S("CONTENT");
    s.addText("율법과 은혜 (1:16~17)", { placeholder: "title" });
    s.addText("질문 38~40", {
      x: 11.0, y: LAYOUT.TITLE_Y, w: 1.58, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });
    scripture(s, pres, {
      x: M, y: 1.62, w: 11.8, h: 1.0, dark: false, fontSize: 17,
      text: "율법은 모세로 말미암아 주어진 것이요 은혜와 진리는 예수 그리스도로 말미암아 온 것이라",
      ref: "요한복음 1:17",
    });
    compare(s, pres, {
      y: 2.76, h: 2.7,
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
    s.addText("질문 41", {
      x: 11.2, y: LAYOUT.TITLE_Y, w: 1.38, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 14, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });
    scripture(s, pres, {
      x: M, y: 1.62, w: 11.8, h: 1.1, dark: false, fontSize: 18,
      text: "본래 하나님을 본 사람이 없으되 아버지 품 속에 있는 독생하신 하나님이 나타내셨느니라",
      ref: "요한복음 1:18",
    });
    cardGrid(
      s,
      pres,
      [
        {
          tag: "①",
          head: "아버지 품 속 — 관계성",
          body: "하나님과의 친밀한 인격적 관계를 뜻한다.\n1절의 “하나님과 함께 계셨으니”와 같은 의미다.",
        },
        {
          tag: "②",
          head: "독생하신 하나님 — 신성",
          body: "하나님과 동일한 속성을 가지셨다는 뜻이며,\n피조된 분이 아님을 뜻한다.",
        },
        {
          tag: "③",
          head: "나타내셨느니라 — 계시",
          body: "아무도 보지 못한 하나님을\n예수님이 보여주셨다.\n요한복음은 이 계시에 대한 복음서다.",
        },
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
