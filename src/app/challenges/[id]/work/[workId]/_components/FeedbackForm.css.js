import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

/** 상단 피드백 입력 (Figma: 흰 배경 + 테두리 + 원형 전송) */
export const containerMain = style({
  width: '100%',
});

/** 답글 등 인라인 */
export const container = style({
  width: '100%',
  marginTop: vars.space.md,
});

export const inputRowMain = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  backgroundColor: vars.color.white,
  minHeight: '89px',
  boxSizing: 'border-box',
  margin: '24px 0',
});

export const textareaMain = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  resize: 'none',
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[800],
  minHeight: '56px',
  maxHeight: '200px',
  backgroundColor: 'transparent',
  fontFamily: vars.fontFamily.pretendard,
  lineHeight: vars.lineHeight.normal,
  selectors: {
    '&::placeholder': {
      color: vars.color.gray[400],
    },
    '&:disabled': {
      color: vars.color.gray[400],
    },
  },
});

export const submitButtonMain = style({
  flexShrink: 0,
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.full,
  border: 'none',
  backgroundColor: vars.color.gray[100],
  cursor: 'pointer',
  transition: `opacity ${vars.transition.duration.fast} ${vars.transition.timing.ease}`,
  selectors: {
    '&:disabled': {
      opacity: Number(vars.opacity.disabled),
      cursor: 'not-allowed',
    },
    '&:not(:disabled):hover': {
      backgroundColor: vars.color.gray[200],
    },
  },
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

export const charCount = style({
  fontSize: vars.fontSize['2xs'],
  color: vars.color.gray[400],
  textAlign: 'right',
  marginTop: vars.space.xs,
});
