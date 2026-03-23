import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

export const modalContainer = style({
  position: 'relative',
  width: '343px',
  minHeight: '407px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  border: '2px solid #1f2937', // gray-800
  padding: '16px',

  '@media': {
    'screen and (min-width: 744px)': {
      width: '496px',
      minHeight: '423px',
      padding: '24px',
    },
  },
});

export const closeButton = style({
  position: 'absolute',
  top: '16px',
  right: '16px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',

  '@media': {
    'screen and (min-width: 744px)': {
      top: '24px',
      right: '24px',
    },
  },
});

export const titleText = style({
  marginBottom: '24px',
  fontSize: '16px',
  fontWeight: 700,
  color: '#1f2937',

  '@media': {
    'screen and (min-width: 744px)': {
      fontSize: '18px',
    },
  },
});

export const labelText = style({
  display: 'block',
  marginBottom: '8px',
  fontSize: '14px',
  fontWeight: 400,
  color: '#111827', // gray-900

  '@media': {
    'screen and (min-width: 744px)': {
      fontSize: '16px',
    },
  },
});

export const textArea = style({
  width: '100%',
  minHeight: '219px',
  marginBottom: '16px',
  padding: '16px 20px',
  borderRadius: '6px',
  border: '1px solid #d1d5db', // gray-300
  backgroundColor: '#ffffff',
  fontSize: '16px',
  resize: 'none',
  outline: 'none',

  ':focus': {
    border: '1px solid #1f2937',
  },
  '::placeholder': {
    color: '#6b7280', // gray-500
  },

  '@media': {
    'screen and (min-width: 744px)': {
      marginBottom: '24px',
    },
  },
});

export const submitButton = style({
  width: '100%',
  height: '48px',
  borderRadius: '12px',
  backgroundColor: '#262626', // brand-black
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  ':hover': {
    backgroundColor: '#000000',
  },
});
