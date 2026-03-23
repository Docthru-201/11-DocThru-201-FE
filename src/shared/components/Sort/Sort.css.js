import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';
import { breakpoint } from '@/styles/breakpoints.css';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '170px',
  padding: `${vars.space.sm} ${vars.space.sm} ${vars.space.sm} 10px`,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[300]}`,
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.regular,
  cursor: 'pointer',
  boxSizing: 'border-box',
  '@media': {
    [breakpoint.md]: {
      padding: `${vars.space.sm} ${vars.space.sm} ${vars.space.sm} ${vars.space.md}`,
      fontSize: vars.fontSize.base,
    },
  },
});

export const label = styleVariants({
  default: {
    color: vars.color.gray[400],
  },
  active: {
    color: vars.color.gray[800],
  },
});

export const iconWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const rootFilter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '112px',
  height: '40px',
  padding: `8px 12px`,
  margin: 0,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[300]}`,
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  fontFamily: vars.fontFamily.pretendard,
  cursor: 'pointer',
  boxSizing: 'border-box',
  outline: 'none',
  selectors: {
    '&:focus-visible': {
      boxShadow: `0 0 0 2px ${vars.color.gray[400]}`,
    },
  },
});

export const rootFilterActive = style({
  borderColor: vars.color.gray[800],
});

export const filterIconWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});
