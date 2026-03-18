import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.ts';
import { breakpoint } from '@/styles/breakpoints.css.ts';

/**
 * Card: small(기본) → medium(768px~) → large(1024px~) 미디어 쿼리로 반응형 적용
 */
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

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  width: '100%',
});

export const titleBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
  width: '100%',
  position: 'relative',
});

export const titleRow = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  width: '100%',
});

export const editButton = style({
  position: 'absolute',
  top: 0,
  right: 0,
  width: 24,
  height: 24,
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.md,
});

export const chipsRow = style({
  display: 'flex',
  gap: vars.space.sm,
  flexWrap: 'wrap',
});

export const title = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[700],
  margin: 0,
});

export const divider = style({
  height: '1px',
  width: '100%',
  backgroundColor: vars.color.gray[200],
  border: 'none',
  margin: 0,
});

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
  width: '100%',
});

export const metaRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: vars.space.md,
});

export const metaLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
  flexWrap: 'wrap',
});

export const metaItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[600],
});
