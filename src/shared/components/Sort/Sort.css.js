import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.ts';
import { breakpoint } from '@/styles/breakpoints.css.ts';

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
