import { style, styleVariants } from '@vanilla-extract/css';
import { breakpoint } from '@/styles/breakpoints.css.js';
import { vars } from '@/styles/tokens.css.js';

/* Chip 타입: Quantico / Chip 상태 등: Pretendard (tokens.fontFamily) */
const chipBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  '@media': {
    [breakpoint.sm]: {
      height: '22px',
      padding: `3px ${vars.space.sm}`,
      borderRadius: vars.radius.sm,
      fontSize: vars.fontSize['2xs'],
    },
  },
});

/* Figma chip-type: px-12 py-3, rounded-8, Quantico Bold 14px #525252 */
export const chipType = styleVariants({
  next: [
    chipBase,
    {
      height: '26px',
      padding: `3px ${vars.space.md}`,
      borderRadius: vars.radius.md,
      backgroundColor: '#79E16A',
      textAlign: 'justify',
      fontFamily: vars.fontFamily.quantico,
      color: vars.color.gray[600],
      fontSize: vars.fontSize.sm,
      fontWeight: vars.fontWeight.bold,
      wordWrap: 'break-word',
    },
  ],
  api: [
    chipBase,
    {
      height: '26px',
      padding: `3px ${vars.space.md}`,
      borderRadius: vars.radius.md,
      backgroundColor: '#FF905E',
      fontFamily: vars.fontFamily.quantico,
      color: vars.color.gray[600],
      fontSize: vars.fontSize.sm,
      fontWeight: vars.fontWeight.bold,
      wordWrap: 'break-word',
    },
  ],
  career: [
    chipBase,
    {
      height: '26px',
      padding: `3px ${vars.space.md}`,
      borderRadius: vars.radius.md,
      backgroundColor: '#7EB2EE',
      fontFamily: vars.fontFamily.quantico,
      color: vars.color.gray[600],
      fontSize: vars.fontSize.sm,
      fontWeight: vars.fontWeight.bold,
      wordWrap: 'break-word',
    },
  ],
  modernJs: [
    chipBase,
    {
      height: '26px',
      padding: `3px ${vars.space.md}`,
      borderRadius: vars.radius.md,
      backgroundColor: '#F66E6B',
      fontFamily: vars.fontFamily.quantico,
      color: vars.color.gray[600],
      fontSize: vars.fontSize.sm,
      fontWeight: vars.fontWeight.bold,
      wordWrap: 'break-word',
    },
  ],
  web: [
    chipBase,
    {
      height: '26px',
      padding: `3px ${vars.space.md}`,
      borderRadius: vars.radius.md,
      backgroundColor: '#F7EA5D',
      fontFamily: vars.fontFamily.quantico,
      color: vars.color.gray[600],
      fontSize: vars.fontSize.sm,
      fontWeight: vars.fontWeight.bold,
      wordWrap: 'break-word',
    },
  ],
});

/* Figma chip-category: white bg, border #D4D4D4, Pretendard Medium 13px #525252 */
export const chipCategory = styleVariants({
  default: [
    chipBase,
    {
      height: '26px',
      padding: '5px 7px',
      borderRadius: vars.radius.md,
      backgroundColor: 'var(--white, #ffffff)',
      border: '1px solid var(--gray-gray300, #D4D4D4)',
      color: 'var(--gray-gray600, #525252)',
      fontSize: 'var(--font-size-xs)',
      fontWeight: 'var(--font-weight-medium, 500)',
      wordWrap: 'break-word',
    },
  ],
});

export const chipStatus = styleVariants({
  wait: [
    chipBase,
    {
      height: '24px',
      padding: '4px 8px',
      borderRadius: vars.radius.sm,
      backgroundColor: '#FFFDE7',
      color: '#F2BC00',
      fontSize: 'var(--font-size-xs)',
      fontWeight: 'var(--font-weight-semibold, 600)',
      wordWrap: 'break-word',
    },
  ],
  rejected: [
    chipBase,
    {
      height: '24px',
      padding: '4px 8px',
      borderRadius: vars.radius.sm,
      backgroundColor: '#FFF0F0',
      color: '#E54946',
      fontSize: 'var(--font-size-xs)',
      fontWeight: 'var(--font-weight-semibold, 600)',
      wordWrap: 'break-word',
    },
  ],
  approved: [
    chipBase,
    {
      height: '24px',
      padding: '4px 8px',
      borderRadius: vars.radius.sm,
      backgroundColor: '#DFF0FF',
      color: '#4095DE',
      fontSize: 'var(--font-size-xs)',
      fontWeight: 'var(--font-weight-semibold, 600)',
      wordWrap: 'break-word',
    },
  ],
  deleted: [
    chipBase,
    {
      height: '24px',
      padding: '4px 8px',
      borderRadius: vars.radius.sm,
      backgroundColor: 'var(--gray-gray200, #E5E5E5)',
      color: 'var(--gray-gray500, #737373)',
      fontSize: 'var(--font-size-xs)',
      fontWeight: 'var(--font-weight-semibold, 600)',
      wordWrap: 'break-word',
    },
  ],
});
