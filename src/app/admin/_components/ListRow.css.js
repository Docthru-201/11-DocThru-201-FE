import { style } from '@vanilla-extract/css';

export const rowLayout = style({
  display: 'grid',
  gridTemplateColumns: '0.6fr 1.2fr 1fr 4.4fr 1.2fr 1.2fr 1.2fr 1.2fr',
  width: '100%',
  minWidth: '670px',
  height: '56px', // 데이터 행은 조금 더 여유 있게
  borderBottom: '1px solid #f3f4f6',
  backgroundColor: '#ffffff',
  transition: 'background-color 0.2s',
  // selectors: {
  //   "&:hover": {
  //     backgroundColor: "#f9fafb",
  //     cursor: "pointer",
  //   },
  // },
});

export const tableCell = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 4px',
  fontSize: '14px',
  color: '#374151',
});

export const colTitle = style([
  tableCell,
  {
    justifyContent: 'flex-start',
    fontWeight: '500',
    color: '#111827',
  },
]);

// 나머지 칸들 (필요시 추가 설정)
export const colId = style({ paddingLeft: '16px' });
export const colText = style({});
