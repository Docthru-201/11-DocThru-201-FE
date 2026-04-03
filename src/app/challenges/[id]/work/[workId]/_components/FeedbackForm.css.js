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

/** 메인: 입력 박스 + 전송 버튼(박스 바깥), 상단 정렬 */
export const mainInputRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 24,
  marginTop: '24px 0',
});

export const textareaMainBox = style({
  flex: 1,
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  backgroundColor: vars.color.white,
  minHeight: '89px',
  boxSizing: 'border-box',
  marginTop: '24px',
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
  marginTop: vars.space.lg,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: `opacity ${vars.transition.duration.fast} ${vars.transition.timing.ease}`,
  selectors: {
    '&:disabled': {
      opacity: Number(vars.opacity.disabled),
      cursor: 'not-allowed',
    },
    '&:not(:disabled):hover': {
      opacity: 0.85,
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.gray[400]}`,
      outlineOffset: 2,
      borderRadius: vars.radius.sm,
    },
  },
});

/** 대댓글: 입력 박스 + 전송(박스 바깥), 상단 정렬 */
export const replyInputRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space.sm,
});

export const inputWrapper = style({
  flex: 1,
  minWidth: 0,
  display: 'flex',
  alignItems: 'flex-start',
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
  width: '40px',
  height: '40px',
  marginTop: vars.space.sm,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: `opacity ${vars.transition.duration.fast} ${vars.transition.timing.ease}`,
  selectors: {
    '&:disabled': {
      opacity: Number(vars.opacity.disabled),
      cursor: 'not-allowed',
    },
    '&:not(:disabled):hover': {
      opacity: 0.85,
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.gray[400]}`,
      outlineOffset: 2,
      borderRadius: vars.radius.sm,
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
  marginTop: '8px',
  marginRight: '56px',
});
