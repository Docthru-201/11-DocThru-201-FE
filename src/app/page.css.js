import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';
import { breakpoint } from '@/styles/breakpoints.css';

const pageFadeIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(8px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const scrollTopFabIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(14px) scale(0.94)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
});

export const page = style({
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
  animation: `${pageFadeIn} 420ms ease-out`,
  willChange: 'opacity',
});

export const hero = style({
  position: 'relative',
  width: '100%',
  height: 278,
  minHeight: 278,
  padding: '56px 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  boxSizing: 'border-box',
});

export const heroImage = style({
  objectFit: 'cover',
  objectPosition: 'center',
  zIndex: 0,
  height: '278px',
});

export const heroContent = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 420,
  textAlign: 'center',
});

export const heroLogo = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.sm,
  fontFamily: vars.fontFamily.quantico,
  fontWeight: vars.fontWeight.bold,
  fontSize: '22.68px',
  fontFeatureSettings: `'liga' off, 'clig' off`,
  color: '#d8d8d8',
  letterSpacing: '0.2889px',
  marginBottom: 0,
});

export const heroHeadline = style({
  margin: 0,
  marginTop: '15.65px',
  fontWeight: vars.fontWeight.semibold,
  fontSize: '24px',
  lineHeight: '36px',
  color: vars.color.white,
  textAlign: 'center',
  letterSpacing: '0.39px',
  whiteSpace: 'pre-line',
});

export const heroCtaWrap = style({
  marginTop: 24,
});

export const main = style({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '60px 16px 0',
  boxSizing: 'border-box',
  '@media': {
    [breakpoint.md]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
    [breakpoint.lg]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
  },
});

export const section = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '32px',
  alignItems: 'start',
  justifyItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
  '@media': {
    [breakpoint.lg]: {
      gridTemplateColumns: 'minmax(0, 309px) minmax(0, 570px)',
      gap: '64px',
      alignItems: 'start',
      justifyItems: 'start',
      justifyContent: 'center',
    },
  },
});

export const sectionContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 8,
  width: '100%',
  maxWidth: '309px',
  boxSizing: 'border-box',
  margin: '40px 0 0 8px',
  '@media': {
    [breakpoint.maxSm]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

export const sectionTextBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%',
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
  fontSize: '24px',
  lineHeight: '32px',
  color: '#000000',
  letterSpacing: '0.39px',
  whiteSpace: 'pre-line',
  textAlign: 'left',
});

export const sectionDescription = style({
  margin: 0,
  fontWeight: vars.fontWeight.regular,
  fontSize: '16px',
  lineHeight: 'normal',
  color: '#676767',
  letterSpacing: '0.39px',
  whiteSpace: 'pre-line',
  textAlign: 'left',
});

export const sectionImage = style({
  width: '100%',
  maxWidth: '570px',
  height: 'auto',
  display: 'block',
  objectFit: 'cover',
  borderRadius: '14.25px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '24px',
  '@media': {
    [breakpoint.lg]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
});

export const divider = style({
  width: '100%',
  maxWidth: '991px',
  height: 1,
  margin: '5px auto',
  border: 'none',
  backgroundImage: `repeating-linear-gradient(to right, #B2B2B2 0 4px, transparent 4px 8px)`,
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'center',
  boxSizing: 'border-box',
});

export const ctaBlock = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
  paddingTop: '96.43px',
  paddingBottom: '123px',

  // 반응형 시작
  // '@media': {
  //   [breakpoint.md]: {
  //     gap: 24, // iPad mini 이상
  //     paddingTop: 56,
  //     paddingBottom: 88,
  //   },
  //   [breakpoint.sm]: {
  // gap: 28, // desktop 이상
  // paddingTop: 72,
  // paddingBottom: 100,
  //   },
  // },
});

export const ctaTitle = style({
  margin: 0,
  fontWeight: vars.fontWeight.semibold,
  fontSize: '18px', // 기본: mobile
  lineHeight: 1.5,
  color: vars.color.gray[900],
  textAlign: 'center',
  letterSpacing: '0.39px',

  // '@media': {
  //   [breakpoint.md]: {
  //     fontSize: '22px', // iPad mini 이상
  //   },
  //   [breakpoint.lg]: {
  //     fontSize: '24px', // desktop 이상
  //     lineHeight: '32px',
  //   },
  // },
});

export const footer = style({
  width: '100%',
  borderTop: `1px solid ${vars.color.gray[200]}`,
  backgroundColor: '#fdfdfd',
});

export const footerInner = style({
  maxWidth: 1200,
  margin: '0 auto',
  padding: '28px 16px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  boxSizing: 'border-box',

  // '@media': {
  //   [breakpoint.md]: {
  //     padding: '32px 24px',
  //   },
  //   [breakpoint.lg]: {
  //     padding: '36px 32px 30px',
  //   },
  // },
});

export const footerTop = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  '@media': {
    [breakpoint.md]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 24,
    },
  },
});

export const footerBrand = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 8,
});

export const footerLogo = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: vars.fontFamily.quantico,
  fontWeight: vars.fontWeight.bold,
  fontSize: vars.fontSize.base,
  color: vars.color.gray[900],

  // 반응형 시작
  // '@media': {
  //   [breakpoint.lg]: {
  //     fontSize: '18px', // desktop 이상
  //   },
  // },
});

export const footerText = style({
  margin: 0,
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.fontSize.sm,
  lineHeight: 1.5,
  color: vars.color.gray[600],
  whiteSpace: 'pre-line',
  textAlign: 'left',

  // 반응형 시작
  // '@media': {
  //   [breakpoint.md]: {
  //     fontSize: '15px', // desktop 이상
  //   },
  // },
});

export const footerNav = style({
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  flexWrap: 'wrap',
});

export const footerLink = style({
  color: vars.color.gray[600],
  textDecoration: 'none',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  selectors: {
    '&:hover': {
      color: vars.color.gray[900],
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
    },
  },
});

export const footerDivider = style({
  width: '100%',
  height: 1,
  margin: 0,
  border: 'none',
  backgroundColor: vars.color.gray[200],
  // backgroundImage: `repeating-linear-gradient(to right, ${vars.color.gray[200]} 0 4px, transparent 4px 8px)`,
  // backgroundRepeat: 'repeat-x',
  // backgroundPosition: 'center',
});

export const footerBottom = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
  flexWrap: 'wrap',
});

export const footerCopyright = style({
  margin: 0,
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.fontSize.xs,
  lineHeight: 1.5,
  color: vars.color.gray[500],

  // '@media': {
  //   [breakpoint.lg]: {
  //     fontSize: '13px', // desktop 이상
  //   },
  // },
});

export const scrollToTopButton = style({
  position: 'fixed',
  right: 16,
  bottom: 24,
  zIndex: 100,
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  borderRadius: '50%',
  border: `1px solid ${vars.color.gray[200]}`,
  backgroundColor: vars.color.white,
  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)',
  cursor: 'pointer',
  opacity: 0,
  pointerEvents: 'none',
  transform: 'translateY(12px)',
  transition: 'opacity 0.22s ease, transform 0.22s ease',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[50],
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.gray[800]}`,
      outlineOffset: 2,
    },
  },
  // '@media': {
  //   [breakpoint.md]: {
  //     right: 24,
  //     bottom: 32,
  //   },
  // },
});

export const scrollToTopButtonVisible = style({
  opacity: 1,
  pointerEvents: 'auto',
  animation: `${scrollTopFabIn} 0.32s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
});

export const scrollToTopIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'rotate(-90deg)',
});
