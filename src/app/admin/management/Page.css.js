import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  padding: '40px',
  backgroundColor: '#ffffff',
  minHeight: '100vh',
});

export const title = style({
  fontSize: '24px',
  fontWeight: '700',
  marginBottom: '30px',
  color: '#1a1a1a',
});

export const searchSortWrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '16px',
  marginBottom: '24px',
  alignItems: 'center',
  position: 'relative',
  zIndex: 100,
});

export const searchInput = style({
  width: '100%',
});

globalStyle(`${searchSortWrapper} > div:first-child`, {
  maxWidth: 'none !important',
  width: '100% !important',
});

export const sortWrapper = style({
  position: 'relative',
  minWidth: '140px',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const sortPopover = style({
  position: 'absolute',
  top: 'calc(100% + 4px)',
  right: 0,
  width: '160px',
  backgroundColor: '#ffffff',
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 101,
});

export const sortOptionButton = style({
  width: '100%',
  padding: '12px 16px',
  fontSize: '14px',
  textAlign: 'left',
  border: 'none',
  borderBottom: '1px solid #e5e7eb',
  backgroundColor: '#ffffff',
  cursor: 'pointer',
  color: '#4b5563',
  transition: 'background-color 0.2s ease',
  selectors: {
    '&:last-child': { borderBottom: 'none' },
    '&:hover': { backgroundColor: '#f9fafb' },
  },
});

export const activeOption = style({
  color: '#111827',
  fontWeight: '600',
  backgroundColor: '#f3f4f6',
});

export const listSection = style({
  position: 'relative',
  zIndex: 1,
});

export const loadingWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '100px 0',
});

export const emptyState = style({
  textAlign: 'center',
  padding: '100px 0',
  color: '#a0aec0',
  fontSize: '16px',
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  marginTop: '20px',
});

export const paginationContainer = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40px',
  paddingBottom: '40px',
});
