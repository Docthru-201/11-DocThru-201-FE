import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  marginTop: '16px',
  paddingBottom: '10rem',
  '@media': {
    'screen and (min-width: 768px)': {
      marginTop: '24px',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
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
});

export const declineBtn = style({
  color: '#f87171',
  borderColor: '#fca5a5',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: '600',
});

export const approveBtn = style({
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: '600',
});

export const previewIframe = style({
  marginTop: '32px',
  width: '100%',
  border: '0',
  height: 'calc(100vh - 200px)',
});

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

export const actionBtn = style({
  width: '100%',
  '@media': {
    'screen and (min-width: 768px)': {
      width: '158px',
    },
  },
});
