/** 제1강 · PART 4 마무리 + 부록 */
const { LAYOUT } = require("../../theme");
const { cardGrid, bullets, keyline, subhead, scripture, tableOpts, headRow, panel } = require("../../components");

module.exports = function closing(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;

  // ── 마무리
  pres.addSection({ title: "마무리" });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: "마무리" });

  // 1강 한 장 정리
  {
    const s = S("CONTENT");
    s.addText("1강 한 장 정리", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "핵심 주제", body: "예수님은 누구신가\n→ 예수님의 신성(神性)에 초점" },
        { tag: "2", head: "기록목적 (20:31)", body: "예수가 하나님의 아들이심을 믿고,\n그 이름을 힘입어 생명을 얻게 함" },
      ],
      { y: 1.66, h: 2.0, cols: 2, headSize: 18, bodySize: 14 }
    );
    subhead(s, pres, { y: 3.76, tag: "3", text: "신성의 근거 여섯 가지" });
    cardGrid(
      s,
      pres,
      [
        { head: "일곱 자기선언", body: "떡 빛 문 목자\n부활생명\n길진리생명\n포도나무" },
        { head: "성령의 복음서", body: "하나님은 영이시다\n배에서 생수의 강이 흘러나리라" },
        { head: "영광의 복음서", body: "‘영광’이라는 표현이 많다\n대표적으로 1:14과 17장" },
        { head: "사랑의 복음서", body: "“내가 너희를 사랑한 것 같이\n너희도 서로 사랑하라”" },
        { head: "일곱 표적", body: "가왕베\n오물실나" },
        { head: "유대 중심 사역", body: "명절마다\n예루살렘으로\n올라가심" },
      ],
      { y: 4.2, h: 1.72, cols: 6, headSize: 13.5, bodySize: 12, pad: 0.18 }
    );
    keyline(s, pres, {
      y: 6.12, h: 0.56,
      text: "4. 구조  ·  신학적 서론(~1:18) → 유대·예루살렘 사역(1:19~12) → 다락방 강화(13~17) → 수난과 부활(18~20) → 갈릴리 현현(21)",
      fontSize: 13,
    });
  }

  // 다음 주까지
  {
    const s = S("CONTENT");
    s.addText("다음 주까지", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "1강 소감문", body: "오늘 강의에서 가장 마음에 남은 것\n한 가지를 중심으로 작성", foot: "제출 : 2주차" },
        { tag: "2", head: "제2과 예습", body: "요 1:19~4:42\n교재 질문에 미리 답해 보기", foot: "제2과 영광이 드러나다" },
        { tag: "3", head: "요한복음 통독", body: "한 주에 21장 일독\n한 번에 쭉 읽어 보기", foot: "권장" },
        { tag: "4", head: "성구 암송", body: "요한복음 1:12\n요한복음 20:31", foot: "권장" },
      ],
      { y: 1.7, h: 3.0, cols: 4, headSize: 18, bodySize: 14, footSize: 12 }
    );
    scripture(s, pres, {
      x: M, y: 5.0, w: 11.8, h: 1.2, dark: false, fontSize: 21,
      text: "영접하는 자 곧 그 이름을 믿는 자들에게는 하나님의 자녀가 되는 권세를 주셨으니",
      ref: "요한복음 1:12 — 이번 주 암송 구절",
    });
  }

  // 마지막 슬라이드
  {
    const s = pres.addSlide({ masterName: "COVER", sectionTitle: "마무리" });
    s.addText("제1강을 마칩니다", { placeholder: "kicker" });
    s.addText("절대 예수", { placeholder: "title" });
    s.addText(
      [
        {
          text: "“오직 이것을 기록함은 너희로 예수께서 하나님의 아들 그리스도이심을 믿게 하려 함이요",
          options: { italic: true, breakLine: true },
        },
        { text: "또 너희로 믿고 그 이름을 힘입어 생명을 얻게 하려 함이니라”", options: { italic: true, breakLine: true } },
        { text: "요한복음 20:31", options: { bold: true, fontSize: 15 } },
      ],
      { placeholder: "body" }
    );
  }

  // ── 부록
  pres.addSection({ title: "부록" });
  const A = (masterName) => pres.addSlide({ masterName, sectionTitle: "부록" });

  // 부록 1 : 숫자와 시간
  {
    const s = A("CONTENT");
    s.addText("부록 ① 요한복음을 더 깊이 읽는 자료", { placeholder: "title" });
    const left = [
      ["성령의 상징", "바람(3장) · 비둘기(1:32) · 물(7장) · 기름(눅 4장) · 인(엡 1장) · 불(행 2장)"],
      ["안식일 치유 6", "손 마른 자 · 꼬부라진 여인(눅 13) · 수종병자(눅 14)\n베데스다 병자(요 5) · 실로암 맹인(요 9) · 가버나움 회당 축귀"],
      ["“다시는 죄를 범하지 말라”", "간음한 여인(요 8:11) · 베데스다 못가 병자(요 5:14)"],
      ["출교(쫓아냄)", "9:22 · 12:42 · 16:2 — 당시 유대 공동체의 실제 위협"],
    ];
    const right = [
      ["제6시", "수가성 여인(4장) · 십자가의 어둠 · 베드로의 환상(행 10)"],
      ["제3시", "십자가에 못 박히심(막) · 성령 강림(행 2)"],
      ["제7시", "왕의 신하 아들의 열이 내림(요 4:52)"],
      ["제9시", "예수님의 죽음 · 미문의 앉은뱅이 치유(행 3) · 고넬료의 환상(행 10)"],
      ["제10시", "안드레의 부르심(요 1:39)"],
      ["밤 사경", "예수님이 바다 위를 걸으심(요 6, 마 14)"],
    ];
    const render = (items, x, w, h0) => {
      let y = 1.68;
      items.forEach((it, i) => {
        const h = it[1].includes("\n") ? 1.0 : h0;
        panel(s, pres, { x, y, w, h, fill: C.background2, shadow: false, name: `ap-${x}-${i}` });
        s.addText(it[0], {
          x: x + 0.2, y: y + 0.08, w: w - 0.4, h: 0.3, margin: 0, isTextBox: true,
          fontSize: 13, bold: true, color: C.accent1, objectName: `ap-${x}-${i}-k`,
        });
        s.addText(it[1], {
          x: x + 0.2, y: y + 0.36, w: w - 0.4, h: h - 0.44, margin: 0, isTextBox: true,
          fontSize: 12, color: C.text1, lineSpacingMultiple: 1.14, valign: "top", objectName: `ap-${x}-${i}-v`,
        });
        y += h + 0.14;
      });
    };
    render(left, M, 6.1, 0.78);
    render(right, M + 6.33, 6.1, 0.66);
    s.addText("※ 시간은 유대식 시간 — 제6시는 정오, 제9시는 오후 3시입니다.", {
      x: M, y: 5.68, w: 6.1, h: 0.36, margin: 0, isTextBox: true,
      fontSize: 12, color: C.accent3, objectName: "note",
    });
  }

  // 부록 2 : 14장 Q&A + 제자들에게 나타나심
  {
    const s = A("CONTENT");
    s.addText("부록 ② 14장의 세 가지 질문, 그리고 부활 현현", { placeholder: "title" });
    const rows = [
      headRow(pres, ["묻는 제자", "질문", "예수님의 답"]),
      ["도마 (14:5)", "주여, 어디로 가시는지 우리가 알지 못하거니와 그 길을 어찌 알겠사옵나이까", "내가 곧 길이요 진리요 생명이니 (14:6)"],
      ["빌립 (14:8)", "주여, 아버지를 우리에게 보여 주옵소서", "나를 본 자는 아버지를 보았거늘 (14:9)\n→ 보혜사를 영원토록 함께 있게 하시리라 (14:16)"],
      ["유다 (14:22)", "주여, 어찌하여 세상에는 나타내지 아니하시고 우리에게는 나타내려 하시나이까", "보혜사 성령이 모든 것을 생각나게 하시리라 (14:26)"],
    ];
    const body = rows.map((r, i) =>
      i === 0
        ? r
        : r.map((t, j) => ({
            text: t,
            options: {
              bold: j === 0,
              color: j === 2 ? C.accent5 : C.text1,
              fill: { color: i % 2 === 0 ? "FFFFFF" : "F7F9FB" },
              valign: "middle",
            },
          }))
    );
    s.addTable(body, { ...tableOpts(pres, { colW: [1.9, 5.2, 4.73], y: 1.66, rowH: 0.9, fontSize: 13 }) });
    subhead(s, pres, { y: 5.36, tag: "cf", text: "요한복음에서 부활하신 예수님이 제자들에게 나타나신 세 장면" });
    cardGrid(
      s,
      pres,
      [
        { head: "① 안식 후 첫날 저녁", body: "20:19~23 · 성령을 받으라" },
        { head: "② 도마의 회심", body: "20:26~29 · 나의 주, 나의 하나님" },
        { head: "③ 디베랴 바닷가 153마리", body: "21:1~14 · 숯불 위의 생선과 떡" },
      ],
      { y: 5.82, h: 1.0, cols: 3, headSize: 14, bodySize: 12, pad: 0.18 }
    );
  }
};
