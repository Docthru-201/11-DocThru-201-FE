import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.js';

export const root = style({
  position: 'relative',
  width: '24px',
  height: '24px',
  flexShrink: 0,
  cursor: 'pointer',
});

export const input = style({
  position: 'absolute',
  opacity: vars.opacity.hidden,
  width: '100%',
  height: '100%',
  margin: 0,
  cursor: 'pointer',
});

const boxBase = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '18px',
  height: '18px',
  borderRadius: '2px',
  backgroundColor: vars.color.gray[50],
  border: `1px solid ${vars.color.gray[200]}`,
  boxSizing: 'border-box',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const box = styleVariants({
  unchecked: [boxBase],
  checked: [
    boxBase,
    {
      backgroundColor: vars.color.gray[800],
      borderColor: vars.color.gray[800],
    },
  ],
});

export const check = style({
  width: vars.space.sm,
  height: '5px',
  borderLeft: `2px solid ${vars.color.white}`,
  borderBottom: `2px solid ${vars.color.white}`,
  transform: 'rotate(-45deg)',
  marginBottom: '3px',
});
