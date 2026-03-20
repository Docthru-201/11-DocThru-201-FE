import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.js';

export const adminRoot = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: vars.color.gray[50],
});

export const adminMain = style({
  flex: 1,
  paddingTop: '64px',
  paddingBottom: vars.space['2xl'],
});

export const contentContainer = style({
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  padding: `0 ${vars.space.md}`,
  '@media': {
    'screen and (min-width: 768px)': {
      padding: `0 ${vars.space.xl}`,
    },
  },
});
