import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.ts';

export const root = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const label = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[900],
});

const textareaBase = style({
  width: '100%',
  minHeight: '89px',
  padding: vars.space.lg,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.lg,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[900],
  boxSizing: 'border-box',
  resize: 'vertical',
  outline: 'none',
  selectors: {
    '&::placeholder': {
      color: vars.color.gray[400],
    },
    '&:focus': {
      borderColor: vars.color.gray[800],
    },
  },
});

export const textarea = styleVariants({
  default: [textareaBase],
  max: [
    textareaBase,
    {
      minHeight: '120px',
    },
  ],
  large: [
    textareaBase,
    {
      minHeight: '219px',
      borderRadius: '6px',
      padding: '16px 20px',
    },
  ],
});
