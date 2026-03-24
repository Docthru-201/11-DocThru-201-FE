import { style, styleVariants } from '@vanilla-extract/css';
import { breakpoint } from '@/styles/breakpoints.css';
import { vars } from '@/styles/tokens.css';

const transition = `background-color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, border-color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, box-shadow ${vars.transition.duration.normal} ${vars.transition.timing.ease}, transform ${vars.transition.duration.fast} ${vars.transition.timing.ease}`;

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.sm,
  height: '48px',
  padding: `0 ${vars.space.xl}`,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.normal,
  cursor: 'pointer',
  border: 'none',
  borderRadius: vars.radius.lg,
  boxSizing: 'border-box',
  transition,
  outline: 'none',
  selectors: {
    '&:active:not(:disabled)': {
      transform: 'scale(0.98)',
    },
  },
});

export const variant = styleVariants({
  solid: {
    width: '153px',
    backgroundColor: vars.color.gray[800],
    color: vars.color.white,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.gray[900],
        boxShadow: vars.shadow.sm,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 2px ${vars.color.gray[900]}40`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.gray[900],
        boxShadow: 'none',
      },
    },
    '@media': {
      // 작은 화면(sm 미만)에서만 높이·폰트·radius 축소
      [breakpoint.maxSm]: {
        height: '32px',
        fontSize: vars.fontSize.sm,
        borderRadius: vars.radius.md,
      },
    },
  },
  solidInactive: {
    backgroundColor: vars.color.gray[200],
    color: vars.color.gray[500],
    cursor: 'default',
    pointerEvents: 'none',
    transition: 'none',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.gray[200],
        boxShadow: 'none',
      },
      '&:active:not(:disabled)': {
        transform: 'none',
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 3px ${vars.color.gray[500]}4D`,
      },
    },
  },
  outline: {
    height: '40px',
    padding: `2px ${vars.space.lg} 3px`,
    backgroundColor: vars.color.white,
    border: `1px solid ${vars.color.gray[800]}`,
    color: vars.color.gray[800],
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.semibold,
    borderRadius: vars.radius.lg,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.gray[50],
        borderColor: vars.color.gray[700],
        boxShadow: 'none',
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 2px ${vars.color.gray[800]}26`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.gray[100],
        borderColor: vars.color.gray[800],
        boxShadow: 'none',
      },
    },
  },
  filledTonal: {
    backgroundColor: '#FFE7E7',
    color: vars.color.semantic.error,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: '#ffc9c9',
        boxShadow: vars.shadow.xs,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 2px ${vars.color.semantic.error}33`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: '#ffb8b8',
        boxShadow: 'none',
      },
    },
  },
  transparent: {
    height: '32px',
    padding: `${vars.space.xs} ${vars.space.md}`,
    borderRadius: vars.radius.lg,
    backgroundColor: 'rgba(246, 248, 250, 0.50)',
    color: vars.color.gray[700],
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.bold,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: 'rgba(228, 232, 236, 0.9)',
        boxShadow: 'none',
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 2px ${vars.color.gray[400]}40`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: 'rgba(218, 224, 230, 1)',
        boxShadow: 'none',
      },
    },
    '@media': {
      [breakpoint.sm]: {
        fontSize: vars.fontSize.sm,
        borderRadius: vars.radius.md,
      },
    },
  },
  filled: {
    height: '40px',
    padding: `0 ${vars.space.lg}`,
    backgroundColor: vars.color.brand.point,
    border: `2px solid ${vars.color.gray[800]}`,
    color: vars.color.gray[800],
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.bold,
    borderRadius: vars.radius.lg,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: '#f2b61a',
        boxShadow: vars.shadow.sm,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 2px ${vars.color.brand.point}40`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: '#e0a715',
        boxShadow: 'none',
      },
    },
  },
  outlineIcon: {
    height: '33px',
    padding: `0 ${vars.space.lg}`,
    backgroundColor: vars.color.white,
    border: `1px solid ${vars.color.gray[800]}`,
    color: vars.color.gray[800],
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.bold,
    borderRadius: vars.radius.full,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.gray[50],
        boxShadow: 'none',
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 2px ${vars.color.gray[800]}26`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.gray[100],
        boxShadow: 'none',
      },
    },
  },

  secondary: {
    height: '48px',
    padding: `0 ${vars.space.xl}`,
    backgroundColor: vars.color.white,
    border: `1px solid ${vars.color.gray[200]}`,
    color: vars.color.gray[900],
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.regular,
    borderRadius: vars.radius.lg,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.gray[50],
        boxShadow: 'none',
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 2px ${vars.color.gray[400]}26`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.gray[100],
        boxShadow: 'none',
      },
    },
  },
  solidIcon: {
    height: '39px',
    width: '155px',
    borderRadius: '19.5px',
    padding: 0,
    backgroundColor: vars.color.gray[800],
    color: vars.color.white,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.gray[900],
        boxShadow: vars.shadow.sm,
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 2px ${vars.color.gray[900]}33`,
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.gray[900],
        boxShadow: 'none',
        transform: 'scale(0.98)',
      },
    },
  },
});

export const icon = style({
  display: 'inline-flex',
  alignItems: 'center',
  flexShrink: 0,
});

export const content = style({
  minWidth: 0,
});

export const linkInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  minWidth: 0,
  textDecoration: 'none',
  color: 'inherit',
  font: 'inherit',
});

export const disabled = style({
  opacity: vars.opacity.disabled,
  cursor: 'not-allowed',
  pointerEvents: 'none',
  transition: 'none',
  backgroundColor: vars.color.gray[200],
  color: vars.color.gray[500],
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: vars.color.gray[200],
      boxShadow: 'none',
    },
    '&:active:not(:disabled)': {
      transform: 'none',
    },
    '&:focus-visible': {
      boxShadow: `0 0 0 3px ${vars.color.gray[500]}4D`,
    },
  },
});

export const fullWidth = style({
  width: '100%',
});
