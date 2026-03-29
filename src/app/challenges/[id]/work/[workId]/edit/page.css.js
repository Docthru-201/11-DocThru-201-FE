import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const pageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: vars.color.white,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space.lg} 24px`,
  borderBottom: `1px solid ${vars.color.gray[200]}`,
});

export const headerLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.lg,
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

export const editorArea = style({
  flex: 1,
  display: 'flex',
  position: 'relative',
  padding: '24px',
  maxWidth: '960px',
  width: '100%',
  margin: '0 auto',
  boxSizing: 'border-box',
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
  height: '40px',
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.gray[800],
  color: vars.color.white,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  border: 'none',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[900],
    },
  },
});
