import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const titleSk = style({
  width: '140px',
  height: vars.fontSize.lg,
});

export const btnSk = style({
  width: '160px',
  height: '40px',
  borderRadius: vars.radius.md,
});

export const tabRow = style({
  display: 'flex',
  gap: vars.space.lg,
  paddingBottom: vars.space.md,
});

export const tabPill = style({
  width: '120px',
  height: '24px',
});

export const searchSk = style({
  width: '100%',
  maxWidth: '400px',
  height: '44px',
});

export const tableWrap = style({
  width: '100%',
  marginTop: '24px',
  overflowX: 'auto',
});

export const tableSk = style({
  width: '100%',
  borderCollapse: 'collapse',
});

export const thRow = style({
  height: '48px',
});

export const thCell = style({
  padding: '8px',
  textAlign: 'left',
});

export const thBone = style({
  height: '14px',
  width: '56px',
});

export const trRow = style({
  height: '52px',
});

export const tdCell = style({
  padding: '8px',
});

export const tdBone = style({
  height: '12px',
  width: '100%',
  maxWidth: '120px',
});

export const tdBoneWide = style({
  height: '12px',
  width: '100%',
  maxWidth: '200px',
});
