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
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    'screen and (max-width: 1199px)': {
      width: '744px',
      padding: '0 24px',
      boxSizing: 'border-box',
    },
    'screen and (max-width: 743px)': {
      width: '375px',
      padding: '0 16px',
      boxSizing: 'border-box',
    },
  },
});

export const dividerWrapper = style({
  padding: '0 20px',
});

export const topSection = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  gap: '24px',
  marginBottom: '32px',

  '@media': {
    'screen and (max-width: 743px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '24px',
    },
  },
});

export const leftInfoArea = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  paddingTop: '24px',
  minWidth: 0,

  '@media': {
    'screen and (max-width: 743px)': {
      width: '100%',
      paddingTop: '16px',
    },
  },
});

export const authorInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginTop: '8px',
});

export const authorNickname = style({
  fontSize: '14px',
  fontWeight: 500,
  color: '#374151',
});

export const authorImage = style({
  borderRadius: '50%',
  overflow: 'hidden',
});

export const rightSidebarArea = style({
  width: '320px',
  flexShrink: 0,
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'flex-end',

  '@media': {
    'screen and (max-width: 1199px)': {
      width: '300px',
    },
    'screen and (max-width: 743px)': {
      width: '100%',
      justifyContent: 'center',
      marginTop: '8px',
    },
  },
});

export const rankingSection = style({
  width: '100%',
  borderRadius: '12px',
  border: '2px solid #1f2937',
  backgroundColor: '#ffffff',
  marginTop: '40px',
  overflow: 'hidden',
  boxSizing: 'border-box',

  '@media': {
    'screen and (max-width: 743px)': {
      marginTop: '32px',
    },
  },
});

export const rankingHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 20px',
  borderBottom: 'none',

  '@media': {
    'screen and (max-width: 743px)': {
      padding: '12px 16px',
    },
  },
});

export const rankingTitle = style({
  fontSize: '18px',
  fontWeight: 700,
  color: '#111827',
});

export const paginationGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const currentPageText = style({
  fontWeight: 700,
  color: '#f59e0b',
});

export const totalPageText = style({
  fontWeight: 500,
  color: '#6b7280',
});

export const rankingListContainer = style({
  width: '100%',
  margin: '0 auto',
  padding: '0 24px 40px 24px',
  boxSizing: 'border-box',

  '@media': {
    'screen and (max-width: 1199px)': {
      maxWidth: '686px',
      padding: '0 16px 24px 16px',
    },
    'screen and (max-width: 743px)': {
      maxWidth: '100%',
      padding: '0 8px 16px 8px',
    },
  },
});

export const emptyText = style({
  padding: '80px 0',
  textAlign: 'center',
  color: '#9ca3af',
  fontSize: '15px',
  lineHeight: '1.6',
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

export const bestWorkWrapper = style({
  width: '100%',
  marginTop: '32px',
  marginBottom: '8px',
});
