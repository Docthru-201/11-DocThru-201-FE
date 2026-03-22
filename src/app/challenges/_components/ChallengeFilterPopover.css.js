import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const root = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  zIndex: 50,
  width: 'min(343px, calc(100vw - 32px))',
  marginTop: vars.space.sm,
  padding: vars.space.lg,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.lg,
  boxSizing: 'border-box',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: vars.space.lg,
});

export const title = style({
  margin: 0,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: 1.4,
  color: vars.color.gray[800],
});

export const closeBtn = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: vars.space.xs,
  margin: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  borderRadius: vars.radius.sm,
  color: vars.color.gray[800],
  selectors: {
    '&:focus-visible': {
      boxShadow: `0 0 0 2px ${vars.color.gray[400]}`,
    },
  },
});

export const section = style({
  marginBottom: vars.space.lg,
  selectors: {
    '&:last-of-type': {
      marginBottom: vars.space.lg,
    },
  },
});

export const sectionTitle = style({
  margin: `0 0 ${vars.space.sm}`,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  lineHeight: 1.4,
  color: vars.color.gray[800],
});

export const list = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

export const checkboxRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const checkboxLabel = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[800],
  lineHeight: 1.4,
});

export const radioList = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

export const radioInput = style({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
  pointerEvents: 'none',
});

export const radioRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  cursor: 'pointer',
  margin: 0,
});

export const radioMark = style({
  position: 'relative',
  flexShrink: 0,
  width: '18px',
  height: '18px',
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.gray[300]}`,
  backgroundColor: vars.color.white,
  boxSizing: 'border-box',
  selectors: {
    [`${radioRow}:has(input:checked) &`]: {
      borderColor: vars.color.gray[800],
      backgroundColor: vars.color.gray[800],
      boxShadow: `inset 0 0 0 3px ${vars.color.white}`,
    },
  },
});

export const radioLabel = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[800],
  lineHeight: 1.4,
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  marginTop: vars.space.md,
  paddingTop: vars.space.md,
  borderTop: `1px solid ${vars.color.gray[200]}`,
});

export const btnReset = style({
  flex: 1,
  height: '40px',
  margin: 0,
  padding: `0 ${vars.space.lg}`,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  fontFamily: vars.fontFamily.pretendard,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[800],
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[800]}`,
  borderRadius: vars.radius.lg,
  cursor: 'pointer',
  boxSizing: 'border-box',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[50],
    },
    '&:focus-visible': {
      boxShadow: `0 0 0 2px ${vars.color.gray[800]}26`,
    },
  },
});

export const btnApply = style({
  flex: 1,
  height: '40px',
  margin: 0,
  padding: `0 ${vars.space.lg}`,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  fontFamily: vars.fontFamily.pretendard,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.white,
  backgroundColor: vars.color.gray[800],
  border: 'none',
  borderRadius: vars.radius.lg,
  cursor: 'pointer',
  boxSizing: 'border-box',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[900],
      boxShadow: vars.shadow.sm,
    },
    '&:focus-visible': {
      boxShadow: `0 0 0 2px ${vars.color.gray[900]}40`,
    },
  },
});
