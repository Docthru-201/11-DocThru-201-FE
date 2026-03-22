import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const inputRoot = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
  width: '100%',
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
  height: '48px',
  padding: '0 20px',
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
  cursor: 'pointer',
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
    caretColor: 'transparent',
    selectors: {
      '&::-webkit-calendar-picker-indicator': {
        opacity: 0,
        position: 'absolute',
        right: 0,
        width: 0,
        height: 0,
        pointerEvents: 'none',
      },
      /* 포커스 시에도 네이티브 연/월/일·구분자가 비치지 않도록 (한글 로케일과 오버레이 이중 표시 방지) */
      '&::-webkit-datetime-edit': {
        color: 'transparent',
      },
      '&:focus::-webkit-datetime-edit': {
        color: 'transparent',
      },
      '&::-webkit-datetime-edit-fields-wrapper': {
        backgroundColor: 'transparent',
        padding: 0,
      },
      '&::-webkit-datetime-edit-text': {
        color: 'transparent',
      },
      '&::-webkit-datetime-edit-month-field': {
        color: 'transparent',
      },
      '&::-webkit-datetime-edit-day-field': {
        color: 'transparent',
      },
      '&::-webkit-datetime-edit-year-field': {
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
