import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const headerBar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingTop: '24px',
  marginBottom: vars.space.md,
});

export const logo = style({
  width: '118px',
  height: '28px',
});

export const actions = style({
  display: 'flex',
  gap: vars.space.sm,
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
});

export const btn = style({
  width: '90px',
  height: '40px',
});

export const titleLine = style({
  height: '20px',
  width: '62%',
  marginBottom: vars.space.md,
  borderBottom: `1px solid ${vars.color.gray[200]}`,
  paddingBottom: vars.space.md,
});

export const editorArea = style({
  flex: 1,
  minHeight: '320px',
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.md,
  padding: vars.space.lg,
  display: 'flex',
  flexDirection: 'column',
  gap: '9px',
});

export const editorLine = style({
  height: '11px',
  width: '100%',
});

export const editorLineShort = style({
  height: '11px',
  width: '84%',
});
