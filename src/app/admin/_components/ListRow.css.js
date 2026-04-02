import { style, globalStyle } from '@vanilla-extract/css';

export const rowLayout = style({
  display: 'grid',
  gridTemplateColumns: '0.6fr 1.2fr 1fr 4.4fr 1.2fr 1.2fr 1.2fr 1.2fr',
  width: '100%',
  minWidth: '670px',
  height: '56px',
  borderBottom: '1px solid #f3f4f6',
  backgroundColor: '#ffffff',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#f9fafb',
    cursor: 'pointer',
  },
});

export const tableCell = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 4px',
  fontSize: '16px',
  color: '#374151',
});

// Chip 내부 텍스트 스타일을 tableCell과 완전히 일치시킴
globalStyle(`${tableCell} span, ${tableCell} div`, {
  color: '#374151 !important',
  fontSize: '16px !important',
  fontWeight: '400 !important',
  backgroundColor: 'transparent !important',
  border: 'none !important',
  padding: '0 !important',
  boxShadow: 'none !important',
  display: 'inline-block !important',
  minWidth: 'auto !important',
  height: 'auto !important',
});

export const colTitle = style([
  tableCell,
  {
    justifyContent: 'flex-start',
    fontWeight: '500',
    color: '#111827',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
]);

export const colId = style({ paddingLeft: '16px' });

export const statusCell = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
