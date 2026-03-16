import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('*', {
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
});

globalStyle('html, body', {
  minHeight: '100%',
});

globalStyle('body', {
  minHeight: '100vh',
  lineHeight: 1.5,
  textRendering: 'optimizeLegibility',
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

/* 모바일 기본 하이라이트 제거 */
globalStyle('button, [role="button"]', {
  WebkitTapHighlightColor: 'transparent',
});