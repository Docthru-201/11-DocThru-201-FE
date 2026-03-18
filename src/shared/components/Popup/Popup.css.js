import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.ts';
import { breakpoint } from '@/styles/breakpoints.css.ts';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: vars.zIndex.dropdown,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: `rgba(0, 0, 0, ${vars.opacity.overlay})`,
  padding: vars.space.xl,
  boxSizing: 'border-box',
});

export const panel = style({
  position: 'relative',
  width: '327px',
  minHeight: '220px',
  padding: '40px 24px 28px',
  backgroundColor: vars.color.white,
  border: `2px solid ${vars.color.gray[800]}`,
  borderRadius: vars.radius.md,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  '@media': {
    [breakpoint.md]: {
      width: '100%',
      maxWidth: '540px',
      minHeight: '250px',
      padding: '48px 24px 32px',
    },
  },
});

export const message = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: vars.space.xl,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[800],
  textAlign: 'center',
});

export const buttonWrap = style({
  display: 'flex',
  justifyContent: 'center',
});

export const confirmButton = style({
  width: '120px',
  height: '40px',
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.gray[800],
  color: vars.color.white,
  border: 'none',
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  cursor: 'pointer',
});
