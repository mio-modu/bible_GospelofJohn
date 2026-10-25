/**
 * 낱장 2매 — 2026-10-25 요청
 *   ① 가. 창조주이신 예수님 (1:1~3)  … 세 카드를 'A안'으로 교체
 *   ② 창조 안의 삼위 하나님          … 새로 추가
 */
const { LAYOUT } = require("../src/theme");
const { cardGrid, keyline, subhead, scripture } = require("../src/components");

const SECTION = "1과 · 하나님에 대한 증언";

const qtag = (s, pres, text) =>
  s.addText(text, {
    x: 10.7, y: LAYOUT.TITLE_Y, w: 1.88, h: LAYOUT.TITLE_H, margin: 0, isTextBox: true,
    fontSize: 16, bold: true, align: "right", valign: "middle",
    color: pres.SchemeColor.accent1, objectName: "qtag",
  });

// ── ① 가. 창조주이신 예수님 (1:1~3)  — A안
function slideLogos(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SECTION });

  s.addText("가. 창조주이신 예수님 (1:1~3)", { placeholder: "title" });
  qtag(s, pres, "질문 22~23");

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
      { head: "아버지에게서 나오셨으므로", body: "말씀에는 반드시 말한 이가 있다\n“내가 아버지에게서 나와\n세상에 왔고” (16:28)" },
      { head: "하나님을 알려주시므로", body: "우리는 하나님에 대한 개념을\n예수님을 통해서 얻는다" },
      { head: "하나님을 떠오르게 하므로", body: "말씀을 들으면\n말하는 분이 떠오른다" },
    ],
    { y: 3.58, h: 2.5, cols: 3, headSize: 20, bodySize: 17 }
  );
  s.addText("예수님을 보면 하나님이 보입니다 (14:9)", {
    x: M, y: 6.3, w: LAYOUT.CONTENT_W, h: 0.42, margin: 0, isTextBox: true,
    fontSize: 19, bold: true, color: C.accent5, objectName: "note",
  });
  s.addNotes(
    "세 카드는 나란한 이유가 아니라 순서입니다 — 나오심(전제) → 알려주심(사역) → 떠오르게 하심(결과). " +
      "‘말씀’이라는 단어에는 반드시 말한 이가 전제됩니다. " +
      "‘보내심 받은’도 요한의 표현이지만(40회 이상), 그 말만 쓰면 선지자·사도와 같은 급으로 들립니다. " +
      "요한은 ‘보내심’을 쓸 때마다 어디서 왔는지를 붙여 그 오해를 막습니다 — " +
      "16:28 아버지에게서 나와, 6:38 하늘에서 내려온, 3:13 하늘에서 내려온 자, 17:5 창세 전에 가졌던 영화. " +
      "선지자는 태어나서 보내심을 받고, 예수님은 계시다가 오셨습니다."
  );
}

// ── ② 창조 안의 삼위 하나님
function slideTrinity(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: SECTION });

  s.addText("창조 안의 삼위 하나님", { placeholder: "title" });
  qtag(s, pres, "1:1~3 심화");

  keyline(s, pres, {
    y: 1.72, h: 0.84,
    text: "창조는 한 분 하나님의 한 사역입니다 — 셋이 나누어 맡은 것이 아닙니다",
    fontSize: 21,
  });
  cardGrid(
    s,
    pres,
    [
      {
        tag: "성부",
        head: "그에게서 (ἐκ)",
        body: "“만물이 그에게서 났고”\n고린도전서 8:6",
        foot: "창조의 발원",
      },
      {
        tag: "성자",
        head: "그로 말미암아 (διά)",
        body: "“만물이 그로 말미암아\n지은 바 되었으니”\n요한복음 1:3",
        foot: "창조의 중개",
      },
      {
        tag: "성령",
        head: "수면 위에 운행",
        body: "“하나님의 영은 수면 위에\n운행하시니라”\n창세기 1:2",
        foot: "창조의 생기",
      },
    ],
    { y: 2.78, h: 3.02, cols: 3, headSize: 22, bodySize: 17 }
  );
  keyline(s, pres, {
    y: 6.02, h: 0.78,
    text: "구분되지만 나뉘지 않습니다  ·  능력의 서열이 아니라 관계의 질서입니다",
    fontSize: 21,
  });
  s.addNotes(
    "‘건축가와 인부’ 비유는 쓰지 마십시오 — 그것이 아리우스가 주장한 구도이고 니케아가 거부한 내용입니다. " +
      "예수님은 창조의 도구가 아니라 창조주이십니다. " +
      "근거 : 히 1:10이 시편 102:25(야훼께 드리는 시)를 아들에게 적용합니다. " +
      "요 1:3의 이중 부정 “지은 것이 하나도 그가 없이는 된 것이 없느니라”는 예외를 남기지 않으므로, 예수님이 피조물이면 자기가 자기를 지은 모순이 됩니다. " +
      "요한이 1절(신성)을 3절(창조) 앞에 둔 것도 이 오해를 막기 위해서입니다. " +
      "비유를 쓰신다면 ‘말하는 사람과 그 말’ — 분리되지 않으면서 구별됩니다."
  );
}

module.exports = {
  title: "요한복음 1강 · 말씀과 창조",
  section: SECTION,
  fileName: "요한복음_1강_말씀과_창조_2장",
  slides: [slideLogos, slideTrinity],
};
