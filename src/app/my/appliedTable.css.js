import { style } from '@vanilla-extract/css';

export const appliedWrap = style({
  width: '100%',
  maxWidth: '996px',
  margin: '0 auto',
});

export const filterRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
});

export const sortWrap = style({
  position: 'relative',
});

export const sortDropdown = style({
  position: 'absolute',
  right: 0,
  marginTop: '4px',
  width: '139px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  border: '1px solid #E5E5E5',
  overflow: 'hidden',
  zIndex: 10,
});

export const sortOption = style({
  color: '#737373',
  display: 'block',
  width: '100%',
  height: '43px',
  padding: '0 16px',
  textAlign: 'left',
  border: 'none',
  backgroundColor: '#ffffff',
  fontSize: '14px',
  lineHeight: '43px',
  cursor: 'pointer',
  selectors: {
    '&:not(:last-child)': {
      borderBottom: '1px solid #EEEEEE',
    },
    '&:hover': {
      backgroundColor: '#F5F5F5',
    },
  },
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '24px',
  fontSize: '14px',
});

export const tableSection = style({
  marginTop: '16px',
});

export const searchApplied = style({
  flex: 1,
});

export const sort = style({
  height: '40px',
  fontSize: '16px',
  width: '139px',
  color: '#A3A3A3',
  whiteSpace: 'nowrap',
  paddingLeft: '8px',
});

export const headerCell = style({
  padding: '8px 20px',
  marginBottom: '80px',
  textAlign: 'left',
  verticalAlign: 'middle',
  fontWeight: 600,
  color: '#fff',
  backgroundColor: '#262626',
  fontSize: '13px',
});

export const headerFirst = style({
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '8px',
});

export const headerLast = style({
  borderTopRightRadius: '8px',
  borderBottomRightRadius: '8px',
});

export const headerGapCell = style({
  height: '8px',
});

export const bodyCell = style({
  padding: '14px 20px',
  fontSize: '13px',
  fontWeight: 400,
  color: '#737373',
  borderBottom: '1px solid #eee',
});

export const bodyTitleCell = style({
  padding: '14px 20px',
  borderBottom: '1px solid #eee',
  textAlign: 'left',
  verticalAlign: 'middle',
  color: '#333',
  fontWeight: 500,
});

export const row = style({
  backgroundColor: '#fff',
});
