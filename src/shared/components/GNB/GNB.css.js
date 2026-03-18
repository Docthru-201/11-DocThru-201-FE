import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css.ts';
import { breakpoint } from '@/styles/breakpoints.css.ts';

/**
 * Figma GNB 4711-52571
 * 미디어 쿼리: small(~767px) 좌우 16 | medium(768px~) 좌우 24 | large(1024px~) 좌우 360
 * status: guest | member | admin
 * 로고 폰트: next/font --font-quantico 사용
 */

export const gnb = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  minHeight: '56px',
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  backgroundColor: vars.color.white,
  borderBottom: `1px solid ${vars.color.gray[100]}`,
  boxSizing: 'border-box',
  '@media': {
    [breakpoint.md]: {
      minHeight: '60px',
      paddingLeft: vars.space.xl,
      paddingRight: vars.space.xl,
    },
    [breakpoint.lg]: {
      paddingLeft: '360px',
      paddingRight: '360px',
    },
  },
});

export const left = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xl,
  flexShrink: 0,
});

export const logo = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontFamily: vars.fontFamily.quantico,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray[600],
  textDecoration: 'none',
  letterSpacing: '0.2889px',
  fontSize: '14.4px',
  lineHeight: '18px',
  '@media': {
    [breakpoint.md]: {
      fontSize: '21.6px',
      lineHeight: '27px',
    },
  },
});

export const logoIcon = style({
  display: 'inline-flex',
  width: 20,
  height: 20,
  flexShrink: 0,
  '@media': {
    [breakpoint.md]: {
      width: 28,
      height: 28,
    },
  },
});

globalStyle(`${logoIcon} img`, {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

export const center = style({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  minWidth: 0,
});

export const tabs = style({
  display: 'flex',
  alignItems: 'stretch',
  gap: 0,
});

const tabTransition = `color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, background-color ${vars.transition.duration.normal} ${vars.transition.timing.ease}`;

const tabBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '21px 17px',
  fontSize: '15px',
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[500],
  fontWeight: vars.fontWeight.semibold,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: tabTransition,
  outline: 'none',
  selectors: {
    '&:hover': {
      color: vars.color.gray[700],
      backgroundColor: vars.color.gray[50],
    },
    '&:focus-visible': {
      boxShadow: `inset 0 0 0 2px ${vars.color.gray[400]}`,
    },
  },
});

export const tab = styleVariants({
  default: [tabBase],
  active: [
    tabBase,
    {
      color: vars.color.gray[800],
      fontWeight: vars.fontWeight.bold,
      selectors: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  ],
});

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.lg,
  flexShrink: 0,
});

const loginTransition = `background-color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, box-shadow ${vars.transition.duration.normal} ${vars.transition.timing.ease}`;

const loginButtonBase = style({
  padding: `2px ${vars.space.lg} 3px`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[800]}`,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.gray[800],
  cursor: 'pointer',
  transition: loginTransition,
  outline: 'none',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[50],
      boxShadow: vars.shadow.sm,
    },
    '&:focus-visible': {
      boxShadow: `0 0 0 3px ${vars.color.gray[800]}40`,
    },
    '&:active': {
      backgroundColor: vars.color.gray[200],
    },
  },
});

export const loginButton = style([
  loginButtonBase,
  {
    height: '32px',
    fontSize: vars.fontSize.sm,
    borderRadius: vars.radius.md,
    '@media': {
      [breakpoint.md]: {
        height: '40px',
        fontSize: vars.fontSize.base,
        borderRadius: vars.radius.lg,
      },
    },
  },
]);

export const profileWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  flexShrink: 0,
});
