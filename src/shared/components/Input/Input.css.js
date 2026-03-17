import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.js';

export const inputRoot = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
  width: '350px',
});

export const label = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[900],
});

const fieldBase = style({
  display: 'flex',
  alignItems: 'center',
  padding: '11px 20px',
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[200]}`,
  selectors: {
    '&:focus-within': {
      borderColor: vars.color.brand.background,
    },
  },
});

export const field = styleVariants({
  default: [fieldBase],
  error: [
    fieldBase,
    {
      borderColor: vars.color.semantic.error,
    },
  ],
});

export const input = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[900],
  selectors: {
    '&::placeholder': {
      color: vars.color.gray[400],
    },
  },
});

export const iconButton = style({
  border: 'none',
  background: 'transparent',
  padding: 0,
  marginLeft: vars.space.sm,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const helperTextBase = style({
  marginLeft: vars.space.sm,
  fontSize: vars.fontSize['2xs'],
  lineHeight: '16px',
  color: vars.color.gray[600],
});

export const helperText = styleVariants({
  default: [helperTextBase],
  error: [
    helperTextBase,
    {
      color: vars.color.semantic.error,
    },
  ],
});
