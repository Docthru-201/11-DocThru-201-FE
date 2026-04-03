import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.ts';

export const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
  width: '100%',
  minHeight: '47px',
  padding: `${vars.space.sm} 0`,
  boxSizing: 'border-box',
});

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2px',
  height: '21px',
  width: '51px',
  padding: 0,
  backgroundColor: vars.color.gray[800],
  borderRadius: vars.radius.xl,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.brand.point,
  flexShrink: 0,
});

export const badgeIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const profile = style({
  flexShrink: 0,
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  flex: 1,
  minWidth: 0,
});

export const name = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[800],
});

export const role = style({
  fontSize: vars.fontSize['2xs'],
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[500],
});

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  flexShrink: 0,
});

const transition = `color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, background-color ${vars.transition.duration.normal} ${vars.transition.timing.ease}`;

export const likeCount = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[500],
  background: 'none',
  border: 'none',
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: '6px',
  cursor: 'pointer',
  transition,
  outline: 'none',
});

export const workLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2px',
  fontSize: vars.fontSize['2xs'],
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[800],
  background: 'none',
  border: 'none',
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: '6px',
  cursor: 'pointer',
  transition,
  outline: 'none',
  selectors: {
    '&:hover': {
      color: vars.color.gray[900],
      backgroundColor: vars.color.gray[100],
    },
    '&:focus-visible': {
      boxShadow: `0 0 0 2px ${vars.color.gray[900]}26`,
    },
  },
});

export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: vars.color.gray[200],
  border: 'none',
  margin: 0,
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
  width: '100%',
});
