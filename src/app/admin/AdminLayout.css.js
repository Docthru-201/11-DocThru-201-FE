import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const adminRoot = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100dvh',
  backgroundColor: vars.color.gray[50],
  width: '100%',
});

export const adminMain = style({
  flex: 1,
  backgroundColor: vars.color.white,
  paddingTop: vars.space.lg,
  paddingBottom: vars.space.xl,
  width: '100%',
  '@media': {
    'screen and (min-width: 745px)': {
      paddingTop: '24px',
      paddingBottom: vars.space['2xl'],
    },
  },
});

export const contentContainer = style({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  paddingLeft: vars.space.md,
  paddingRight: vars.space.md,
  boxSizing: 'border-box',
  '@media': {
    'screen and (min-width: 376px)': {
      paddingLeft: vars.space.lg,
      paddingRight: vars.space.lg,
    },
    'screen and (min-width: 745px)': {
      paddingLeft: vars.space.xl,
      paddingRight: vars.space.xl,
    },
  },
});
