import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 200,
});

export const modal = style({
  position: 'relative',
  width: '320px',
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  border: '2px solid #1f2937',
  padding: '32px 24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
});

export const closeButton = style({
  position: 'absolute',
  top: '12px',
  right: '12px',
  background: 'none',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
  color: '#6b7280',
});

export const imageWrapper = style({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  overflow: 'hidden',
});

export const nickname = style({
  fontSize: '18px',
  fontWeight: 700,
  color: '#111827',
});

export const grade = style({
  fontSize: '13px',
  fontWeight: 500,
  color: '#f59e0b',
});

export const introduction = style({
  fontSize: '14px',
  color: '#6b7280',
  textAlign: 'center',
  lineHeight: '1.5',
  wordBreak: 'break-all',
  width: '100%',
});

export const loading = style({
  padding: '20px 0',
  color: '#6b7280',
  fontSize: '14px',
});
