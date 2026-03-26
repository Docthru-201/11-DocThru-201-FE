import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const container = style({
  padding: `${vars.space.lg} ${vars.space['2xl']}`,
  borderTop: `1px solid ${vars.color.gray[200]}`,
});

export const inputWrapper = style({
  display: 'flex',
  alignItems: 'flex-end',
  gap: vars.space.sm,
  border: `1px solid ${vars.color.gray[300]}`,
  borderRadius: vars.radius.md,
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.color.white,
  selectors: {
    '&:focus-within': {
      borderColor: vars.color.gray[500],
    },
  },
});

export const textarea = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  resize: 'none',
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[800],
  lineHeight: vars.lineHeight.normal,
  minHeight: '44px',
  maxHeight: '120px',
  backgroundColor: 'transparent',
  fontFamily: vars.fontFamily.pretendard,
});

export const submitButton = style({
  flexShrink: 0,
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.full,
  border: 'none',
  backgroundColor: vars.color.brand.point,
  color: vars.color.gray[900],
  cursor: 'pointer',
  transition: `opacity ${vars.transition.duration.fast} ${vars.transition.timing.ease}`,
  selectors: {
    '&:disabled': {
      opacity: Number(vars.opacity.disabled),
      cursor: 'not-allowed',
    },
  },
});

export const replyActions = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: vars.space.sm,
  marginTop: vars.space.sm,
});

export const cancelButton = style({
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.gray[300]}`,
  backgroundColor: vars.color.white,
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[600],
  cursor: 'pointer',
});

export const replyButton = style({
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  border: 'none',
  backgroundColor: vars.color.brand.point,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[900],
  cursor: 'pointer',
});

export const disabledTextarea = style([
  textarea,
  {
    cursor: 'not-allowed',
    color: vars.color.gray[400],
  },
]);
