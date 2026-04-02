import { style } from '@vanilla-extract/css';

export const toolbar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  padding: '8px 12px',
  borderBottom: '1px solid #e5e7eb',
  flexWrap: 'wrap',
  backgroundColor: '#ffffff',
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '14px',
  fontWeight: 700,
  color: '#374151',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: '#f3f4f6',
    },
    '&[data-active="true"]': {
      backgroundColor: '#e5e7eb',
      color: '#111827',
    },
  },
});

export const divider = style({
  width: '1px',
  height: '20px',
  backgroundColor: '#e5e7eb',
  margin: '0 4px',
});
