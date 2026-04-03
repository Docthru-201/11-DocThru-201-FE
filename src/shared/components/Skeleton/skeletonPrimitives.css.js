import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.48 },
});

export const bone = style({
  backgroundColor: vars.color.gray[200],
  animation: `${pulse} 1.25s ease-in-out infinite`,
});

export const boneRounded = style([
  bone,
  {
    borderRadius: vars.radius.md,
  },
]);

export const boneCircle = style([
  bone,
  {
    borderRadius: vars.radius.full,
    flexShrink: 0,
  },
]);
