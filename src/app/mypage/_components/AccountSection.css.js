import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  borderRadius: '12px',
  border: '2px solid #1f2937',
  backgroundColor: '#ffffff',
  padding: '24px',
  boxSizing: 'border-box',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '24px',
});

export const title = style({
  fontSize: '18px',
  fontWeight: 700,
  color: '#111827',
});

export const editButton = style({
  padding: '8px 16px',
  borderRadius: '8px',
  border: '1px solid #1f2937',
  backgroundColor: '#ffffff',
  fontSize: '14px',
  fontWeight: 500,
  color: '#1f2937',
  cursor: 'pointer',
});

export const fieldList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const label = style({
  fontSize: '13px',
  fontWeight: 600,
  color: '#6b7280',
});

export const value = style({
  fontSize: '15px',
  color: '#111827',
});

export const input = style({
  padding: '10px 12px',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  fontSize: '15px',
  color: '#111827',
  outline: 'none',
  ':focus': {
    borderColor: '#1f2937',
  },
});

export const textarea = style({
  padding: '10px 12px',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  fontSize: '15px',
  color: '#111827',
  outline: 'none',
  resize: 'vertical',
  minHeight: '80px',
  ':focus': {
    borderColor: '#1f2937',
  },
});

export const buttonGroup = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
  marginTop: '24px',
});

export const cancelButton = style({
  padding: '10px 20px',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  backgroundColor: '#ffffff',
  fontSize: '14px',
  fontWeight: 500,
  color: '#6b7280',
  cursor: 'pointer',
});

export const saveButton = style({
  padding: '10px 20px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#1f2937',
  fontSize: '14px',
  fontWeight: 500,
  color: '#ffffff',
  cursor: 'pointer',
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});
export const charCount = style({
  fontSize: '12px',
  color: '#9ca3af',
  textAlign: 'right',
  marginTop: '4px',
});
