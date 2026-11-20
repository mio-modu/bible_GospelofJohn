/** 제5강 · 마무리 */
const { LAYOUT } = require("../../theme");
const { rows, statement, cardGrid, scripture, compare, keyline } = require("../../components");

module.exports = function closing(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: "마무리" });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: "마무리" });

  // ── 5강 한 장 정리
  {
    const s = S("CONTENT");
    s.addText("5강 한 장 정리", { placeholder: "title" });
    rows(
      s,
      pres,
      [
        { tag: "11:4", head: "이 병은 죽을 병이 아니라 — 종착지가 죽음이 아닙니다", body: "" },
        { tag: "11:6", head: "이틀을 더 머무심 — 늦으신 것이 아니라 기다리신 것", body: "" },
        { tag: "11:25", head: "나는 부활이요 생명이니 — 이것을 네가 믿느냐", body: "" },
        { tag: "11:35", head: "예수께서 눈물을 흘리시더라 — 아시면서도 함께 우십니다", body: "" },
        { tag: "11:40", head: "돌을 옮겨 놓으라 — 믿어야 봅니다", body: "" },
        { tag: "11:50", head: "한 사람이 백성을 위하여 — 악한 계획까지 쓰십니다", body: "" },
        { tag: "12:7", head: "나의 장례할 날을 위하여 — 거룩한 낭비", body: "" },
        { tag: "12:24", head: "한 알의 밀이 떨어져 죽으면 — 많은 열매", body: "" },
        { tag: "12:28", head: "아버지의 이름을 영광스럽게 하옵소서", body: "" },
        { tag: "12:43", head: "사람의 영광을 하나님의 영광보다 더 사랑하였더라", body: "" },
      ],
      { y: 1.74, headSize: 21, tagW: 1.25, gap: 0.03 }
    );
    s.addNotes(
      "5과 전체를 한 장으로 되짚습니다.\n\n" +
        "열두 Point를 열 구절로 압축했습니다. 빠르게 훑으시면 됩니다.\n\n" +
        "흐름 하나만 다시 짚어 주십시오. " +
        "11장은 무덤에서 나오는 이야기고, 12장은 무덤으로 들어가는 이야기입니다. " +
        "그리고 그 사이에 향유가 놓여 있습니다."
    );
  }

  // ── 두 무덤 다시 묶기
  {
    const s = S("CONTENT");
    s.addText("처음에 펼친 지도를 다시 보면", { placeholder: "title" });
    compare(s, pres, {
      y: 1.86, h: 3.4,
      left: {
        head: "나사로",
        fontSize: 18,
        items: [
          "불려 나왔습니다",
          "수족을 베로 동인 채로 나왔습니다",
          "누군가 풀어 주어야 했습니다",
          "“풀어 놓아 다니게 하라”  (11:44)",
        ],
      },
      right: {
        head: "예수님",
        fontSize: 18,
        items: [
          "스스로 걸어 들어가셨습니다",
          "“내가 스스로 버리노라”  (10:18)",
          "수건을 개켜 두고 나오셨습니다",
          "“따로 한 곳에 쌌더라”  (20:7)",
        ],
      },
    });
    keyline(s, pres, { y: 5.5, h: 1.2, text: "나사로는 풀려났고, 예수님은 스스로 벗으셨습니다", fontSize: 28 });
    s.addNotes(
      "강의 처음에 펼쳤던 두 무덤 지도를 여기서 닫습니다.\n\n" +
        "디테일 하나를 마지막에 주십시오.\n\n" +
        "나사로는 수족이 베로 동인 채 나왔습니다. 혼자 풀 수 없었습니다. " +
        "그래서 예수님이 '풀어 놓아 다니게 하라' 하셨습니다. " +
        "누군가 손을 대야 했습니다.\n\n" +
        "예수님은 다릅니다. 20:7을 보면 머리를 쌌던 수건이 " +
        "'세마포와 함께 놓이지 아니하고 따로 한 곳에 쌌더라'고 되어 있습니다. " +
        "스스로 벗고 개켜 두고 나오셨습니다.\n\n" +
        "살림을 받은 자와 살리시는 분의 차이가 거기 있습니다.\n\n" +
        "그리고 10:18과 연결하십시오 — '이를 내게서 빼앗는 자가 있는 것이 아니라 " +
        "내가 스스로 버리노라.' 들어가는 것도 나오는 것도 그분의 권세였습니다."
    );
  }

  // ── 한 문장으로
  {
    const s = S("CONTENT_DARK");
    s.addText("한 문장으로", { placeholder: "title" });
    statement(s, pres, {
      y: 2.4, size: 42, dark: true,
      text: "하나님의 영광은\n무덤을 지나서 드러납니다",
      sub: "죽음을 피해서가 아니라, 죽음을 지나서입니다",
    });
    s.addNotes(
      "시작할 때 걸어 둔 문장으로 돌아옵니다.\n\n" +
        "11:4에서 '이 병은 죽을 병이 아니라 하나님의 영광을 위함이요' 하셨습니다. " +
        "그런데 나사로는 죽었습니다. " +
        "죽지 않게 하신 게 아니라, 죽음을 지나게 하신 겁니다.\n\n" +
        "12:23에서 '인자가 영광을 얻을 때가 왔도다' 하시고 " +
        "바로 다음 절에서 '한 알의 밀이 땅에 떨어져 죽지 아니하면' 하십니다. " +
        "영광의 내용이 죽음입니다.\n\n" +
        "그러니 오늘 우리가 지나고 있는 어둠도 하나님의 영광에서 벗어난 자리가 아닙니다. " +
        "다만 아직 나흘째일 수 있습니다.\n\n" +
        "기도로 마치시되, 나눔에서 나온 '나흘이 지난 자리'를 한 번 더 언급해 주십시오."
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
        { tag: "1", head: "5강 소감문", body: "가장 마음에 남은 한 장면", foot: "제출 : 다음 주" },
        { tag: "2", head: "제6과 예습", body: "교재 질문 미리 답하기", foot: "" },
        { tag: "3", head: "통독", body: "요한복음 11~12장 다시", foot: "권장" },
        { tag: "4", head: "암송", body: "요한복음 11:25~26", foot: "필수" },
      ],
      { y: 1.9, h: 2.9, cols: 4, headSize: 23, bodySize: 18, footSize: 16 }
    );
    scripture(s, pres, {
      x: M, y: 5.1, w: LAYOUT.CONTENT_W, h: 1.6, dark: false, fontSize: 23,
      text: "나는 부활이요 생명이니 나를 믿는 자는 죽어도 살겠고 무릇 살아서 나를 믿는 자는 영원히 죽지 아니하리니 이것을 네가 믿느냐",
      ref: "요한복음 11:25~26 — 이번 주 암송 구절",
    });
    s.addNotes(
      "소감문은 분량보다 한 장면에 집중하게 하십시오.\n\n" +
        "11:25~26은 반드시 암송하게 하십시오. 장례식에서 가장 많이 읽히는 구절이기도 합니다. " +
        "다음 주 시작할 때 함께 외우고 시작하면 좋습니다.\n\n" +
        "소그룹에 남길 질문 하나 — " +
        "'이번 주, 내가 땅에 떨어져 죽어야 할 한 알은 무엇입니까?'"
    );
  }

  // ── 맺음
  {
    const s = pres.addSlide({ masterName: "COVER", sectionTitle: "마무리" });
    s.addText("제5강을 마칩니다", { placeholder: "kicker" });
    s.addText("영광이신 하나님", { placeholder: "title" });
    s.addText(
      [
        { text: "“한 알의 밀이 땅에 떨어져 죽지 아니하면 한 알 그대로 있고", options: { italic: true, breakLine: true } },
        { text: "죽으면 많은 열매를 맺느니라”", options: { italic: true, breakLine: true } },
        { text: "요한복음 12:24", options: { bold: true, fontSize: 17 } },
      ],
      { placeholder: "body" }
    );
    s.addNotes("12:24를 함께 읽고 기도로 마무리하십시오.");
  }
};
