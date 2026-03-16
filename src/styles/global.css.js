import { globalStyle } from '@vanilla-extract/css';

import { vars } from './tokens.css';

globalStyle('html', {
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  fontFamily: vars.fontFamily.pretendard,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[800],
  backgroundColor: vars.color.white,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  wordBreak: 'keep-all',
});

/* 기본 포커스 스타일
   컴포넌트에서 개별 포커스 스타일을 덮어써도 됨 */
globalStyle(':focus-visible', {
  outline: `2px solid ${vars.color.gray[400]}`,
  outlineOffset: '2px',
});

/* placeholder */
globalStyle('input::placeholder, textarea::placeholder', {
  color: vars.color.gray[400],
});

/* hr */
globalStyle('hr', {
  border: 0,
  borderTop: `1px solid ${vars.color.gray[200]}`,
});

/* 선택(드래그) 영역 스타일 */
globalStyle('::selection', {
  backgroundColor: vars.color.gray[200],
  color: vars.color.gray[800],
});

/* 스크롤바 (선택 사항, Webkit) */
globalStyle('::-webkit-scrollbar', {
  width: vars.space.sm,
  height: vars.space.sm,
});

globalStyle('::-webkit-scrollbar-track', {
  backgroundColor: vars.color.gray[100],
  borderRadius: vars.radius.sm,
});

globalStyle('::-webkit-scrollbar-thumb', {
  backgroundColor: vars.color.gray[300],
  borderRadius: vars.radius.sm,
});

globalStyle('::-webkit-scrollbar-thumb:hover', {
  backgroundColor: vars.color.gray[400],
});
