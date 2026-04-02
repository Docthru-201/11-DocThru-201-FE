import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: vars.color.white,
  width: '100%',
  paddingBottom: '160px',
});

export const contentWrapper = style({
  width: '100%',
  maxWidth: '890px',
  paddingTop: vars.space.xl,
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  boxSizing: 'border-box',
});

export const sectionDivider = style({
  border: 'none',
  borderTop: `1px solid ${vars.color.gray[200]}`,
  margin: `${vars.space['2xl']} 0 0`,
  width: '100%',
});

export const feedbackSection = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
});
