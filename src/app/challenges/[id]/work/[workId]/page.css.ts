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
  maxWidth: '760px',
  paddingTop: vars.space.xl,
});

export const topRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: vars.space.sm,
});