import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

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
  cursor: 'pointer',
  transition,
  outline: 'none',
  selectors: {
    '&:disabled': {
      opacity: vars.opacity.inactive,
      cursor: 'not-allowed',
    },
    '&:focus-visible': {
      borderRadius: vars.radius.md,
    },
  },
});
