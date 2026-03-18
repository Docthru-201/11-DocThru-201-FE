import { style, globalStyle } from '@vanilla-extract/css';

import { vars } from './tokens.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('*', {
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
  scrollBehavior: 'smooth',
});

globalStyle('html, body', {
  minHeight: '100%',
});

globalStyle('body', {
  minHeight: '100vh',
  lineHeight: 1.5,
  textRendering: 'optimizeLegibility',
  fontFamily: vars.fontFamily.pretendard,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[800],
  backgroundColor: vars.color.white,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  wordBreak: 'keep-all',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  margin: 0,
});

globalStyle('ul, ol', {
  listStyle: 'none',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('img, video', {
  height: 'auto',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
  color: 'inherit',
});

globalStyle('textarea', {
  resize: 'vertical',
});

globalStyle('button', {
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

globalStyle('fieldset', {
  border: 'none',
});

// 모바일 기본 하이라이트 제거
globalStyle('button, [role="button"]', {
  WebkitTapHighlightColor: 'transparent',
});

// vanilla-extract는 globalStyle만 있는 파일에 대해 출력 파일을 만들지 않아
// 최소 하나의 style()을 두어야 vanilla-extract가 이 파일을 인식 가능
export const _resetScope = style({});
