import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.js';

export const list = style({
  display: 'flex',
  alignItems: 'stretch',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  gap: 0,
});

const itemBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '21px 17px',
  fontSize: '15px',
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.gray[500],
  cursor: 'pointer',
  background: vars.color.white,
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
      fontWeight: vars.fontWeight.bold,
      color: vars.color.gray[800],
    },
  ],
});
