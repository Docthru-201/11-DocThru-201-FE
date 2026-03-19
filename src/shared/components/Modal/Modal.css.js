import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.js';
import { breakpoint } from '@/styles/breakpoints.css.js';

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
  width: '100%',
  maxWidth: '327px',
  backgroundColor: vars.color.white,
  border: `2px solid ${vars.color.gray[800]}`,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.sm,
  maxHeight: '90vh',
  overflow: 'auto',
  '@media': {
    [breakpoint.md]: {
      maxWidth: '496px',
    },
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space.xl} ${vars.space.xl} 0`,
});

export const title = style({
  margin: 0,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
  lineHeight: '26px',
  color: vars.color.gray[800],
});

export const closeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
});

export const body = styleVariants({
  default: {
    padding: vars.space.xl,
  },
  centered: {
    padding: vars.space.xl,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: vars.space.xl,
    textAlign: 'center',
  },
});

export const message = style({
  margin: 0,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[800],
  maxWidth: '250px',
});

export const iconSlot = style({
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const actions = style({
  display: 'flex',
  gap: vars.space.sm,
  alignItems: 'center',
  justifyContent: 'center',
});

export const formContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
  marginTop: vars.space.lg,
});

export const formLabel = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[900],
  lineHeight: '26px',
});

export const textarea = style({
  width: '100%',
  minHeight: '219px',
  padding: `${vars.space.lg} 20px`,
  borderRadius: vars.radius.sm,
  border: `1px solid ${vars.color.gray[300]}`,
  backgroundColor: vars.color.white,
  fontSize: vars.fontSize.base,
  lineHeight: '26px',
  color: vars.color.gray[900],
  boxSizing: 'border-box',
  resize: 'vertical',
  selectors: {
    '&::placeholder': {
      color: vars.color.gray[500],
    },
  },
});

export const submitRow = style({
  padding: vars.space.xl,
});

export const submitButton = style({
  width: '100%',
  height: '48px',
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.gray[800],
  color: vars.color.white,
  border: 'none',
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  cursor: 'pointer',
});
