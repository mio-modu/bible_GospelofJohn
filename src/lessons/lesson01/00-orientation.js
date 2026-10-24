/** 제1강 · PART 0 오리엔테이션 (6장) */
const { LAYOUT } = require("../../theme");
const { cardGrid, keyline, subhead, flow, panel, tableOpts, headRow } = require("../../components");

const SECTION = "오리엔테이션";

module.exports = function orientation(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;
  pres.addSection({ title: SECTION });
  const S = (masterName) => pres.addSlide({ masterName, sectionTitle: SECTION });

  // ── 1. 표지
  {
    const s = S("COVER");
    s.addText("OBC 요한복음 · 제 1 강", { placeholder: "kicker" });
    s.addText("영광을 만나기 위한 준비", { placeholder: "title" });
    s.addText(
      [
        { text: "요한복음 1:1~18", options: { bold: true, breakLine: true } },
        { text: "BEE Korea 교재 제1과   |   서누리 성인공동체 · 드리머스 청년공동체", options: { fontSize: 17, breakLine: true } },
        { text: "박성은 목사", options: { fontSize: 17, color: C.accent1, bold: true } },
      ],
      { placeholder: "body" }
    );
    s.addText("사랑하고 축복합니다", {
      x: 1.05, y: 6.0, w: 8, h: 0.5, margin: 0, isTextBox: true,
      fontSize: 22, bold: true, color: C.accent1, objectName: "greeting",
    });
    s.addNotes("인사 → 과정 안내 → 소그룹 나눔(소개·조장선출) → 1과 강의 순서로 진행합니다.");
  }

  // ── 2. 오늘의 흐름
  {
    const s = S("CONTENT");
    s.addText("오늘 우리가 함께할 길", { placeholder: "title" });
    flow(
      s,
      pres,
      [
        { head: "오리엔테이션", body: "과정 · 수료 기준" },
        { head: "소그룹 나눔", body: "소개 · 조장 선출" },
        { head: "요한복음 분석", body: "저자 · 구조\n완전수 7" },
        { head: "1과 전반", body: "예수님에 대한 증언\n질문 1~21" },
        { head: "1과 후반", body: "하나님에 대한 증언\n질문 22~41" },
      ],
      { y: 1.9, h: 2.1, headSize: 20, bodySize: 16 }
    );
    keyline(s, pres, {
      y: 4.5, h: 1.6,
      text: "오늘의 한 문장\n“요한복음은 예수님이 누구신지를 증언하는 복음서입니다”",
      fontSize: 26,
    });
    s.addNotes("1주차는 오리엔테이션이 있어 소그룹 나눔을 강의보다 앞에 둡니다. 2주차부터는 강의1 → 나눔 → 강의2 순서입니다.");
  }

  // ── 3. 강의 방향
  {
    const s = S("CONTENT");
    s.addText("이 강의가 가는 방향", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "①", head: "한 질문으로 끝까지", body: "“예수님은 누구신가?”\n\n요한복음은 예수님의\n신성(神性)을 증언한다." },
        { tag: "②", head: "‘영광’ 한 단어로 꿰기", body: "준비 → 드러남 → 드러내심\n→ 영광이신 예수님 · 하나님\n→ 최후 여정 → 거함 → 초대" },
        { tag: "③", head: "매주 세 단계", body: "관찰 — 본문이 말하는 것\n분석 — 구조 · 배경 · 단어\n적용 — 나에게 요구하는 것" },
      ],
      { y: 1.78, h: 3.5, cols: 3, headSize: 22, bodySize: 17 }
    );
    keyline(s, pres, { y: 5.6, h: 1.0, text: "지식이 아니라 만남이 목표입니다  ·  요한복음 20:31", fontSize: 24 });
  }

  // ── 4. 8주 과정 안내
  {
    const s = S("TABLE");
    s.addText("8주 과정 안내", { placeholder: "title" });
    const rows = [
      headRow(pres, ["주차", "단원", "본문", "과제"]),
      ["1주", "제1과  영광을 만나기 위한 준비", "요 1:1~18", "—"],
      ["2주", "제2과  영광이 드러나다", "요 1:19~4:42", "1강 소감문"],
      ["3주", "제3과  영광을 드러내시다", "요 4:43~6장", "2강 소감문"],
      ["4주", "제4과  영광이신 예수님", "요 7~10장", "3강 소감문"],
      ["5주", "제5과  영광이신 하나님", "요 11~12장", "4강 소감문"],
      ["6주", "제6과  영광으로의 최후 여정", "요 13~14장", "5강 소감문"],
      ["7주", "제7과  영광 안에 거함", "요 15~17장", "시험"],
      ["8주", "제8과  영광으로의 초대", "요 18~21장", "간증문"],
    ];
    const body = rows.map((r, i) =>
      i === 0
        ? r
        : r.map((t, j) => ({
            text: t,
            options: {
              align: j === 0 || j === 3 ? "center" : "left",
              bold: j === 1,
              color: j === 1 ? C.text1 : C.accent3,
              fill: { color: i % 2 === 0 ? "FFFFFF" : "F7F9FB" },
            },
          }))
    );
    s.addTable(body, { ...tableOpts(pres, { colW: [1.1, 5.4, 2.9, 2.43], y: 1.68, rowH: 0.52, fontSize: 16 }) });
    s.addText("※ 날짜는 개강일에 맞춰 기입해 주세요.", {
      x: M, y: 6.4, w: LAYOUT.CONTENT_W, h: 0.38, margin: 0, isTextBox: true,
      fontSize: 14, color: C.accent3, objectName: "note",
    });
  }

  // ── 5. 수료 기준 + 진행 순서
  {
    const s = S("CONTENT");
    s.addText("수료 기준과 진행 순서", { placeholder: "title" });
    subhead(s, pres, { y: 1.68, w: 6.1, tag: "수료", text: "수료 기준" });
    cardGrid(
      s,
      pres,
      [
        { head: "소감문", body: "매주 제출 (총 4주간)" },
        { head: "간증문", body: "8주차까지 제출" },
        { head: "성적", body: "출석 60% · 과제 30%\n시험 10%" },
        { head: "출석", body: "결석 2회까지 허용\n지각 20분 2회 = 결석 1회" },
      ],
      { x: M, y: 2.3, w: 6.1, h: 3.8, cols: 2, headSize: 20, bodySize: 16 }
    );
    keyline(s, pres, { x: M, y: 6.22, w: 6.1, h: 0.6, text: "권장 숙제 · 암송 · 일독 · 예습", fontSize: 17 });

    subhead(s, pres, { x: M + 6.33, y: 1.68, w: 6.1, tag: "진행", text: "매주 진행 순서 (PM 8:00~10:00)" });
    const rows = [
      ["8:00", "찬양 · 대표기도"],
      ["8:10", "강의 1"],
      ["8:55", "휴식"],
      ["9:05", "조별 소그룹 나눔"],
      ["9:27", "강의 2"],
      ["9:57", "광고 및 마무리"],
    ];
    let y = 2.3;
    rows.forEach((r, i) => {
      panel(s, pres, { x: M + 6.33, y, w: 6.1, h: 0.66, fill: i % 2 ? C.background1 : C.background2, shadow: false, name: `tr-${i}`, lineColor: i % 2 ? "EDF1F4" : undefined });
      s.addText(r[0], {
        x: M + 6.55, y, w: 1.3, h: 0.66, margin: 0, isTextBox: true,
        fontSize: 18, bold: true, color: C.accent1, valign: "middle", objectName: `tr-${i}-t`,
      });
      s.addText(r[1], {
        x: M + 7.95, y, w: 4.3, h: 0.66, margin: 0, isTextBox: true,
        fontSize: 18, color: C.text1, valign: "middle", objectName: `tr-${i}-d`,
      });
      y += 0.72;
    });
  }

  // ── 6. 소그룹 나눔 Ⅰ
  {
    const s = S("SHARE");
    s.addText("소그룹 나눔 Ⅰ", { placeholder: "kicker" });
    s.addText("서로를 소개하고, 조장을 세웁니다", { placeholder: "title" });
    cardGrid(
      s,
      pres,
      [
        { tag: "1", head: "자기소개", body: "이름 · 소속 공동체\n요즘 나의 한 주\n한 문장으로 나를 소개한다면" },
        { tag: "2", head: "수강 계기", body: "왜 이 과정을 신청했나요?\n여덟 주 동안\n기대하는 것 한 가지" },
        { tag: "3", head: "조장 선출", body: "출석 · 과제 체크\n단체방 운영\n결석자 연락" },
      ],
      { y: 2.6, h: 3.2, cols: 3, headSize: 24, bodySize: 18, dark: true, fill: C.text2 }
    );
    s.addText("1인 2분 이내 · 전체 22분 · 마지막 3분에 조장 확정", {
      x: M, y: 6.0, w: LAYOUT.CONTENT_W, h: 0.42, margin: 0, isTextBox: true,
      fontSize: 16, bold: true, color: C.accent1, objectName: "guide",
    });
    s.addNotes("조장은 자원을 먼저 받고, 없으면 추천으로 세웁니다. 조장 연락처를 꼭 확보하세요.");
  }
};
