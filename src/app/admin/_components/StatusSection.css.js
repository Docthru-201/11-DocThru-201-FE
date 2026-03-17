import { style } from '@vanilla-extract/css';

export const commonBtnStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '35px',
  marginTop: '16px', // mt-4
  borderRadius: '17.5px',
  fontSize: '14px', // text-sm
  fontWeight: 600,
  '@media': {
    'screen and (min-width: 768px)': {
      marginTop: '24px', // md:mt-6
      fontSize: '16px', // md:text-base
    },
  },
});

// 상태별 스타일 맵
export const statusStyles = {
  PENDING: style([
    commonBtnStyle,
    { backgroundColor: '#FFFDE7', color: '#F2BC00' },
  ]),
  REJECTED: style([
    commonBtnStyle,
    { backgroundColor: '#FFF0F0', color: '#E54946' },
  ]),
  DELETED: style([
    commonBtnStyle,
    { backgroundColor: '#6b7280', color: '#f9fafb' },
  ]),
  APPROVED: style([
    commonBtnStyle,
    { backgroundColor: '#DFF0FF', color: '#4095DE' },
  ]),
};

export const reasonBox = style({
  marginTop: '16px', // mt-4
  display: 'flex',
  height: '149px',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '16px', // rounded-2xl
  border: '1px solid #e5e7eb', // border-gray-200
  backgroundColor: '#f9fafb', // bg-gray-50
  padding: '16px', // p-4
});

export const reasonTitle = style({
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 600,
  color: '#1f2937', // text-gray-800
});

export const reasonContent = style({
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 500,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '16px',
    },
  },
});

export const footerWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  fontSize: '14px',
  fontWeight: 400,
});

export const footerBrand = style({
  color: '#374151', // text-gray-700
});

export const divider = style({
  margin: '0 8px', // mx-2
  display: 'flex',
  height: '16px', // h-4
  flexDirection: 'column',
  border: '1px solid #e5e7eb',
});

export const footerDate = style({
  color: '#6b7280', // text-gray-500
});
