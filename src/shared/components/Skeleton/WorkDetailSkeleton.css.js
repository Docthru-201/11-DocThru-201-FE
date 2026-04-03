import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const titleBar = style({
  height: vars.fontSize['2xl'],
  width: '76%',
  marginBottom: vars.space.md,
});

export const tagRow = style({
  display: 'flex',
  gap: vars.space.sm,
  marginBottom: vars.space.md,
});

export const tag = style({
  width: '62px',
  height: '26px',
});

export const divider = style({
  border: 'none',
  borderTop: `1px solid ${vars.color.gray[200]}`,
  margin: 0,
  width: '100%',
});

export const metaRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '14px 0',
  minHeight: '24px',
});

export const metaLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const avatar = style({
  width: '24px',
  height: '24px',
});

export const name = style({
  width: '92px',
  height: vars.fontSize['2xs'],
});

export const likeBlock = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  marginLeft: vars.space.sm,
});

export const likeIcon = style({
  width: '16px',
  height: '16px',
});

export const likeNum = style({
  width: '32px',
  height: vars.fontSize.sm,
});

export const date = style({
  width: '80px',
  height: vars.fontSize['2xs'],
});

export const bodyLine = style({
  height: vars.fontSize.base,
  width: '100%',
  marginBottom: '10px',
});

export const bodyLineShort = style({
  height: vars.fontSize.base,
  width: '88%',
  marginBottom: '10px',
});

export const bodyBlock = style({
  marginTop: vars.space.md,
});
