import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  marginTop: '16px', // mt-4
  paddingBottom: '10rem', // pb-[10rem]
  '@media': {
    'screen and (min-width: 768px)': {
      marginTop: '24px', // md:mt-6
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const idText = style({
  fontWeight: 500, // font-medium
  color: '#374151', // text-gray-800
});

export const navGroup = style({
  display: 'flex',
  gap: '10px', // gap-[10px]
});

export const navBtn = style({
  cursor: 'pointer',
  selectors: {
    '&:disabled': {
      opacity: 0.3,
      cursor: 'not-allowed',
    },
  },
});

export const buttonWrapper = style({
  display: 'flex',
  height: '40px', // h-10
  gap: '12px', // gap-3
  '@media': {
    'screen and (min-width: 768px)': {
      height: '48px', // md:h-12
      justifyContent: 'flex-end', // md:justify-end
    },
  },
});

export const actionBtn = style({
  width: '100%', // w-full
  '@media': {
    'screen and (min-width: 768px)': {
      width: '158px', // md:w-[158px]
    },
  },
});

export const previewIframe = style({
  marginTop: '32px', // mt-8
  width: '100%',
  border: '0',
  height: 'calc(100vh - 200px)', // 최초 코드의 스타일 유지
});

// 임시로 modal을 여기에 붙여 넣었음-swlee 기존 코드 아래에 추가

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

export const modalContent = style({
  backgroundColor: '#ffffff',
  padding: '24px',
  borderRadius: '16px',
  width: '90%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
});

export const modalTitle = style({
  fontSize: '18px',
  fontWeight: 600,
  color: '#1f2937', // text-gray-900
  textAlign: 'center',
});

export const modalTextarea = style({
  width: '100%',
  height: '120px',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb', // border-gray-200
  fontSize: '14px',
  resize: 'none',
  ':focus': {
    outline: 'none',
    borderColor: '#3b82f6', // focus:border-blue-500
  },
});

export const modalButtonGroups = style({
  display: 'flex',
  gap: '8px',
  justifyContent: 'flex-end',
});

export const cancelBtn = style({
  padding: '8px 16px',
  borderRadius: '8px',
  backgroundColor: '#f3f4f6', // bg-gray-100
  color: '#4b5563', // text-gray-600
  fontWeight: 500,
  cursor: 'pointer',
  border: 'none',
  ':hover': {
    backgroundColor: '#e5e7eb',
  },
});

export const confirmBtn = style({
  padding: '8px 16px',
  borderRadius: '8px',
  backgroundColor: '#ef4444', // bg-red-500 (거절 확정이므로 빨간색 권장)
  color: '#ffffff',
  fontWeight: 500,
  cursor: 'pointer',
  border: 'none',
  ':hover': {
    backgroundColor: '#dc2626',
  },
});
