import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';
import { breakpoint } from '@/styles/breakpoints.css';

export const page = style({
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
});

export const hero = style({
  position: 'relative',
  width: '100%',
  minHeight: 278, // 기본: mobile
  padding: '56px 16px', // 기본: mobile
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  boxSizing: 'border-box',

  // 반응형 시작
  '@media': {
    [breakpoint.md]: {
      minHeight: 360, // iPad mini 이상
      padding: '72px 24px',
    },
    [breakpoint.lg]: {
      minHeight: 420, // desktop 이상
      padding: '96px 24px',
    },
  },
});

export const heroImage = style({
  objectFit: 'cover',
  objectPosition: 'center',
  zIndex: 0,
});

export const heroContent = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 760,
  textAlign: 'center',
});

export const heroLogo = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontFamily: vars.fontFamily.quantico,
  fontWeight: vars.fontWeight.bold,
  fontSize: '18px', // 기본: mobile
  color: '#d8d8d8',
  letterSpacing: '0.2889px',
  marginBottom: '8px',

  // 반응형 시작
  '@media': {
    [breakpoint.md]: {
      fontSize: '20px', // iPad mini 이상
    },
    [breakpoint.lg]: {
      fontSize: '22.68px', // desktop 이상
    },
  },
});

export const heroHeadline = style({
  margin: 0,
  marginTop: '12px', // 기본: mobile
  fontWeight: vars.fontWeight.semibold,
  fontSize: '24px', // 기본: mobile
  lineHeight: 1.4, // 기본: mobile
  color: vars.color.white,
  textAlign: 'center',
  letterSpacing: '0.39px',
  whiteSpace: 'pre-line',

  // 반응형 시작
  '@media': {
    [breakpoint.md]: {
      marginTop: '14px',
      fontSize: '32px', // iPad mini 이상
      lineHeight: 1.35,
    },
    [breakpoint.lg]: {
      marginTop: '16px',
      fontSize: '40px', // desktop 이상
      lineHeight: 1.3,
    },
  },
});

export const heroCtaWrap = style({
  marginTop: '24px', // 기본: mobile

  // 반응형 시작
  '@media': {
    [breakpoint.md]: {
      marginTop: '26px', // iPad mini 이상
    },
    [breakpoint.lg]: {
      marginTop: '32px', // desktop 이상
    },
  },
});

export const main = style({
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 16px 80px', // 기본: mobile
  boxSizing: 'border-box',

  // 반응형 시작
  '@media': {
    [breakpoint.md]: {
      paddingLeft: 24, // iPad mini 이상
      paddingRight: 24,
      paddingBottom: 96,
    },
    [breakpoint.lg]: {
      paddingLeft: 32, // desktop 이상
      paddingRight: 32,
      paddingBottom: 120,
    },
  },
});

export const section = style({
  display: 'grid',
  gridTemplateColumns: '1fr', // 기본: mobile 1열
  gap: 24,
  alignItems: 'start',
  paddingTop: 56,
  paddingBottom: 56,

  // 반응형 시작
  '@media': {
    [breakpoint.md]: {
      gap: 32, // iPad mini 이상
      paddingTop: 72,
      paddingBottom: 72,
    },
    [breakpoint.lg]: {
      gridTemplateColumns: '1fr 1fr', // desktop 이상 2열
      gap: 64,
      paddingTop: 100,
      paddingBottom: 100,
    },
  },
});

export const sectionContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const sectionIcon = style({
  width: 24,
  height: 24,
  flexShrink: 0,
  color: vars.color.gray[800],
});

export const sectionTitle = style({
  margin: 0,
  fontWeight: vars.fontWeight.bold,
  fontSize: '24px', // 기본: mobile
  lineHeight: 1.4,
  color: vars.color.gray[900],
  letterSpacing: '0.39px',
  whiteSpace: 'pre-line',

  // 반응형 시작
  '@media': {
    [breakpoint.md]: {
      fontSize: '28px', // iPad mini 이상
      lineHeight: 1.35,
    },
    [breakpoint.lg]: {
      fontSize: '32px', // desktop 이상
      lineHeight: '44px',
    },
  },
});

export const sectionDescription = style({
  margin: 0,
  fontWeight: vars.fontWeight.regular,
  fontSize: '14px', // 기본: mobile
  lineHeight: 1.6,
  color: '#676767',
  letterSpacing: '0.2px',
  whiteSpace: 'pre-line',

  // 반응형 시작
  '@media': {
    [breakpoint.md]: {
      fontSize: '16px', // iPad mini 이상
      lineHeight: 1.6,
    },
    [breakpoint.lg]: {
      fontSize: '18px', // desktop 이상
      lineHeight: 1.7,
    },
  },
});

export const sectionImage = style({
  width: '100%',
  height: 'auto',
  display: 'block',
  objectFit: 'cover',
  borderRadius: 14, // 기본: mobile

  // 반응형 시작
  '@media': {
    [breakpoint.md]: {
      borderRadius: 18, // iPad mini 이상
    },
    [breakpoint.lg]: {
      borderRadius: 20, // desktop 이상
    },
  },
});

export const divider = style({
  width: '100%',
  maxWidth: '100%',
  height: 1,
  margin: '0 auto',
  backgroundColor: vars.color.gray[200],
  border: 'none',
});

export const ctaBlock = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20, // 기본: mobile
  paddingTop: 40,
  paddingBottom: 72,

  // 반응형 시작
  '@media': {
    [breakpoint.md]: {
      gap: 24, // iPad mini 이상
      paddingTop: 56,
      paddingBottom: 88,
    },
    [breakpoint.lg]: {
      gap: 28, // desktop 이상
      paddingTop: 72,
      paddingBottom: 100,
    },
  },
});

export const ctaTitle = style({
  margin: 0,
  fontWeight: vars.fontWeight.semibold,
  fontSize: '18px', // 기본: mobile
  lineHeight: 1.5,
  color: vars.color.gray[900],
  textAlign: 'center',
  letterSpacing: '0.39px',

  // 반응형 시작
  '@media': {
    [breakpoint.md]: {
      fontSize: '22px', // iPad mini 이상
    },
    [breakpoint.lg]: {
      fontSize: '24px', // desktop 이상
      lineHeight: '32px',
    },
  },
});

export const footer = style({
  width: '100%',
  borderTop: `1px solid ${vars.color.gray[200]}`,
  backgroundColor: vars.color.white,
});

export const footerInner = style({
  maxWidth: 1200,
  margin: '0 auto',
  padding: '28px 16px 36px', // 기본: mobile
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,

  // 반응형 시작
  '@media': {
    [breakpoint.md]: {
      padding: '32px 24px 40px', // iPad mini 이상
    },
    [breakpoint.lg]: {
      padding: '36px 32px 44px', // desktop 이상
    },
  },
});

export const footerLogo = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: vars.fontFamily.quantico,
  fontWeight: vars.fontWeight.bold,
  fontSize: vars.fontSize.base,
  color: vars.color.gray[900],

  // 반응형 시작
  '@media': {
    [breakpoint.lg]: {
      fontSize: '18px', // desktop 이상
    },
  },
});

export const footerText = style({
  margin: 0,
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.fontSize.sm,
  lineHeight: 1.6,
  color: vars.color.gray[600],
  whiteSpace: 'pre-line',

  // 반응형 시작
  '@media': {
    [breakpoint.lg]: {
      fontSize: '15px', // desktop 이상
    },
  },
});

export const footerCopyright = style({
  margin: 0,
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.fontSize.xs,
  lineHeight: 1.5,
  color: vars.color.gray[500],

  // 반응형 시작
  '@media': {
    [breakpoint.lg]: {
      fontSize: '13px', // desktop 이상
    },
  },
});
