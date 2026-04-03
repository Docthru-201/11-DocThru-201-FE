import { style, styleVariants } from '@vanilla-extract/css';
// import { breakpoint } from '@/styles/breakpoints.css';
import { vars } from '@/styles/tokens.css';

const chipBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  borderRadius: '8px',

  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  // '@media': {
  //   [breakpoint.sm]: {
  //     height: '22px',
  //     padding: `3px ${vars.space.sm}`,
  //     borderRadius: vars.radius.sm,
  //     fontSize: vars.fontSize['2xs'],
  //   },
  // },
});

export const chipType = styleVariants({
  next_js: [
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
  modern_js: [
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

export const chipCategory = styleVariants({
  default: [
    chipBase,
    {
      display: 'inline-flex',
      height: '26px',
      padding: '5px 7px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      borderRadius: '8px',
      border: `1px solid ${vars.color.gray[300]}`,
      background: '#FFF',
      color: vars.color.gray[600],
      fontSize: vars.fontSize.xs,
      fontWeight: vars.fontWeight.medium,
      wordWrap: 'break-word',
    },
  ],
});

export const chipStatus = styleVariants({
  pending: [
    chipBase,
    {
      height: '24px',
      padding: '4px 8px',
      borderRadius: vars.radius.sm,
      backgroundColor: '#FFFDE7',
      color: '#F2BC00',
      fontSize: vars.fontSize.xs,
      fontWeight: vars.fontWeight.semibold,
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
      fontSize: vars.fontSize.xs,
      fontWeight: vars.fontWeight.semibold,
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
      fontSize: vars.fontSize.xs,
      fontWeight: vars.fontWeight.semibold,
      wordWrap: 'break-word',
    },
  ],
  deleted: [
    chipBase,
    {
      height: '24px',
      padding: '4px 8px',
      borderRadius: vars.radius.sm,
      backgroundColor: vars.color.gray[200],
      color: vars.color.gray[500],
      fontSize: vars.fontSize.xs,
      fontWeight: vars.fontWeight.semibold,
      wordWrap: 'break-word',
    },
  ],
});
