import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  borderRadius: '12px',
  border: '2px solid #1f2937',
  backgroundColor: '#ffffff',
  padding: '24px',
  boxSizing: 'border-box',
});

export const title = style({
  fontSize: '18px',
  fontWeight: 700,
  color: '#111827',
  marginBottom: '20px',
});

export const statsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',

  '@media': {
    'screen and (max-width: 743px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const statItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  padding: '16px',
  borderRadius: '8px',
  backgroundColor: '#f9fafb',
});

export const statValue = style({
  fontSize: '28px',
  fontWeight: 700,
  color: '#f59e0b',
});

export const statLabel = style({
  fontSize: '13px',
  fontWeight: 500,
  color: '#6b7280',
});
