import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  marginBottom: '160px',
  boxSizing: 'border-box',
});

export const contentWrapper = style({
  width: '1200px',
  paddingTop: '40px',

  '@media': {
    'screen and (max-width: 1199px)': {
      width: '744px',
      padding: '24px 24px 0',
      boxSizing: 'border-box',
    },
    'screen and (max-width: 743px)': {
      width: '375px',
      padding: '16px 16px 0',
      boxSizing: 'border-box',
    },
  },
});

export const layout = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '32px',
  // 오른쪽 패널 높이만큼 왼쪽 열도 늘려야 프로필 박스(sticky)가 스크롤 중 고정됨
  alignItems: 'stretch',

  '@media': {
    'screen and (max-width: 743px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
});

export const leftPanel = style({
  width: '280px',
  flexShrink: 0,

  '@media': {
    'screen and (max-width: 1199px)': {
      width: '220px',
    },
    'screen and (max-width: 743px)': {
      width: '100%',
    },
  },
});

export const rightPanel = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  minWidth: 0,
});

export const statusWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '400px',
  fontSize: '16px',
  color: '#6b7280',
});
