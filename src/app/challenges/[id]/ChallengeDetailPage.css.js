import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  marginBottom: '160px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  width: '100%',
});

export const contentWrapper = style({
  width: '100%',
  maxWidth: 'var(--container-challenge, 1200px)',
});

export const topSection = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '16px',
  '@media': {
    'screen and (min-width: 744px)': {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: '24px',
    },
  },
});

export const leftInfoArea = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '12px',
  paddingTop: '16px',
  '@media': {
    'screen and (min-width: 744px)': {
      width: '66.6666%',
      paddingTop: '24px',
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
});

export const rightSidebarArea = style({
  width: '100%',
  '@media': {
    'screen and (min-width: 744px)': {
      width: '33.3333%',
      marginTop: '24px',
    },
  },
});

export const rankingSection = style({
  width: '100%',
  borderRadius: '12px',
  border: '2px solid #1f2937',
  backgroundColor: '#ffffff',
  marginTop: '32px',
  overflow: 'hidden',
});

export const rankingHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 16px',
  borderBottom: '1px solid #f3f4f6',
});

export const rankingTitle = style({
  fontSize: '18px',
  fontWeight: 600,
});

export const paginationGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const currentPageText = style({
  fontWeight: 600,
  color: '#f59e0b',
});

export const totalPageText = style({
  color: '#1f2937',
});

export const paginationIcon = style({
  cursor: 'pointer',
  selectors: {
    "&[data-disabled='true']": {
      opacity: 0.3,
      cursor: 'not-allowed',
    },
  },
});

export const rankingListContainer = style({
  padding: '0 16px',
});

export const emptyText = style({
  padding: '40px 0',
  textAlign: 'center',
  color: '#6b7280',
  lineHeight: '1.5',
});

export const statusWrapper = style({
  textAlign: 'center',
  padding: '40px',
});

export const bestWorkWrapper = style({
  marginBottom: '24px',
});
