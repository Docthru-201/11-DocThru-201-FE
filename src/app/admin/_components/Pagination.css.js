// Pagination.css.ts
import { style } from '@vanilla-extract/css';

export const container = style({
  marginBottom: '48px',
  display: 'flex',
  justifyContent: 'center',
  gap: '6px',
});

export const pageButton = style({
  width: '40px',
  height: '40px',
  borderRadius: '8px',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  transition: 'background 0.2s',
});

export const active = style({
  color: '#facc15',
  background: '#1f2937',
});

export const hover = style({
  selectors: {
    '&:hover': {
      background: '#e5e7eb',
    },
  },
});

export const disabled = style({
  opacity: 0.35,
  cursor: 'not-allowed',
});
