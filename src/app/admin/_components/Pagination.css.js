import { style } from '@vanilla-extract/css';

export const paginationContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  marginTop: '40px',
  paddingBottom: '40px',
  width: '100%',
});

export const numberWrapper = style({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  flexWrap: 'nowrap',
});

export const arrowButton = style({
  flexShrink: 0,
  width: '40px !important',
  height: '40px !important',
  padding: '0 !important',
  display: 'flex !important',
  justifyContent: 'center !important',
  alignItems: 'center !important',
  backgroundColor: 'transparent !important',
  border: 'none !important',
  cursor: 'pointer',
  color: '#9ca3af',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1',

  selectors: {
    '&:disabled': {
      opacity: 0.2,
      cursor: 'not-allowed',
    },
    '&:hover:not(:disabled)': {
      backgroundColor: '#f3f4f6 !important',
      borderRadius: '8px',
      color: '#1f2937',
    },
  },
});

export const pageButton = style({
  flexShrink: 0,
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  border: 'none',
  background: 'transparent',
  fontSize: '14px',
  color: '#4b5563',
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: '#f3f4f6',
    },
  },
});

export const active = style({
  color: '#facc15 !important',
  background: '#1f2937 !important',
  fontWeight: '700',
});
