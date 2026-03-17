import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '40px',
  backgroundColor: '#ffffff',
});

export const title = style({
  fontSize: '24px',
  fontWeight: '700',
  marginBottom: '30px',
  color: '#1a1a1a',
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
});

export const tableHeader = style({
  backgroundColor: '#f8f9fa',
  borderBottom: '2px solid #e9ecef',
});

export const headerCell = style({
  padding: '15px',
  textAlign: 'left',
  fontWeight: '600',
  color: '#495057',
});

export const tableRow = style({
  borderBottom: '1px solid #eee',
  cursor: 'pointer', // 상세 이동을 위해 추가
  selectors: {
    '&:hover': {
      backgroundColor: '#fcfcfc', // 기존 유지
    },
  },
});

export const tableCell = style({
  padding: '15px',
  fontSize: '14px',
  color: '#333',
});

// export const fieldTag = style({
//   background: '#e7f5ff',
//   color: '#1971c2',
//   padding: '4px 8px',
//   borderRadius: '4px',
//   fontSize: '12px',
// });

export const statusBadge = style({
  background: '#f1f3f5',
  padding: '4px 10px',
  borderRadius: '20px',
  fontSize: '12px',
  color: '#666',
});

/* --- 추가된 페이지네이션 스타일 --- */
export const paginationContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  marginTop: '40px',
});

export const pageButton = style({
  padding: '8px 14px',
  border: '1px solid #dee2e6',
  borderRadius: '4px',
  backgroundColor: '#ffffff',
  color: '#495057',
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'all 0.2s ease',
  selectors: {
    '&:disabled': {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    '&:hover:not(:disabled)': {
      backgroundColor: '#f8f9fa',
    },
  },
});

export const activePageButton = style([
  pageButton,
  {
    backgroundColor: '#1971c2', // fieldTag와 톤을 맞춘 블루 계열
    color: '#ffffff',
    borderColor: '#1971c2',
    fontWeight: '600',
  },
]);

export const loadingWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '100px 0',
});

/* --- 검색 / 정렬 영역 --- */
export const searchSortWrapper = style({
  display: 'grid',
  gridTemplateColumns: '2.5fr 1fr',
  gap: '12px',
  marginBottom: '16px',

  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: '3.5fr 1fr',
      marginBottom: '24px',
    },
    'screen and (min-width: 1280px)': {
      gridTemplateColumns: '5fr 1fr',
    },
  },
});

export const sortWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const dropdown = style({
  position: 'absolute',
  right: 0,
  marginTop: '8px',
  zIndex: 10,
});

export const emptyState = style({
  textAlign: 'center',
  padding: '60px',
  color: '#888',
});
