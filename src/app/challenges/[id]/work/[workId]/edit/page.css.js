import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const pageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: vars.color.white,
  overflow: 'hidden',
});

export const header = style({
  backgroundColor: vars.color.white,
  flexShrink: 0,
});

export const headerInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '960px',
  margin: '0 auto',
  padding: '12px 24px',
  width: '100%',
});

export const headerLeft = style({
  display: 'flex',
  alignItems: 'center',
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontFamily: vars.fontFamily.quantico,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray[600],
  textDecoration: 'none',
  letterSpacing: '0.4px',
  fontSize: '20px',
  lineHeight: '24px',
});

export const logoIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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

export const challengeTitle = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[800],
});

export const headerRight = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const headerButton = style({
  height: '38px !important',
  padding: '0 16px !important',
  fontSize: `${vars.fontSize.sm} !important`,
});

export const contentArea = style({
  display: 'flex',
  flex: 1,
  padding: '24px',
  overflow: 'hidden',
  justifyContent: 'center',
});

export const editorArea = style({
  width: '100%',
  maxWidth: '960px',
  backgroundColor: vars.color.white,
  overflow: 'auto',
  padding: '0 24px',
});

export const editorHalf = style({
  flex: 1,
  backgroundColor: vars.color.white,
  overflow: 'auto',
  padding: '0 24px',
});

export const originalArea = style({
  flex: 1,
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
  border: `1px solid ${vars.color.gray[200]}`,
});

export const originalIframe = style({
  width: '100%',
  height: '100%',
  border: 'none',
});

export const originalButton = style({
  position: 'fixed',
  right: '24px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '56px',
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.gray[800],
  color: vars.color.white,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  border: 'none',
  cursor: 'pointer',
  zIndex: 10,
  whiteSpace: 'pre',
  textAlign: 'center',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[900],
    },
  },
});
