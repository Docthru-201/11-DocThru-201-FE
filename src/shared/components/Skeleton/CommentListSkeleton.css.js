import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const wrap = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
});

export const formRow = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space.sm,
});

export const formBox = style({
  flex: 1,
  minWidth: 0,
  minHeight: '89px',
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  boxSizing: 'border-box',
});

export const formLine = style({
  height: vars.fontSize.base,
  width: '48%',
  marginBottom: '10px',
});

export const formLine2 = style({
  height: vars.fontSize.base,
  width: '30%',
});

export const formBtn = style({
  width: '40px',
  height: '40px',
  marginTop: vars.space.lg,
  flexShrink: 0,
});

export const item = style({
  padding: '16px',
  borderRadius: '12px',
  backgroundColor: vars.color.gray[50],
});

export const itemHeader = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space.sm,
  marginBottom: '15px',
});

export const avatar = style({
  width: '32px',
  height: '32px',
});

export const nameCol = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  flex: 1,
});

export const name = style({
  height: vars.fontSize.sm,
  width: '88px',
});

export const date = style({
  height: vars.fontSize['2xs'],
  width: '124px',
});

export const contentLine = style({
  height: vars.fontSize.base,
  width: '100%',
  marginBottom: '8px',
});

export const contentLineShort = style({
  height: vars.fontSize.base,
  width: '64%',
});
