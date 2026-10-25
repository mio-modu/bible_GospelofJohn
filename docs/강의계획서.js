const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, ShadingType, BorderStyle, VerticalAlign,
} = require("docx");

const F = "맑은 고딕";
const W = 9638; // 본문 폭 (A4, 여백 2cm)

const t = (text, o = {}) => new TextRun({ text, font: F, size: o.size || 19, bold: o.bold, ...o });
const p = (text, o = {}) =>
  new Paragraph({
    children: Array.isArray(text) ? text : [t(text, o)],
    spacing: { before: o.before || 0, after: o.after === undefined ? 40 : o.after, line: o.line || 240 },
    indent: o.indent,
    alignment: o.alignment,
  });

/** ◆ 머리글 */
const head = (text) =>
  new Paragraph({
    children: [t("◆ " + text, { bold: true, size: 21 })],
    spacing: { before: 170, after: 70 },
  });

const cell = (text, width, o = {}) =>
  new TableCell({
    width: { size: width, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    shading: o.headRow ? { type: ShadingType.CLEAR, fill: "EFEFEF" } : undefined,
    margins: { top: 30, bottom: 30, left: 80, right: 80 },
    children: String(text)
      .split("\u000b")
      .map(
        (line) =>
          new Paragraph({
            children: [t(line, { bold: o.headRow || o.bold, size: o.size || 18 })],
            alignment: o.align || (o.headRow ? AlignmentType.CENTER : AlignmentType.LEFT),
            spacing: { after: 0, line: 230 },
          })
      ),
  });

const table = (colWidths, rows) =>
  new Table({
    columnWidths: colWidths,
    width: { size: W, type: WidthType.DXA },
    rows: rows.map(
      (r, i) =>
        new TableRow({
          children: r.map((c, j) =>
            cell(c, colWidths[j], {
              headRow: i === 0,
              align: typeof c === "string" && (i === 0 || j !== r.length - 2 || true) ? undefined : undefined,
            })
          ),
        })
    ),
  });

// ── 강의 일정
const schedCols = [620, 1320, 3760, 1760, 2178];
const schedRows = [
  ["주", "일시", "내용", "과제", "암송 구절"],
  ["1", "10월 25일", "1과 ─ 영광을 만나기 위한 준비", "―", "1:12 / 20:31"],
  ["2", "11월 1일", "2과 ─ 영광이 드러나다", "1강 소감문", "3:5,16"],
  ["3", "11월 8일", "3과 ─ 영광을 드러내시다", "2강 소감문", "5:24 / 6:47,48"],
  ["4", "11월 15일", "4과 ─ 영광이신 예수님", "3강 소감문", "8:31,32 / 10:30"],
  ["5", "11월 22일", "5과 ─ 영광이신 하나님", "4강 소감문", "11:25,26 / 12:24"],
  ["6", "11월 29일", "6과 ─ 영광으로서의 최후 여정", "5강 소감문", "13:34,35 / 14:6"],
  ["7", "12월 6일", "7과 ─ 영광 안에 거함", "시험", "15:5"],
  ["8", "12월 13일", "8과 ─ 영광으로의 초대", "간증문", "20:28,29,31"],
];

// ── 강의 진행
const runCols = [2080, 2800, 1500, 3258];
const runRows = [
  ["시간", "내용", "진행", "비고"],
  ["5:00~5:10 (10분)", "찬양 · 대표기도", "팀장 · TL", ""],
  ["5:10~5:20 (10분)", "조별 소그룹 나눔 1", "팀장 · TL", "과제 체크 · 삶 나눔(가볍게) · 소감문 나눔"],
  ["5:20~5:55 (35분)", "강의 1", "박성은 목사", ""],
  ["5:55~6:05 (10분)", "휴식", "", ""],
  ["6:05~6:27 (22분)", "조별 소그룹 나눔 2", "팀장 · TL", "전체 나눔"],
  ["6:27~6:57 (30분)", "강의 2", "박성은 목사", ""],
  ["6:57~7:00 (3분)", "광고 및 마무리", "박성은 목사", ""],
];

// ── 교재
const bookCols = [1800, 7838];
const bookRows = [
  ["주교재", "요한복음 (Bee Korea)"],
  ["참고도서", "1) 요한신학 렌즈로 본 요한복음 (김동수 / 솔로몬)\u000b2) 요한복음 강해 1~5권 (하용조 / 두란노)"],
];
const bookTable = new Table({
  columnWidths: bookCols,
  width: { size: W, type: WidthType.DXA },
  rows: bookRows.map(
    (r) =>
      new TableRow({
        children: [
          cell(r[0], bookCols[0], { bold: true, align: AlignmentType.CENTER }),
          new TableCell({
            width: { size: bookCols[1], type: WidthType.DXA },
            verticalAlign: VerticalAlign.CENTER,
            margins: { top: 30, bottom: 30, left: 80, right: 80 },
            children: r[1]
              .split("\u000b")
              .map((line) => new Paragraph({ children: [t(line, { size: 18 })], spacing: { after: 0, line: 230 } })),
          }),
        ],
      })
  ),
});

const num = (n, text) => p([t(`${n}) `, { size: 19 }), t(text, { size: 19 })], { indent: { left: 280, hanging: 230 } });

const doc = new Document({
  styles: { default: { document: { run: { font: F, size: 19 } } } },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1000, right: 1134, bottom: 900, left: 1134 },
        },
      },
      children: [
        new Paragraph({
          children: [t("OBC(요한복음) 강의 계획서", { bold: true, size: 32 })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 300 },
        }),

        p([t("◆ 강의 기간 : ", { bold: true, size: 21 }), t("2026년 10월 25일 ~ 12월 13일 / 매주 일요일 오후 5시~7시 (120분)", { size: 21 })]),
        p([t("◆ 담당 강사 : ", { bold: true, size: 21 }), t("박성은 목사 (010-4490-9929)  /  팀장 : 이희민 (010-5401-0140)", { size: 21 })]),

        head("강의 목적"),
        num(1, "요한복음을 통해 예수님의 삶과 성품과 사역을 공부한다."),
        num(2, "배운 것을 적용함으로써 그분의 영광에 우리 자신이 다가가며, 또한 다른 사람도 그 영광에 이르도록 돕는다."),

        head("강의 일정"),
        table(schedCols, schedRows),

        head("강의 진행"),
        table(runCols, runRows),

        head("주교재 및 참고도서"),
        bookTable,

        head("수료 기준"),
        num(1, "소감문 : 매주 제출 (총 4주간)"),
        num(2, "간증문 : 8주차 강의까지 제출"),
        num(3, "성적 산출 : 출석(60%), 과제(30%), 시험(10%)"),
        num(4, "성적 등급 : 1등급(90점 이상), 2등급(80점 이상), 3등급(70점 이상), 60점 미만 탈락"),
        num(5, "결석 2회까지만 허용 (지각 20분 이상 2회면 결석 1회로 간주)"),
        num(6, "권장 : 매주 요한복음 일독, 성구 암송, 다음 과 예습"),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((b) => {
  fs.writeFileSync("/home/user/bible_GospelofJohn/docs/OBC_요한복음_강의계획서.docx", b);
  console.log("생성 완료");
});
