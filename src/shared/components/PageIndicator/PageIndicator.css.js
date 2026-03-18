import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.ts';

export const pageIndicator = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

const transition = `color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, background-color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, box-shadow ${vars.transition.duration.normal} ${vars.transition.timing.ease}`;

export const arrowButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  color: vars.color.gray[400],
  transition,
  outline: 'none',
  selectors: {
    '&:disabled': {
      opacity: vars.opacity.inactive,
      cursor: 'not-allowed',
    },
    '&:not(:disabled):hover': {
      color: vars.color.gray[800],
    },
    '&:focus-visible': {
      color: vars.color.gray[800],
      boxShadow: `0 0 0 2px ${vars.color.gray[800]}40`,
      borderRadius: vars.radius.md,
    },
  },
});
