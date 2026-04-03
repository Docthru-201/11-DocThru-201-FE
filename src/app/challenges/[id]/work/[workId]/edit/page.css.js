import { style, globalStyle } from '@vanilla-extract/css';
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

globalStyle(`${logoIcon} img`, {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

export const titleBar = style({
  backgroundColor: vars.color.white,
  flexShrink: 0,
});

export const titleBarInner = style({
  maxWidth: '960px',
  margin: '0 auto',
  padding: '14px 24px',
  borderBottom: `1px solid ${vars.color.gray[200]}`,
});

export const headerRight = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

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
  maxWidth: '960px',
  backgroundColor: vars.color.white,
  overflowY: 'auto',
  padding: '0 24px',
  display: 'flex',
  flexDirection: 'column',
});

export const editorSection = style({
  flex: 1,
  backgroundColor: vars.color.white,
  overflowY: 'auto',
  padding: '0 24px',
  display: 'flex',
  flexDirection: 'column',
});

globalStyle(`${editorSection} .ProseMirror`, {
  minHeight: '600px',
  height: '100%',
  outline: 'none',
  padding: '20px 0',
});

const originalPaneWrapperBase = {
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0,
  alignSelf: 'stretch',
  overflow: 'hidden',
  transition:
    'width 0.35s cubic-bezier(0.4, 0, 0.2, 1), max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
};

export const originalPane = style({
  position: 'relative',
  width: '640px',
  maxWidth: '100%',
  flexShrink: 0,
  minHeight: 0,
  flex: 1,
  overflow: 'hidden',
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
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  minHeight: '56px',
  padding: `${vars.space.md} ${vars.space.lg}`,
  boxSizing: 'border-box',
  pointerEvents: 'none',
  background: 'transparent',
});

export const originalCloseBtn = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  padding: 0,
  border: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.88)',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.12)',
  cursor: 'pointer',
  borderRadius: '50%',
  color: vars.color.gray[800],
  pointerEvents: 'auto',
  selectors: {
    '&:focus-visible': {
      outline: `2px solid ${vars.color.gray[400]}`,
      outlineOffset: 2,
    },
  },
});

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
  pointerEvents: 'auto',
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
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  minHeight: 0,
  backgroundColor: '#0a0a0a',
});

export const originalIframe = style({
  width: '100%',
  height: '100%',
  border: 'none',
  display: 'block',
});

export const showOriginalTab = style({
  position: 'fixed',
  right: 0,
  top: '50%',
  transform: 'translateY(-350%)',
  zIndex: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  width: '52px',
  height: '99px',
  padding: 0,
  border: '2px solid #F5F5F5',
  borderRight: 'none',
  borderRadius: '24px 0 0 24px',
  backgroundColor: '#FFF',
  boxShadow: '0 4px 4px 0 rgba(88, 92, 130, 0.05)',
  cursor: 'pointer',
  boxSizing: 'border-box',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[50],
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.gray[400]}`,
      outlineOffset: 2,
    },
  },
});

export const showOriginalTabIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  flexShrink: 0,
});

export const showOriginalTabLabel = style({
  fontFamily: vars.fontFamily.pretendard,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: 'normal',
  color: vars.color.gray[500],
  textAlign: 'center',
});

export const giveUpButton = style({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  opacity: 1,
  transition: 'opacity 0.2s',
  selectors: {
    '&:hover': {
      opacity: 0.8,
    },
  },
});

export const challengeSubTitle = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[500],
});

export const titleInput = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  border: 'none',
  outline: 'none',
  width: '100%',
  background: 'transparent',
});
