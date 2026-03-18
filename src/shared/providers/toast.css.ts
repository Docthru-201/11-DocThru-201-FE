import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('.Toastify__toast', {
  background: '#111111',
  color: '#ffffff',
});

globalStyle('.Toastify__progress-bar', {
  background: '#ffc117',
});

// globalStyle만 있는 파일이 번들에서 누락되는 케이스 방지용
export const _toastStyleScope = style({});
