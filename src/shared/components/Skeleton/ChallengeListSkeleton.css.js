import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';
import { breakpoint } from '@/styles/breakpoints.css';

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  marginBottom: '40px',
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: vars.space.xl,
  backgroundColor: vars.color.white,
  border: `2px solid ${vars.color.gray[800]}`,
  borderRadius: vars.radius.lg,
  boxSizing: 'border-box',
  width: '100%',
  minHeight: '158px',
  maxWidth: '343px',
  '@media': {
    [breakpoint.md]: {
      maxWidth: '696px',
    },
    [breakpoint.lg]: {
      maxWidth: '996px',
    },
  },
});

export const cardHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: vars.space.sm,
});

export const chip = style({
  width: '58px',
  height: '26px',
});

export const titleLine = style({
  height: vars.fontSize.xl,
  width: '100%',
});

export const titleLineShort = style({
  height: vars.fontSize.sm,
  width: '58%',
});

export const metaRow = style({
  display: 'flex',
  gap: vars.space.md,
  marginTop: '6px',
});

export const metaItem = style({
  height: vars.fontSize.xs,
  width: '108px',
});
