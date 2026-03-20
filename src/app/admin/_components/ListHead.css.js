import { style } from '@vanilla-extract/css';

export const rowLayout = style({
  display: 'grid',
  // 8개 컬럼의 너비 비율을 순서대로 정함 (No, 분야, 카테고리, 제목...)
  gridTemplateColumns: '0.6fr 1.2fr 1fr 4.4fr 1.2fr 1.2fr 1.2fr 1.2fr',
  width: '100%',
  minWidth: '670px',
  height: '40px',
});

export const headerCell = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#1f2937',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
});

export const tableHeader = style({});
export const colId = style({
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '8px',
});
export const colCategory = style({});
export const colType = style({});
export const colTitle = style({});
export const colSmall = style({});
export const colStatus = style({
  borderTopRightRadius: '8px',
  borderBottomRightRadius: '8px',
});
