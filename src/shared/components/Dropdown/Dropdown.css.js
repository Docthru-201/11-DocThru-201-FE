import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.js';

export const root = style({
  position: 'relative',
  width: '100%',
  maxWidth: '800px',
});

const transition = `background-color ${vars.transition.duration.fast} ${vars.transition.timing.ease}, color ${vars.transition.duration.fast} ${vars.transition.timing.ease}`;

const triggerBase = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '56px',
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.sm,
  cursor: 'pointer',
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[400],
  textAlign: 'left',
});

export const trigger = styleVariants({
  default: [triggerBase],
  active: [
    triggerBase,
    {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  ],
});

export const triggerLabel = style({
  flex: 1,
});

export const triggerIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  margin: `-${vars.space.sm} -${vars.space.sm} -${vars.space.sm} 0`,
});

export const list = style({
  position: 'absolute',
  left: 0,
  right: 0,
  top: '100%',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[300]}`,
  borderTop: 'none',
  borderBottomLeftRadius: vars.radius.md,
  borderBottomRightRadius: vars.radius.md,
  overflow: 'hidden',
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.gray[300]}`,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[500],
  cursor: 'pointer',
  backgroundColor: vars.color.white,
  transition,
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: vars.color.gray[50],
      color: vars.color.gray[800],
    },
  },
});
