import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#f5f5f5', // 배경색
  padding: '20px',
});

export const logoWrapper = style({
  marginBottom: '40px',
});

export const form = style({
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const label = style({
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#333',
});

export const input = style({
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '16px',
  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: '#333',
    },
  },
});

export const inputError = style({
  borderColor: '#ff4d4f',
});

export const passwordInputWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const eyeIcon = style({
  position: 'absolute',
  right: '12px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '20px',
});

export const errorMessage = style({
  fontSize: '12px',
  color: '#ff4d4f',
  marginTop: '4px',
});

export const submitButton = style({
  marginTop: '10px',
  padding: '14px',
  borderRadius: '8px',
  backgroundColor: '#222',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  border: 'none',
  selectors: {
    '&:disabled': {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    },
  },
});

export const footer = style({
  marginTop: '24px',
  fontSize: '14px',
  color: '#666',
});

export const loginLink = style({
  marginLeft: '8px',
  background: 'none',
  border: 'none',
  color: '#222',
  fontWeight: 'bold',
  textDecoration: 'underline',
  cursor: 'pointer',
});
