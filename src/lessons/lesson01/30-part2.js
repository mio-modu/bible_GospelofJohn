/** 제1강 · PART 3 — 1과 후반 : 하나님에 대한 증언이신 예수님 (1:1~18, 질문 22~41, 12장) */
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
      x: 10.7, y: LAYOUT.TITLE_Y, w: 1.88, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
      fontSize: 16, bold: true, align: "right", valign: "middle", color: C.accent1, objectName: "qtag",
    });

  // ── 섹션 구분
  {
    const s = S("DIVIDER");
    s.addText("03", { placeholder: "num" });
    s.addText("하나님에 대한 증언이신 예수님", { placeholder: "title" });
    s.addText("요한복음 1:1~18   ·   창조주 · 인도자 · 하나님", { placeholder: "body" });
  }

  // ── 1:1~3 본문
  {
    const s = S("CONTENT_DARK");
    s.addText("요한복음 1:1~3", { placeholder: "title" });
    scripture(s, pres, {
      x: M, y: 1.9, w: 11.8, h: 3.5,
      text: "태초에 말씀이 계시니라 이 말씀이 하나님과 함께 계셨으니 이 말씀은 곧 하나님이시니라 만물이 그로 말미암아 지은 바 되었으니 지은 것이 하나도 그가 없이는 된 것이 없느니라",
      ref: "요한복음 1:1~3 (개역개정)",
      fontSize: 30,
    });
    keyline(s, pres, { y: 5.68, h: 0.9, text: "족보도, 출생도 없이 — 요한은 ‘태초’에서 시작합니다", fontSize: 24 });
  }

  // ── 가. 창조주이신 예수님
  {
    const s = S("CONTENT");
    s.addText("가. 창조주이신 예수님 (1:1~3)", { placeholder: "title" });
    qtag(s, "질문 22~23");
    keyline(s, pres, {
      y: 1.74, h: 0.9,
      text: "22. 1절과 14절의 ‘말씀’은 예수님이시다 — 14절 “말씀이 육신이 되어”가 이를 확정한다",
      fontSize: 20,
    });
    subhead(s, pres, { y: 2.98, tag: "23", text: "왜 예수님을 ‘말씀(로고스)’이라 묘사했는가" });
    cardGrid(
      s,
      pres,
      [
        { head: "하나님을 알려주시므로", body: "우리는 하나님에 대한 개념을\n예수님을 통해서 얻는다" },
        { head: "하나님이 먼저 오셨으므로", body: "우리 편에서 만날 수 없기에\n하나님이 먼저 말씀을 주셨다" },
        { head: "하나님을 떠오르게 하므로", body: "말씀을 들으면\n말하는 분이 떠오른다" },
      ],
      { y: 3.62, h: 2.3, cols: 3, headSize: 20, bodySize: 17 }
    );
    s.addText("예수님을 보면 하나님이 보입니다 (14:9)", {
      x: M, y: 6.14, w: LAYOUT.CONTENT_W, h: 0.42, margin: 0, isTextBox: true,
      fontSize: 19, bold: true, color: C.accent5, objectName: "note",
    });
  }

  // ── 1절 세 마디
  {
    const s = S("CONTENT");
    s.addText("1절을 세 마디로 끊어 읽기", { placeholder: "title" });
    qtag(s, "질문 24~28");
    cardGrid(
      s,
      pres,
      [
        { tag: "①", head: "태초에 말씀이 계시니라", body: "시간 밖에 계신 분\n→ 영원하신 분", foot: "질문 27" },
        { tag: "②", head: "하나님과 함께 계셨으니", body: "두 분은 함께 계셨다\n→ 구분된 인격", foot: "질문 24" },
        { tag: "③", head: "말씀은 곧 하나님이시니라", body: "예수님은 하나님이시다\n→ 동일한 본질", foot: "질문 25" },
      ],
      { y: 1.72, h: 3.0, cols: 3, headSize: 20, bodySize: 17 }
    );
    subhead(s, pres, { y: 4.84, tag: "26", text: "함께 계시면서 동시에 하나님 — 삼위일체(Trinity)" });
    compare(s, pres, {
      y: 5.3, h: 1.5,
      left: { head: "동일한 본질", fontSize: 16, items: ["성부 · 성자 · 성령은 한 하나님"] },
      right: { head: "구분된 위격", fontSize: 16, items: ["세 분은 인격으로 구분되신다"] },
    });
  }

  // ── 예수님의 두 모습
  {
    const s = S("CONTENT");
    s.addText("1:1~3이 보여주는 예수님", { placeholder: "title" });
    qtag(s, "질문 27~28");
    cardGrid(
      s,
      pres,
      [
        { tag: "①", head: "영원하신 분", body: "“태초에 말씀이 계시니라”\n\n창조 이전부터 계셨다.\n시작도 끝도 없으시다.\n\n요한복음에 족보도,\n출생 기사도 없는 이유다." },
        { tag: "②", head: "창조주", body: "“만물이 그로 말미암아\n지은 바 되었으니” (3절)\n\n창세기 1장\n“하나님이 말씀하시니…”와 연결.\n\ncf. 골 1:15~17" },
      ],
      { y: 1.74, h: 4.06, cols: 2, headSize: 28, bodySize: 18, badgeD: 0.58 }
    );
    keyline(s, pres, {
      y: 5.98, h: 0.84,
      text: "나를 지으신 분이 나를 구원하러 오셨습니다",
      fontSize: 24,
    });
  }

  // ── 나. 인도자이신 예수님
  {
    const s = S("CONTENT");
    s.addText("나. 인도자이신 예수님 (1:4~13)", { placeholder: "title" });
    qtag(s, "질문 29~30");
    scripture(s, pres, {
      x: M, y: 1.72, w: 11.8, h: 1.4, dark: false, fontSize: 21,
      text: "그 안에 생명이 있었으니 이 생명은 사람들의 빛이라 빛이 어둠에 비치되 어둠이 깨닫지 못하더라",
      ref: "요한복음 1:4~5",
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "29", head: "또 다른 비유", body: "빛 (4~9절)" },
        { tag: "기능", head: "빛이 하는 일", body: "어둠 속에서 보게 한다\n하나님을 알게 한다\n내면의 어둠을 물리친다" },
        { tag: "30", head: "그래서 예수님은", body: "인도자\n빛은 인도의 기능을 한다" },
      ],
      { y: 3.32, h: 2.4, cols: 3, headSize: 20, bodySize: 17 }
    );
    keyline(s, pres, { y: 5.9, h: 0.9, text: "어둠은 빛을 이기지 못합니다 — 다만 깨닫지 못할 뿐입니다", fontSize: 22 });
  }

  // ── 창조 → 타락 → 돌아섬 + 영접
  {
    const s = S("CONTENT");
    s.addText("빛으로 돌아서는 길", { placeholder: "title" });
    qtag(s, "질문 31~35");
    flow(
      s,
      pres,
      [
        { head: "창조", body: "그분에 의해 지어지고\n생명을 얻었다" },
        { head: "타락", body: "근원을 버리고\n어둠으로 들어갔다" },
        { head: "돌아섬", body: "오직 빛을 향해\n돌아서는 길뿐" },
        { head: "생명", body: "생명이 그분 안에 있다" },
      ],
      { y: 1.76, h: 1.9, headSize: 20, bodySize: 16 }
    );
    subhead(s, pres, { y: 3.84, tag: "31~33", text: "세례 요한은 증언자 · 영접 = 믿음 = 순종" });
    cardGrid(
      s,
      pres,
      [
        { tag: "✕", head: "혈통이 아니라", body: "모태신앙이어서가 아니다" },
        { tag: "✕", head: "육정이 아니라", body: "사람의 노력이 아니다" },
        { tag: "✕", head: "사람의 뜻이 아니라", body: "누군가의 결정이 아니다" },
        { tag: "○", head: "하나님께로 난 자", body: "하나님이 낳으셔야 한다" },
      ],
      { y: 4.42, h: 1.98, cols: 4, headSize: 18, bodySize: 15.5, badgeD: 0.44, pad: 0.22 }
    );
    s.addText("34~35. 하나님의 자녀가 되는 길 (13절) — 그 근원은 예수님이십니다.", {
      x: M, y: 6.46, w: LAYOUT.CONTENT_W, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 18, bold: true, color: C.accent5, objectName: "note",
    });
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
        { tag: "Q6", head: "창조주라는 사실", body: "내 삶에 어떤 영향을 주나요?\n왜 창조하셨을까요?\n→ 우리와 교제하기 위해" },
        { tag: "Q7", head: "나에게 세례요한은", body: "나를 예수님께로 가리켜 준\n사람은 누구였나요?\n\n나는 누구에게\n그런 사람이 되렵니까?" },
        { tag: "Q8", head: "빛을 밝히려면", body: "어두운 세상에서\n내가 할 수 있는 일은?\n\n이번 주에 할 한 가지를\n정해 봅시다." },
      ],
      { y: 2.6, h: 3.3, cols: 3, headSize: 21, bodySize: 17, dark: true, fill: C.text2 }
    );
    s.addText("조별 나눔 10분 → 전체 나눔 2명", {
      x: M, y: 6.08, w: 8, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 16, bold: true, color: C.accent1, objectName: "guide",
    });
  }

  // ── 다. 성육신
  {
    const s = S("CONTENT");
    s.addText("다. 하나님이신 예수님 — 성육신", { placeholder: "title" });
    qtag(s, "질문 36~37");
    scripture(s, pres, {
      x: M, y: 1.72, w: 11.8, h: 1.66, dark: false, fontSize: 21,
      text: "말씀이 육신이 되어 우리 가운데 거하시매 우리가 그의 영광을 보니 아버지의 독생자의 영광이요 은혜와 진리가 충만하더라",
      ref: "요한복음 1:14",
    });
    subhead(s, pres, { y: 3.58, tag: "37", text: "인간이 되기 위해 포기하신 것, 그리고 그 이유" });
    compare(s, pres, {
      y: 4.18, h: 2.42,
      left: {
        head: "포기하신 것",
        fontSize: 17,
        items: ["하나님으로서의 영광 (빌 2:6)", "신적 특권", "하나님과의 깊은 관계성"],
      },
      right: {
        head: "왜 포기하셨는가",
        fontSize: 17,
        items: ["자녀 되는 권세를 주기 위해", "구원의 은혜를 주기 위해", "“자기를 비워 종의 형체를” (빌 2:7)"],
      },
    });
  }

  // ── 율법과 은혜
  {
    const s = S("CONTENT");
    s.addText("율법과 은혜 (1:16~17)", { placeholder: "title" });
    qtag(s, "질문 38~40");
    scripture(s, pres, {
      x: M, y: 1.72, w: 11.8, h: 1.4, dark: false, fontSize: 21,
      text: "율법은 모세로 말미암아 주어진 것이요 은혜와 진리는 예수 그리스도로 말미암아 온 것이라",
      ref: "요한복음 1:17",
    });
    compare(s, pres, {
      y: 3.3, h: 2.5,
      left: {
        head: "율법",
        fontSize: 18,
        items: ["죄를 깨닫게 하고 정죄한다", "진단은 하지만 치료는 못 한다", "체온계와 같다"],
      },
      right: {
        head: "은혜",
        fontSize: 18,
        items: ["죄인을 용서한다", "죄의 치료이며 해결이다", "노력이 아닌 하나님의 선물"],
      },
    });
    keyline(s, pres, {
      y: 6.0, h: 0.8,
      text: "누구도 율법을 완벽히 지킬 수 없기에, 은혜로 용서받을 필요가 있습니다",
      fontSize: 20,
    });
  }

  // ── 18절
  {
    const s = S("CONTENT");
    s.addText("18절 — 아버지 품 속에 있는 독생하신 하나님", { placeholder: "title" });
    qtag(s, "질문 41");
    scripture(s, pres, {
      x: M, y: 1.72, w: 11.8, h: 1.4, dark: false, fontSize: 21,
      text: "본래 하나님을 본 사람이 없으되 아버지 품 속에 있는 독생하신 하나님이 나타내셨느니라",
      ref: "요한복음 1:18",
    });
    cardGrid(
      s,
      pres,
      [
        { tag: "①", head: "아버지 품 속", body: "관계성\n하나님과의 친밀한\n인격적 관계" },
        { tag: "②", head: "독생하신 하나님", body: "신성\n하나님과 동일한 속성\n피조된 분이 아니다" },
        { tag: "③", head: "나타내셨느니라", body: "계시\n아무도 보지 못한 하나님을\n예수님이 보여주셨다" },
      ],
      { y: 3.3, h: 2.5, cols: 3, headSize: 21, bodySize: 17 }
    );
    s.addText("“하나님을 본 사람이 없다”면 모세는? — 모세도 하나님의 본체를 본 것이 아닙니다 (출 33:20~23).", {
      x: M, y: 6.0, w: LAYOUT.CONTENT_W, h: 0.42, margin: 0, isTextBox: true,
      fontSize: 18, bold: true, color: C.accent5, objectName: "note",
    });
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
        { tag: "Q9", head: "성육신의 의미", body: "“말씀이 육신이 되셨다”가\n나에게 어떤 의미입니까?\n\n가까이 계시는 하나님\n포기하시는 분" },
        { tag: "Q10", head: "알게 된 하나님", body: "예수님을 통해\n하나님의 어떤 부분을\n알게 되었습니까?\n\n구원의 뜻 · 진리 · 사랑" },
        { tag: "Q11", head: "나는 무엇을 포기할까", body: "이웃을 위해 무엇을\n포기하시겠습니까?\n\n시간 · 돈 · 편안함 · 자존심" },
      ],
      { y: 2.6, h: 3.3, cols: 3, headSize: 21, bodySize: 17, dark: true, fill: C.text2 }
    );
    s.addText("조별 나눔 10분 → 전체 나눔 2명", {
      x: M, y: 6.08, w: 8, h: 0.4, margin: 0, isTextBox: true,
      fontSize: 16, bold: true, color: C.accent1, objectName: "guide",
    });
  }
};
