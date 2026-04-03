import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

export const modalContainer = style({
  backgroundColor: 'white',
  borderRadius: '12px',
  border: '2px solid #1f2937',
  padding: '40px 24px',
  width: '327px',
  minHeight: '180px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '32px',
  position: 'relative',
  margin: '0 16px',

  '@media': {
    'screen and (min-width: 768px)': {
      width: '540px',
      padding: '60px 40px',
      minHeight: '220px',
    },
  },
});

export const messageText = style({
  fontSize: '16px',
  fontWeight: 500,
  color: '#1f2937',
  textAlign: 'center',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap',

  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '18px',
    },
  },
});

export const confirmButton = style({
  width: '120px',
  height: '48px',
  backgroundColor: '#262626',
  color: 'white',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 500,
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.2s',

  ':hover': {
    backgroundColor: '#404040',
  },
});
