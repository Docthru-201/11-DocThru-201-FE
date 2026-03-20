import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.js';

export const root = style({
  position: 'relative',
  width: '100%',
  // maxWidth: '375px',  //챌린저 관리에서 크기 이슈 발생하여 해제하였음
});

export const inputWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  height: '40px',
  padding: `${vars.space.sm} ${vars.space.sm} ${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.full,
  boxSizing: 'border-box',
});

export const iconWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const input = style({
  flex: 1,
  minWidth: 0,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[900],
  selectors: {
    '&::placeholder': {
      color: vars.color.gray[400],
    },
  },
});
