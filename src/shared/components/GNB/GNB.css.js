import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';
import { breakpoint } from '@/styles/breakpoints.css';

export const gnb = style({
  width: '100%',
  minHeight: '56px',
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  backgroundColor: vars.color.white,
  borderBottom: `1px solid ${vars.color.gray[200]}`,
  boxSizing: 'border-box',
  '@media': {
    [breakpoint.md]: {
      minHeight: '60px',
      paddingLeft: vars.space.xl,
      paddingRight: vars.space.xl,
    },
    [breakpoint.lg]: {
      minHeight: '60px',
      paddingLeft: '360px',
      paddingRight: '360px',
    },
  },
});

export const inner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  minHeight: 'inherit',
  boxSizing: 'border-box',
});

export const left = style({
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  flexShrink: 0,
});

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
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

const loginTransition = `background-color ${vars.transition.duration.normal} ${vars.transition.timing.ease}, box-shadow ${vars.transition.duration.normal} ${vars.transition.timing.ease}`;

export const loginButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '32px',
  padding: '2px 16px 3px',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.gray[800],
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[800]}`,
  borderRadius: '10px',
  cursor: 'pointer',
  transition: loginTransition,
  outline: 'none',
  textDecoration: 'none',
  boxSizing: 'border-box',
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
  '@media': {
    [breakpoint.md]: {
      height: '40px',
      fontSize: vars.fontSize.base,
      borderRadius: vars.radius.lg,
    },
  },
});

export const profileWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  flexShrink: 0,
});
