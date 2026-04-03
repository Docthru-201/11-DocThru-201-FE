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
  marginBottom: '20px',
});

export const title = style({
  fontSize: '18px',
  fontWeight: 700,
  color: '#111827',
});

export const filterGroup = style({
  display: 'flex',
  gap: '8px',
});

export const filterButton = style({
  padding: '6px 12px',
  borderRadius: '20px',
  border: '1px solid #d1d5db',
  backgroundColor: '#ffffff',
  fontSize: '13px',
  color: '#6b7280',
  cursor: 'pointer',
});

export const filterButtonActive = style({
  padding: '6px 12px',
  borderRadius: '20px',
  border: '1px solid #1f2937',
  backgroundColor: '#1f2937',
  fontSize: '13px',
  color: '#ffffff',
  cursor: 'pointer',
});

export const workList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const workCard = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#f9fafb',
  },
});

export const workInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const challengeTitle = style({
  fontSize: '15px',
  fontWeight: 500,
  color: '#111827',
});

export const statusDraft = style({
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: 500,
  backgroundColor: '#fef3c7',
  color: '#d97706',
});

export const statusSubmitted = style({
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: 500,
  backgroundColor: '#d1fae5',
  color: '#059669',
});

export const workMeta = style({
  display: 'flex',
  alignItems: 'center',
  gap: '25px',
});

export const likeCount = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '13px',
  color: '#6b7280',
});

export const date = style({
  fontSize: '13px',
  color: '#9ca3af',
});

export const emptyText = style({
  padding: '40px 0',
  textAlign: 'center',
  color: '#9ca3af',
  fontSize: '15px',
  lineHeight: '1.6',
});

export const loading = style({
  padding: '40px 0',
  textAlign: 'center',
  color: '#6b7280',
});

export const moreButton = style({
  display: 'block',
  margin: '16px auto 0',
  width: '180px',
  maxWidth: '100%',
  height: '48px',
  padding: '0 16px',
  border: 'none',
  borderRadius: '12px',
  backgroundColor: '#f3f4f6',
  fontSize: '15px',
  fontWeight: 500,
  color: '#6b7280',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: '#e5e7eb',
    },
  },
});
