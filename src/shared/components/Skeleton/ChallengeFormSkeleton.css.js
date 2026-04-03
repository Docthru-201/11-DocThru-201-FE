import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const fieldBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

export const labelLine = style({
  height: 14,
  width: 56,
});

export const inputLine = style({
  height: 44,
  width: '100%',
});

export const dropdownLine = style({
  height: 44,
  width: '100%',
});

export const titleSkeleton = style({
  height: 28,
  width: '55%',
  marginTop: 24,
  marginBottom: 24,
});

export const textAreaBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});

export const textAreaLine = style({
  height: 14,
  width: '100%',
});

export const textArea = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  minHeight: 200,
});

export const submitBtn = style({
  height: 48,
  width: '100%',
  marginTop: 20,
  marginBottom: 37,
});
