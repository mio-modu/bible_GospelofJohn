/**
 * 요한복음 OBC 강의안 - 디자인 시스템
 *
 * 테마 컨셉: "영광(Glory)"
 *   요한복음의 핵심 단어인 '영광'과 '빛'을 먹색(ink) 배경 + 금색(gold) 포인트로 표현.
 *   흰 배경이 전체의 70%를 지배하고, 먹색은 섹션 전환/인용/나눔에만 사용한다.
 *
 * 색은 전부 이 파일에서만 관리한다. 여기 값을 바꾸면 전체 덱이 바뀐다.
 */

const FONT = "맑은 고딕";

const THEME = {
  name: "Glory - Gospel of John",
  headFontFace: FONT,
  bodyFontFace: FONT,
  colors: {
    dk1: "17202B", // 본문 먹색 (text1)
    lt1: "FFFFFF", // 흰 배경 (background1)
    dk2: "0E1826", // 딥 먹색 - 어두운 슬라이드 배경 (text2)
    lt2: "F1F4F7", // 연한 패널 (background2)
    accent1: "C19A4B", // 금색 - 강조 1순위
    accent2: "1F3A52", // 네이비 - 나눔 슬라이드
    accent3: "5E7488", // 슬레이트 - 보조 설명
    accent4: "AEB9C4", // 밝은 회색 - 캡션/푸터
    accent5: "9A7628", // 딥 골드
    accent6: "E0CA9A", // 페일 골드 - 어두운 배경 위 본문
    hlink: "1F3A52",
    folHlink: "5E7488",
  },
};

// hex 전용 옵션(shadow.color, gridLine.color, chartColors 등)에 쓰는 값.
// 스킴 컬러를 넣으면 파일이 깨지므로 반드시 이쪽을 쓴다.
const HEX = THEME.colors;

const SHADOW = () => ({ type: "outer", color: "0E1826", opacity: 0.1, blur: 10, offset: 2, angle: 90 });

const LAYOUT = {
  W: 13.333,
  H: 7.5,
  MARGIN: 0.75,
  TITLE_Y: 0.46,
  TITLE_H: 0.82,
  BODY_Y: 1.56, // 본문 시작 y - 모든 콘텐츠 슬라이드 공통
  BODY_BOTTOM: 6.86, // 본문이 넘어가면 안 되는 하한선
};
LAYOUT.CONTENT_W = LAYOUT.W - LAYOUT.MARGIN * 2;
LAYOUT.BODY_H = LAYOUT.BODY_BOTTOM - LAYOUT.BODY_Y;

const FOOTER_TEXT = "요한복음 OBC · 제1강 영광을 만나기 위한 준비";

/** 레이아웃(= PowerPoint 슬라이드 레이아웃) 정의 */
const HEX_FOOT = { dark: THEME.colors.accent3, light: THEME.colors.accent4 };

function defineLayouts(pres) {
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;

  const slideNum = (dark) => ({ x: 12.0, y: 6.97, w: 0.58, h: 0.3, fontSize: 10, align: "right", color: dark ? HEX_FOOT.dark : HEX_FOOT.light, fontFace: THEME.bodyFontFace });

  const footer = (dark) => [
    {
      text: {
        text: FOOTER_TEXT,
        options: {
          x: M, y: 6.97, w: 8, h: 0.3, margin: 0, isTextBox: true, fontFace: FONT,
          fontSize: 10, color: dark ? C.accent3 : C.accent4, valign: "middle",
        },
      },
    },
  ];

  // 1. 표지 / 마지막 슬라이드
  pres.defineSlideMaster({
    title: "COVER",
    background: { color: C.text2 },
    objects: [
      {
        placeholder: {
          options: {
            name: "kicker", type: "body",
            fontFace: FONT, x: 1.1, y: 2.12, w: 10, h: 0.4, margin: 0,
            fontSize: 15, bold: true, charSpacing: 4, color: C.accent1,
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "title", type: "title",
            fontFace: FONT, x: 1.05, y: 2.62, w: 11, h: 1.75, margin: 0,
            fontSize: 56, bold: true, color: C.background1, valign: "top", align: "left",
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "body", type: "body",
            fontFace: FONT, x: 1.1, y: 4.42, w: 10.5, h: 1.5, margin: 0,
            fontSize: 18, color: C.accent6, lineSpacingMultiple: 1.35,
          },
          text: "",
        },
      },
    ],
  });

  // 2. 섹션 구분
  pres.defineSlideMaster({
    title: "DIVIDER",
    background: { color: C.text2 },
    objects: [
      {
        placeholder: {
          options: {
            name: "num", type: "body",
            fontFace: FONT, x: 1.05, y: 2.2, w: 2.2, h: 1.1, margin: 0,
            fontSize: 72, bold: true, color: C.accent5, align: "left",
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "title", type: "title",
            fontFace: FONT, x: 1.05, y: 3.42, w: 10.8, h: 1.1, margin: 0,
            fontSize: 42, bold: true, color: C.background1, valign: "top", align: "left",
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "body", type: "body",
            fontFace: FONT, x: 1.1, y: 4.6, w: 10, h: 0.9, margin: 0,
            fontSize: 17, color: C.accent6,
          },
          text: "",
        },
      },
    ],
  });

  // 3. 기본 콘텐츠 (흰 배경) - 대부분의 슬라이드가 이 레이아웃 위에 올라간다
  pres.defineSlideMaster({
    title: "CONTENT",
    background: { color: C.background1 },
    objects: [
      {
        placeholder: {
          options: {
            name: "title", type: "title",
            fontFace: FONT, x: M, y: LAYOUT.TITLE_Y, w: LAYOUT.CONTENT_W, h: LAYOUT.TITLE_H,
            margin: 0, fontSize: 32, bold: true, color: C.text1, valign: "middle", align: "left",
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "body", type: "body",
            fontFace: FONT, x: M, y: LAYOUT.BODY_Y, w: LAYOUT.CONTENT_W, h: LAYOUT.BODY_H,
            margin: 0, fontSize: 16, color: C.text1,
          },
          text: "",
        },
      },
      ...footer(false),
    ],
    slideNumber: slideNum(false),
  });

  // 4. 어두운 콘텐츠 (성경 본문 인용 / 결론)
  pres.defineSlideMaster({
    title: "CONTENT_DARK",
    background: { color: C.text2 },
    objects: [
      {
        placeholder: {
          options: {
            name: "title", type: "title",
            fontFace: FONT, x: M, y: LAYOUT.TITLE_Y, w: LAYOUT.CONTENT_W, h: LAYOUT.TITLE_H,
            margin: 0, fontSize: 32, bold: true, color: C.background1, valign: "middle", align: "left",
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "body", type: "body",
            fontFace: FONT, x: M, y: LAYOUT.BODY_Y, w: LAYOUT.CONTENT_W, h: LAYOUT.BODY_H,
            margin: 0, fontSize: 16, color: C.accent6,
          },
          text: "",
        },
      },
      ...footer(true),
    ],
    slideNumber: slideNum(true),
  });

  // 5. 소그룹 나눔 (네이비 배경으로 '멈추고 이야기하는 시간'임을 표시)
  pres.defineSlideMaster({
    title: "SHARE",
    background: { color: C.accent2 },
    objects: [
      {
        placeholder: {
          options: {
            name: "kicker", type: "body",
            fontFace: FONT, x: M, y: 0.72, w: 8, h: 0.4, margin: 0,
            fontSize: 14, bold: true, charSpacing: 3, color: C.accent6,
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "title", type: "title",
            fontFace: FONT, x: M, y: 1.18, w: LAYOUT.CONTENT_W, h: 0.95,
            margin: 0, fontSize: 38, bold: true, color: C.background1, valign: "middle", align: "left",
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "body", type: "body",
            fontFace: FONT, x: M, y: 2.35, w: LAYOUT.CONTENT_W, h: 4.3,
            margin: 0, fontSize: 18, color: C.background1,
          },
          text: "",
        },
      },
      ...footer(true),
    ],
    slideNumber: slideNum(true),
  });

  // 6. 표 전용
  pres.defineSlideMaster({
    title: "TABLE",
    background: { color: C.background1 },
    margin: [0.4, 0.75, 0.75, 0.75],
    objects: [
      {
        placeholder: {
          options: {
            name: "title", type: "title",
            fontFace: FONT, x: M, y: LAYOUT.TITLE_Y, w: LAYOUT.CONTENT_W, h: LAYOUT.TITLE_H,
            margin: 0, fontSize: 32, bold: true, color: C.text1, valign: "middle", align: "left",
          },
          text: "",
        },
      },
      ...footer(false),
    ],
    slideNumber: slideNum(false),
  });
}

/**
 * pptxgenjs 는 "모든 글자를 이 폰트로" 같은 전역 설정이 없다.
 * addSlide 를 감싸서 addText/addTable 에 fontFace 를 기본값으로 넣어,
 * 테마 상속에 기대지 않고 런(run)마다 맑은 고딕이 직접 박히게 한다.
 */
function enforceFont(pres, font = FONT) {
  const addSlide = pres.addSlide.bind(pres);
  pres.addSlide = (opts) => {
    const slide = addSlide(opts);
    const addText = slide.addText.bind(slide);
    const addTable = slide.addTable.bind(slide);
    slide.addText = (text, o = {}) => {
      const runs = Array.isArray(text)
        ? text.map((r) => (r && typeof r === "object" && r.text !== undefined ? { ...r, options: { fontFace: font, ...(r.options || {}) } } : r))
        : text;
      return addText(runs, { fontFace: font, ...o });
    };
    slide.addTable = (rows, o = {}) => {
      const body = rows.map((row) =>
        row.map((c) =>
          c && typeof c === "object" && c.text !== undefined
            ? { ...c, options: { fontFace: font, ...(c.options || {}) } }
            : { text: String(c), options: { fontFace: font } }
        )
      );
      return addTable(body, { fontFace: font, ...o });
    };
    return slide;
  };
}

module.exports = { FONT, THEME, HEX, LAYOUT, SHADOW, FOOTER_TEXT, defineLayouts, enforceFont };
