import { style } from '@vanilla-extract/css';

export const toolbar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  padding: '8px 0',
  flexWrap: 'wrap',
  backgroundColor: '#ffffff',
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
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

export const imageButtonLabel = style({
  fontSize: '12px',
  fontWeight: 600,
  color: '#374151',
});

export const divider = style({
  width: '1px',
  height: '20px',
  backgroundColor: '#e5e7eb',
  margin: '0 4px',
});

export const colorWrapper = style({
  position: 'relative',
});

export const colorIconWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2px',
});

export const colorIndicator = style({
  width: '16px',
  height: '3px',
  borderRadius: '1px',
});

export const colorDropdown = style({
  position: 'absolute',
  top: 'calc(100% + 4px)',
  left: '0',
  zIndex: 100,
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
  width: '168px',
});

export const colorGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '4px',
  marginBottom: '8px',
});

export const colorSwatch = style({
  width: '22px',
  height: '22px',
  borderRadius: '3px',
  border: '1px solid rgba(0,0,0,0.15)',
  cursor: 'pointer',
  padding: '0',
  selectors: {
    '&:hover': {
      transform: 'scale(1.15)',
      outline: '2px solid #6366f1',
    },
  },
});

export const colorCustomRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: '1px solid #e5e7eb',
  paddingTop: '8px',
});

export const colorCustomLabel = style({
  fontSize: '12px',
  color: '#6b7280',
});

export const colorCustomInput = style({
  width: '28px',
  height: '28px',
  padding: '0',
  border: '1px solid #e5e7eb',
  borderRadius: '4px',
  cursor: 'pointer',
});
