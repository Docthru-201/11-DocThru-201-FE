import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
});

export const modalContainer = style({
  width: '90%',
  maxWidth: '448px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '24px',
  boxShadow:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
});

export const titleText = style({
  marginBottom: '16px',
  fontSize: '18px',
  fontWeight: 600,
  color: '#1f2937',
});

export const contentArea = style({
  marginBottom: '16px',
  color: '#374151',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const confirmButton = style({
  padding: '8px 16px',
  borderRadius: '6px',
  backgroundColor: '#262626',
  color: '#ffffff',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 500,
  transition: 'opacity 0.2s',

  ':hover': {
    opacity: 0.9,
  },
});
