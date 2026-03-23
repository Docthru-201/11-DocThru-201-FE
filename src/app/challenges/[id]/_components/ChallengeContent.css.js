import { style } from '@vanilla-extract/css';

export const articleContainer = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '16px',
});

export const header = style({
  position: 'relative', // meatballsMenu 버튼의 부모로서 relative 기준점
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const title = style({
  fontSize: '20px',
  fontWeight: 600,
  color: '#1f2937',
  lineHeight: 1.4,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '24px',
    },
  },
});

export const chipGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
});

export const descriptionText = style({
  fontSize: '14px',
  fontWeight: 500,
  color: '#374151',
  lineHeight: 1.6,
  whiteSpace: 'pre-wrap',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '16px',
    },
  },
});

// 드롭다운 컨테이너 (meatballsMenu 클릭 시 나오는 박스)
export const adminDropdownMenu = style({
  position: 'absolute',
  top: '16px',
  right: 0,
  zIndex: 10,
  marginTop: '8px',
  width: '112px',
  borderRadius: '6px',
  border: '1px solid #e5e7eb',
  backgroundColor: '#ffffff',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
});

// 드롭다운 내부 '취소하기' 버튼
export const adminDropdownButton = style({
  display: 'block',
  width: '100%',
  padding: '8px 16px',
  textAlign: 'center',
  fontSize: '14px',
  color: '#374151',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#f3f4f6',
  },
});
