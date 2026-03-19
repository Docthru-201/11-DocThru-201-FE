import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

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

export const fieldDate = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '48px',
  padding: '8px 16px',
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[200]}`,
  selectors: {
    '&:focus-within': {
      borderColor: vars.color.brand.background,
    },
  },
});

export const dateInputArea = style({
  position: 'relative',
  flex: 1,
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
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

export const fieldDateError = style([
  fieldDate,
  {
    borderColor: vars.color.semantic.error,
  },
]);

export const input = style({
  flex: 1,
  minWidth: 0,
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

export const inputDate = style([
  input,
  {
    color: 'transparent',
    caretColor: vars.color.gray[900],
    selectors: {
      '&::-webkit-calendar-picker-indicator': {
        opacity: 0,
        position: 'absolute',
        right: 0,
        width: 0,
        height: 0,
        pointerEvents: 'none',
      },
      '&::-webkit-datetime-edit': {
        color: 'transparent',
      },
    },
  },
]);

export const dateDisplay = style({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[400],
  pointerEvents: 'none',
});

export const dateDisplayFilled = style({
  color: vars.color.gray[900],
});

export const dateIconWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 32,
  height: 32,
  marginLeft: vars.space.sm,
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
  fontSize: vars.fontSize['2xs'],
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[600],
  margin: '0 0 0 8px',
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
