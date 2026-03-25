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
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
});

export const titleText = style({
  marginBottom: '16px',
  fontSize: '18px',
  fontWeight: 600,
  color: '#1f2937', // gray-800
});

export const errorContent = style({
  marginBottom: '24px',
  fontSize: '16px',
  color: '#374151', // gray-700
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap', // \n 줄바꿈 적용
  textAlign: 'center',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const confirmButton = style({
  padding: '10px 20px',
  borderRadius: '6px',
  backgroundColor: '#262626', // brand-black
  color: '#ffffff',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 600,
  transition: 'opacity 0.2s',

  ':hover': {
    opacity: 0.9,
  },
});
