import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';
import { breakpoint } from '@/styles/breakpoints.css';

export const pageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
  backgroundColor: vars.color.white,
  overflow: 'hidden',
});

/** 좌측 에디터 / 우측 원문 분할 */
export const mainRow = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  minHeight: 0,
  overflow: 'hidden',
  '@media': {
    [breakpoint.maxSm]: {
      flexDirection: 'column',
    },
  },
});

export const leftPane = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  minHeight: 0,
  overflow: 'hidden',
});

/** Figma: 본문 최대 890px 가운데 정렬 */
export const leftPaneInner = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
  width: '100%',
  maxWidth: '890px',
  margin: '0 auto',
  padding: `0 ${vars.space.lg}`,
  boxSizing: 'border-box',
});

export const headerRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  paddingTop: '24px',
  width: '100%',
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5.4px',
  fontFamily: vars.fontFamily.quantico,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray[600],
  textDecoration: 'none',
  letterSpacing: '0.29px',
  fontSize: '21.6px',
  lineHeight: 1,
});

export const logoIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '28px',
});

export const headerRight = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

/** Figma: 임시저장·제출 90×40, 포기는 아이콘 포함 톤 버튼 */
export const headerButton = style({
  width: '90px !important',
  minWidth: '90px !important',
  height: '40px !important',
  padding: '2px 16px 3px !important',
  fontSize: `${vars.fontSize.base} !important`,
  fontWeight: `${vars.fontWeight.semibold} !important`,
});

export const headerButtonGiveUp = style({
  width: 'auto !important',
  minWidth: '0 !important',
  paddingLeft: `${vars.space.md} !important`,
  paddingRight: `${vars.space.md} !important`,
});

export const titleBlock = style({
  flexShrink: 0,
  width: '100%',
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.color.gray[200]}`,
  marginBottom: vars.space.md,
});

export const challengeTitle = style({
  margin: '24px 0',
  fontSize: '20px',
  fontWeight: vars.fontWeight.semibold,
  lineHeight: 1.4,
  color: vars.color.gray[800],
});

export const editorSection = style({
  flex: 1,
  minHeight: 0,
  overflow: 'auto',
  width: '100%',
});

/** 우측 원문 패널 — Figma 640px */
export const originalPane = style({
  width: '640px',
  maxWidth: '100%',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
  backgroundColor: vars.color.white,
  borderLeft: `1px solid ${vars.color.gray[200]}`,
  '@media': {
    [breakpoint.maxSm]: {
      width: '100%',
      borderLeft: 'none',
      borderTop: `1px solid ${vars.color.gray[200]}`,
      minHeight: '40vh',
    },
  },
});

export const originalToolbar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  height: '56px',
  padding: `${vars.space.md} ${vars.space.lg}`,
  boxSizing: 'border-box',
  backgroundColor: 'rgba(246, 248, 250, 0.5)',
});

export const originalCloseBtn = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  borderRadius: vars.radius.md,
  color: vars.color.gray[800],
  selectors: {
    '&:focus-visible': {
      outline: `2px solid ${vars.color.gray[400]}`,
      outlineOffset: 2,
    },
  },
});

/** Figma BtnTransparent — 링크 열기 */
export const openLinkBtn = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',
  height: '32px',
  minWidth: '96px',
  padding: `0 ${vars.space.sm}`,
  border: 'none',
  borderRadius: '10px',
  backgroundColor: 'rgba(246, 248, 250, 0.5)',
  cursor: 'pointer',
  fontFamily: vars.fontFamily.pretendard,
  fontSize: '14px',
  fontWeight: vars.fontWeight.bold,
  lineHeight: '26px',
  letterSpacing: '0.28px',
  color: vars.color.gray[700],
  boxSizing: 'border-box',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(228, 232, 236, 0.85)',
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.gray[400]}`,
      outlineOffset: 2,
    },
  },
});

export const originalFrameWrap = style({
  position: 'relative',
  flex: 1,
  minHeight: 0,
  backgroundColor: '#0a0a0a',
});

export const originalIframe = style({
  width: '100%',
  height: '100%',
  border: 'none',
  display: 'block',
});

/** 원문 패널을 닫았을 때 다시 열기 */
export const showOriginalTab = style({
  position: 'fixed',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 20,
  padding: `${vars.space.md} ${vars.space.sm}`,
  border: 'none',
  borderTopLeftRadius: vars.radius.md,
  borderBottomLeftRadius: vars.radius.md,
  backgroundColor: vars.color.gray[800],
  color: vars.color.white,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  cursor: 'pointer',
  writingMode: 'vertical-rl',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[900],
    },
  },
});
