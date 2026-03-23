import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';
import { breakpoint } from '@/styles/breakpoints.css';

export const gnb = style({
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

// export const logowrapper = style({
//   padding: '0 5.4px',
//   display: 'flex',
// });

export const logo = style({
  width: '120px',
  height: '27px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 5.4px',
  gap: '5.4px',
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

globalStyle(`${logoIcon} img`, {
  width: '95%',
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
  width: '90px',
});

export const profileWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  flexShrink: 0,
});

/** 멤버 프로필(노란 아이콘) + 드롭다운 */
export const memberMenu = style({
  position: 'relative',
  flexShrink: 0,
});

export const memberTrigger = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  padding: 0,
  margin: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  borderRadius: vars.radius.full,
  outline: 'none',
  selectors: {
    '&:focus-visible': {
      boxShadow: `0 0 0 2px ${vars.color.gray[400]}`,
    },
  },
});

const figmaGray100 = '#F5F5F5';

export const memberDropdown = style({
  position: 'absolute',
  top: 'calc(100% + 8px)',
  right: 0,
  zIndex: 100,
  width: '152px',
  height: '137px',
  overflow: 'hidden',
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.md,
  border: `2px solid ${vars.color.gray[100]}`,
  boxShadow: vars.shadow.md,
  // boxSizing: 'border-box',
});

export const memberDropdownHeader = style({
  display: 'flex',
  flexDirection: 'row',
  // alignItems: 'flex-start',
  width: '80%',
  margin: '0 auto',
  gap: vars.space.sm,
  paddingTop: vars.space.md,
  paddingBottom: vars.space.sm,
  borderBottom: `2px solid ${vars.color.gray[100]}`,
  alignItems: 'center',
});

export const memberDropdownAvatar = style({
  display: 'flex',
  flexShrink: 0,
  width: 32,
  height: 32,
  alignItems: 'center',
  justifyContent: 'center',
});

export const memberDropdownMeta = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  // gap: '2px',
  minWidth: 0,
});

export const memberDropdownName = style({
  margin: 0,
  fontFamily: vars.fontFamily.pretendard,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[800],
  whiteSpace: 'nowrap',
});

export const memberDropdownGrade = style({
  margin: 0,
  fontFamily: vars.fontFamily.pretendard,
  fontSize: vars.fontSize['2xs'],
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[500],
  whiteSpace: 'nowrap',
});

export const memberDropdownList = style({
  listStyle: 'none',
  margin: '8px 0',
  padding: 0,
  width: '100%',
});

export const memberDropdownItem = style({
  margin: 0,
  padding: 0,
  width: '100%',
});

const menuItemBase = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minHeight: '32px',
  paddingLeft: vars.space.lg,
  // paddingRight: vars.space.sm,
  fontFamily: vars.fontFamily.pretendard,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.normal,
  textAlign: 'left',
  cursor: 'pointer',
  textDecoration: 'none',
  backgroundColor: vars.color.white,
  outline: 'none',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[50],
    },
    '&:focus-visible': {
      boxShadow: `inset 0 0 0 2px ${vars.color.gray[300]}`,
    },
  },
});

export const memberDropdownLink = style([
  menuItemBase,
  {
    color: vars.color.gray[600],
  },
]);

export const memberDropdownLogout = style([
  menuItemBase,
  {
    color: vars.color.gray[400],
    borderTop: `1px solid ${figmaGray100}`,
  },
]);

/** 어드민 드롭다운: 하단 메뉴가 로그아웃만 있을 때(상단 구분선 아래 단일 행) */
export const adminDropdownLogout = style([
  menuItemBase,
  {
    color: vars.color.gray[400],
  },
]);
