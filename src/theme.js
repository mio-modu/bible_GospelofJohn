/**
 * 요한복음 OBC 강의안 - 디자인 시스템
 *
 * 팔레트는 강(講)마다 고를 수 있다.
 *   glory — 1·2강. 먹색(ink) + 금색. 흰 배경 위에 어두운 슬라이드를 띄엄띄엄.
 *   lumen — 3강.  본(bone) + 브라스 + 세이지. 전체를 한 단계 밝게 올리고,
 *                 어두운 면도 먹색 대신 따뜻한 차콜로 낮춰 담백하게.
 *
 * 색은 전부 이 파일에서만 관리한다. useTheme() 으로 팔레트를 바꾸면 전체 덱이 바뀐다.
 */

const FONT = "맑은 고딕";

const THEMES = {
  glory: {
    name: "Glory - Gospel of John",
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
    rule: "E4E9EE", // 밝은 배경 위 가로 실선
    ruleDark: "2A3F55", // 어두운 배경 위 가로 실선
    shadow: "0E1826",
  },
  lumen: {
    name: "Lumen - Gospel of John",
    colors: {
      dk1: "2E2B26", // 본문 - 따뜻한 먹색
      lt1: "FBF9F4", // 배경 - 본(bone)
      dk2: "3D3831", // 어두운 슬라이드 배경 - 따뜻한 차콜
      lt2: "F1ECE2", // 연한 패널 - 그레이지
      accent1: "9B7B3B", // 브라스 - 강조 1순위
      accent2: "3F4A42", // 딥 세이지 - 나눔 슬라이드
      accent3: "7B7366", // 웜 그레이 - 보조 설명
      accent4: "B8AFA0", // 캡션 / 푸터
      accent5: "B18E4C", // 라이트 브라스 - 어두운 면의 큰 숫자
      accent6: "E7DCC6", // 크림 - 어두운 배경 위 본문
      hlink: "7A6A4A",
      folHlink: "9B9183",
    },
    rule: "E6DFD3",
    ruleDark: "57503F",
    shadow: "3D3831",
  },
  ink: {
    name: "Ink - Gospel of John",
    colors: {
      dk1: "1B232E", lt1: "FAFBFC", dk2: "141C27", lt2: "EDF0F4",
      accent1: "B18E4C", accent2: "1F3A52", accent3: "64768A", accent4: "AFB9C3",
      accent5: "C2A05A", accent6: "E3D2A8", hlink: "1F3A52", folHlink: "64768A",
    },
    rule: "E3E8ED", ruleDark: "2B3B4D", shadow: "141C27",
  },
  slate: {
    name: "Slate - Gospel of John",
    colors: {
      dk1: "1E2226", // 본문 - 딥 그래파이트
      lt1: "FBFBFA", // 배경 - 뉴트럴 오프화이트
      dk2: "23282D", // 어두운 슬라이드 - 차콜
      lt2: "EFF1F2", // 패널 - 쿨 라이트 그레이
      accent1: "9A8046", // 샴페인 골드 - 강조 1순위
      accent2: "2B3740", // 나눔 슬라이드 - 차콜보다 살짝 푸른 쪽
      accent3: "6E767E", // 쿨 그레이 - 보조 설명
      accent4: "B2B8BE", // 캡션 / 푸터
      accent5: "C0A463", // 라이트 샴페인 - 어두운 면의 큰 숫자
      accent6: "E8E2D3", // 크림 - 어두운 배경 위 본문
      hlink: "2B3740", folHlink: "6E767E",
    },
    rule: "E4E7E9", ruleDark: "3B444C", shadow: "23282D",
  },
  forest: {
    name: "Forest - Gospel of John",
    colors: {
      dk1: "1F2621", lt1: "FAFAF7", dk2: "22312A", lt2: "EDF0EC",
      accent1: "9C833F", accent2: "2C4036", accent3: "6B7770", accent4: "AFB6B0",
      accent5: "B99F57", accent6: "E2E6D7", hlink: "2C4036", folHlink: "6B7770",
    },
    rule: "E2E7E1", ruleDark: "3A4C42", shadow: "22312A",
  },
};

const THEME = {
  name: THEMES.glory.name,
  headFontFace: FONT,
  bodyFontFace: FONT,
  colors: { ...THEMES.glory.colors },
};

/** 팔레트 교체. THEME·HEX 객체를 그대로 두고 값만 갈아끼워 참조가 살아 있게 한다. */
function useTheme(key = "glory") {
  const t = THEMES[key];
  if (!t) throw new Error(`알 수 없는 팔레트: ${key} (가능: ${Object.keys(THEMES).join(", ")})`);
  THEME.name = t.name;
  Object.keys(THEME.colors).forEach((k) => delete THEME.colors[k]);
  Object.assign(THEME.colors, t.colors, { rule: t.rule, ruleDark: t.ruleDark, shadow: t.shadow });
  return THEME;
}
useTheme("glory");

// hex 전용 옵션(shadow.color, gridLine.color, chartColors 등)에 쓰는 값.
// 스킴 컬러를 넣으면 파일이 깨지므로 반드시 이쪽을 쓴다.
const HEX = THEME.colors;

const SHADOW = () => ({ type: "outer", color: HEX.shadow, opacity: 0.1, blur: 10, offset: 2, angle: 90 });

const LAYOUT = {
  W: 13.333,
  H: 7.5,
  MARGIN: 0.75,
  TITLE_Y: 0.46,
  TITLE_H: 0.92,
  BODY_Y: 1.62, // 본문 시작 y - 모든 콘텐츠 슬라이드 공통
  BODY_BOTTOM: 6.86, // 본문이 넘어가면 안 되는 하한선
};
LAYOUT.CONTENT_W = LAYOUT.W - LAYOUT.MARGIN * 2;
LAYOUT.BODY_H = LAYOUT.BODY_BOTTOM - LAYOUT.BODY_Y;

const FOOTER_TEXT = "요한복음 OBC · 제1강 영광을 만나기 위한 준비";

/** 레이아웃(= PowerPoint 슬라이드 레이아웃) 정의 */
const HEX_FOOT = { dark: THEME.colors.accent3, light: THEME.colors.accent4 };

function defineLayouts(pres, opts = {}) {
  const TITLE = opts.titleSize || 36; // 2강처럼 더 굵직하게 가려면 키운다
  const FOOT = opts.footer || FOOTER_TEXT;
  const C = pres.SchemeColor;
  const M = LAYOUT.MARGIN;

  const slideNum = (dark) => ({ x: 12.0, y: 6.97, w: 0.58, h: 0.3, fontSize: 11, align: "right", color: dark ? HEX_FOOT.dark : HEX_FOOT.light, fontFace: THEME.bodyFontFace });

  const footer = (dark) => [
    {
      text: {
        text: FOOT,
        options: {
          x: M, y: 6.97, w: 8, h: 0.3, margin: 0, isTextBox: true, fontFace: FONT,
          fontSize: 11, color: dark ? C.accent3 : C.accent4, valign: "middle",
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
            fontSize: 17, bold: true, charSpacing: 4, color: C.accent1,
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "title", type: "title",
            fontFace: FONT, x: 1.05, y: 2.62, w: 11, h: 1.75, margin: 0,
            fontSize: 54, bold: true, color: C.background1, valign: "top", align: "left",
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "body", type: "body",
            fontFace: FONT, x: 1.1, y: 4.42, w: 10.5, h: 1.5, margin: 0,
            fontSize: 20, color: C.accent6, lineSpacingMultiple: 1.35,
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
            fontSize: 46, bold: true, color: C.background1, valign: "top", align: "left",
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "body", type: "body",
            fontFace: FONT, x: 1.1, y: 4.6, w: 10, h: 0.9, margin: 0,
            fontSize: 19, color: C.accent6,
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
            margin: 0, fontSize: TITLE, bold: true, color: C.text1, valign: "middle", align: "left",
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "body", type: "body",
            fontFace: FONT, x: M, y: LAYOUT.BODY_Y, w: LAYOUT.CONTENT_W, h: LAYOUT.BODY_H,
            margin: 0, fontSize: 18, color: C.text1,
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
            margin: 0, fontSize: TITLE, bold: true, color: C.background1, valign: "middle", align: "left",
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "body", type: "body",
            fontFace: FONT, x: M, y: LAYOUT.BODY_Y, w: LAYOUT.CONTENT_W, h: LAYOUT.BODY_H,
            margin: 0, fontSize: 18, color: C.accent6,
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
            fontSize: 16, bold: true, charSpacing: 3, color: C.accent6,
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "title", type: "title",
            fontFace: FONT, x: M, y: 1.18, w: LAYOUT.CONTENT_W, h: 0.95,
            margin: 0, fontSize: 42, bold: true, color: C.background1, valign: "middle", align: "left",
          },
          text: "",
        },
      },
      {
        placeholder: {
          options: {
            name: "body", type: "body",
            fontFace: FONT, x: M, y: 2.35, w: LAYOUT.CONTENT_W, h: 4.3,
            margin: 0, fontSize: 20, color: C.background1,
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
            margin: 0, fontSize: TITLE, bold: true, color: C.text1, valign: "middle", align: "left",
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
/**
 * 발표자 노트는 서식 없는 평문이다. 마크다운 강조 기호를 쓰면 화면에 **처럼 그대로 찍힌다.
 * 글을 쓰다 보면 습관처럼 붙으므로 넣는 길목에서 한 번 걸러 낸다.
 */
function plainText(s) {
  return String(s)
    .replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g, "$2") // **굵게**, __굵게__
    .replace(/`([^`]+)`/g, "$1"); // `코드`
}

function enforceFont(pres, font = FONT) {
  const addSlide = pres.addSlide.bind(pres);
  pres.addSlide = (opts) => {
    const slide = addSlide(opts);
    const addText = slide.addText.bind(slide);
    const addTable = slide.addTable.bind(slide);
    const addNotes = slide.addNotes.bind(slide);
    slide.addNotes = (text) => addNotes(plainText(text));
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

module.exports = { FONT, THEME, THEMES, HEX, LAYOUT, SHADOW, FOOTER_TEXT, useTheme, defineLayouts, enforceFont, plainText };
