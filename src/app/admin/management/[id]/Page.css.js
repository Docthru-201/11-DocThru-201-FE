import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  minHeight: '100vh',
  boxSizing: 'border-box',
  paddingBottom: '10rem',
  marginTop: '24px',

  '@media': {
    'screen and (max-width: 743px)': {
      marginTop: '16px',
    },
  },
});

export const innerWrapper = style({
  width: '100%',
  maxWidth: '1200px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: '32px',

  '@media': {
    'screen and (max-width: 1199px)': {
      maxWidth: '744px',
      padding: '32px 24px',
    },
    'screen and (max-width: 743px)': {
      maxWidth: '375px',
      padding: '24px 16px',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const idText = style({
  fontWeight: 500,
  color: '#374151',
});

export const navGroup = style({
  display: 'flex',
  gap: '10px',
});

export const navBtn = style({
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  selectors: {
    '&:disabled': {
      opacity: 0.3,
      cursor: 'not-allowed',
    },
  },
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
  marginTop: '40px',
  paddingBottom: '60px',

  '@media': {
    'screen and (max-width: 743px)': {
      justifyContent: 'center',
      width: '100%',
    },
  },
});

const baseActionBtn = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: '600',
  borderRadius: '8px',
  cursor: 'pointer',
  minWidth: '140px',
  height: '48px',
  boxSizing: 'border-box',
  transition: 'all 0.2s ease',
});

export const declineBtn = style([
  baseActionBtn,
  {
    color: '#F24744;',
    backgroundColor: '#fca5a5',
    border: '1px solid #fca5a5',
    selectors: {
      '&:hover': {
        backgroundColor: '#fff5f5',
      },
    },
  },
]);

export const approveBtn = style([
  baseActionBtn,
  {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    border: '1px solid #1a1a1a',
    selectors: {
      '&:hover': {
        backgroundColor: '#333333',
      },
      '&:disabled': {
        backgroundColor: '#9ca3af',
        borderColor: '#9ca3af',
        cursor: 'not-allowed',
      },
    },
  },
]);

export const modalFormContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '20px',
});

export const modalFormLabel = style({
  fontSize: '14px',
  fontWeight: '600',
  color: '#4b5563',
  textAlign: 'left',
});

export const modalTextarea = style({
  width: '100%',
  height: '140px',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  fontSize: '14px',
  resize: 'none',
  backgroundColor: '#f9fafb',
  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: '#111827',
    },
  },
});

export const modalSubmitWrapper = style({
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const loadingWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '400px',
  padding: '100px 0',
});

export const errorWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '80px 20px',
  width: '100%',
  color: '#cf1322',
  fontSize: '16px',
  gap: '12px',
});
