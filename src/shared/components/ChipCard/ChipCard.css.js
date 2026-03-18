import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.ts';
import { breakpoint } from '@/styles/breakpoints.css.ts';

/* Figma chip-card-status: px-12 py-8, rounded-24, gap-4, Pretendard Medium 13px (next/font --font-pretendard 사용) */
const chipCardBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.xs,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  height: '32px',
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: '24px',
  textAlign: 'justify',
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  wordWrap: 'break-word',
  '@media': {
    [breakpoint.lg]: {
      width: '170px', // 잘려서 사이즈 수정
      maxWidth: '170px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
});

export const chipCardLabel = style({
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const chipCard = styleVariants({
  recruitEnd: [
    chipCardBase,
    {
      backgroundColor: vars.color.gray[200],
      color: vars.color.gray[800],
    },
  ],
  dateEnd: [
    chipCardBase,
    {
      backgroundColor: vars.color.gray[800],
      color: vars.color.white,
    },
  ],
});
