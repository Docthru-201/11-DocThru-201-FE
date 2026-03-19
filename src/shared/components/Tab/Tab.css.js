import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const list = style({
  display: 'flex',
  alignItems: 'center',
  gap: 0,
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const itemBase = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: vars.space.lg,
  paddingLeft: vars.space.xl,
  paddingRight: vars.space.xl,
  paddingBottom: 0,
  minHeight: '53px',
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.gray[500],
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  transition: `color ${vars.transition.duration.fast} ${vars.transition.timing.ease}`,
  selectors: {
    '&:hover': {
      color: vars.color.gray[700],
    },
  },
});

export const item = styleVariants({
  default: [itemBase],
  active: [
    itemBase,
    {
      color: vars.color.gray[800],
    },
  ],
});

export const indicator = style({
  width: '100%',
  height: '3px',
  backgroundColor: vars.color.gray[800],
  borderRadius: 0,
  display: 'block',
  alignSelf: 'stretch',
  flexShrink: 0,
});

export const indicatorInactive = style({
  backgroundColor: 'transparent',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '13px',
  width: '100%',
});
