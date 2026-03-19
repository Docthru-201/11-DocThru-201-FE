import { styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.js';

const transition = `background-color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, box-shadow ${vars.transition.duration.normal} ${vars.transition.timing.ease}`;

const base = {
  width: '40px',
  height: '40px',
  borderRadius: vars.radius.md,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.normal,
  boxSizing: 'border-box',
  transition,
  outline: 'none',
};

export const control = styleVariants({
  page: [
    base,
    {
      backgroundColor: 'transparent',
      color: vars.color.gray[400],
      selectors: {
        '&:hover': {
          backgroundColor: vars.color.gray[200],
          color: vars.color.gray[800],
        },
        '&:focus-visible': {
          boxShadow: `0 0 0 2px ${vars.color.gray[800]}4D`,
        },
      },
    },
  ],
  selected: {
    backgroundColor: vars.color.gray[800],
    color: vars.color.brand.point,
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.gray[900],
        color: vars.color.brand.point,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 2px ${vars.color.brand.point}`,
      },
    },
  },
});
