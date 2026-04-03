import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const container = styleVariants({
  large: {
    width: '285px',
    height: '176px',

    '@media': {
      'screen and (max-width: 767px)': {
        width: '100%',
        height: 'auto',
      },
    },
  },
  medium: {
    width: '251px',
    height: '176px',
  },
  small: {
    width: '343px',
    height: '104px',
  },
});

export const baseContainer = style({
  position: 'relative',
  backgroundColor: vars.color.white,
  border: `2px solid #f5f5f5`,
  borderRadius: '16px',
  boxSizing: 'border-box',
  overflow: 'hidden',

  '@media': {
    'screen and (max-width: 767px)': {
      width: '100%',
      borderRadius: '20px',
    },
  },
});

export const inner = styleVariants({
  large: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    padding: '24px 16px',

    '@media': {
      'screen and (max-width: 767px)': {
        height: 'auto',
        padding: '20px 16px',
        gap: '16px',
      },
    },
  },
  medium: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    justifyContent: 'center',
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  small: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '16px',
    paddingLeft: '23px',
    paddingRight: '23px',
    paddingTop: '12px',
  },
});

export const metricsRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  width: '100%',
});

export const metricsWrap = styleVariants({
  large: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    width: '100%',

    '@media': {
      'screen and (max-width: 767px)': {
        justifyContent: 'center',
        flexWrap: 'wrap',
        rowGap: '4px',
      },
    },
  },
  medium: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  small: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    width: '100%',
  },
});

export const deadlinePersonRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const metricItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const metricText = style({
  fontFamily: vars.fontFamily.pretendard,
  fontWeight: vars.fontWeight.regular,
  fontSize: '13px',
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[600],
  whiteSpace: 'nowrap',
});

export const buttonsWrap = styleVariants({
  small: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    width: '100%',
    alignSelf: 'stretch',
  },
  medium: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '219px',
    alignSelf: 'center',
  },
  large: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '253px',
    alignSelf: 'center',

    '@media': {
      'screen and (max-width: 767px)': {
        width: '100%',
        alignSelf: 'stretch',
      },
    },
  },
});

/** vanilla-extract는 `& > button` 같은 타입 셀렉터를 style 블록에 둘 수 없어 globalStyle 사용 */
globalStyle(`${buttonsWrap.small} > button`, {
  flex: '1 0 0',
  width: 'auto',
  minWidth: '0',
});

globalStyle(`${buttonsWrap.medium} > button`, {
  width: '100%',
});

globalStyle(`${buttonsWrap.large} > button`, {
  width: '100%',
});

export const originalButton = style({
  height: '40px',
  minHeight: '40px',
  borderRadius: '12px',
  backgroundColor: vars.color.brand.point,
  border: `2px solid ${vars.color.gray[800]}`,
  color: vars.color.gray[800],
  fontFamily: vars.fontFamily.pretendard,
  fontWeight: vars.fontWeight.bold,
  fontSize: '14px',
  lineHeight: '26px',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  boxSizing: 'border-box',

  '@media': {
    'screen and (max-width: 767px)': {
      height: '48px',
      minHeight: '48px',
      borderRadius: '16px',
      fontSize: '16px',
    },
  },
});

export const actionButton = style({
  height: '40px',
  minHeight: '40px',
  borderRadius: '12px',
  backgroundColor: vars.color.gray[800],
  border: 'none',
  color: vars.color.white,
  fontFamily: vars.fontFamily.pretendard,
  fontWeight: vars.fontWeight.bold,
  fontSize: '14px',
  lineHeight: '26px',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  boxSizing: 'border-box',

  '@media': {
    'screen and (max-width: 767px)': {
      height: '48px',
      minHeight: '48px',
      borderRadius: '16px',
      fontSize: '16px',
    },
  },
});

export const disabled = style({
  backgroundColor: '#E0E0E0',
  color: '#9E9E9E',
  cursor: 'not-allowed',
  pointerEvents: 'none',
});
