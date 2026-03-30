import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const container = style({
  padding: `${vars.space.lg} ${vars.space['2xl']}`,
});

export const item = style({
  paddingBottom: vars.space.xl,
  borderBottom: `1px solid ${vars.color.gray[100]}`,
  marginBottom: vars.space.xl,
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
      marginBottom: 0,
    },
  },
});

export const itemHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  marginBottom: vars.space.sm,
});

export const avatar = style({
  width: '28px',
  height: '28px',
  borderRadius: vars.radius.full,
  objectFit: 'cover',
  backgroundColor: vars.color.brand.point,
});

export const authorInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const nickname = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[800],
});

export const date = style({
  fontSize: vars.fontSize['2xs'],
  color: vars.color.gray[400],
});

export const content = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[700],
  lineHeight: vars.lineHeight.normal,
  marginBottom: vars.space.sm,
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
});

export const actions = style({
  display: 'flex',
  gap: vars.space.sm,
});

export const actionButton = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: vars.fontSize['2xs'],
  color: vars.color.gray[500],
  cursor: 'pointer',
  borderRadius: vars.radius.sm,
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[100],
      color: vars.color.gray[700],
    },
  },
});

export const actionButtonDanger = style([
  actionButton,
  {
    selectors: {
      '&:hover': {
        color: vars.color.semantic.error,
      },
    },
  },
]);

export const replies = style({
  marginLeft: vars.space.xl,
  marginTop: vars.space.md,
  paddingLeft: vars.space.lg,
  borderLeft: `2px solid ${vars.color.gray[100]}`,
});

export const moreButton = style({
  display: 'block',
  margin: '0 auto',
  padding: `${vars.space.sm} ${vars.space.xl}`,
  border: `1px solid ${vars.color.gray[300]}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.white,
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[600],
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[50],
    },
  },
});

export const editTextarea = style({
  width: '100%',
  padding: vars.space.sm,
  border: `1px solid ${vars.color.gray[300]}`,
  borderRadius: vars.radius.sm,
  fontSize: vars.fontSize.sm,
  fontFamily: vars.fontFamily.pretendard,
  color: vars.color.gray[800],
  resize: 'vertical',
  minHeight: '60px',
  outline: 'none',
  selectors: {
    '&:focus': {
      borderColor: vars.color.gray[500],
    },
  },
});

export const editActions = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: vars.space.sm,
  marginTop: vars.space.sm,
});
export const deletedContent = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[400],
  fontStyle: 'italic',
  marginBottom: vars.space.sm,
});

export const editedMark = style({
  fontSize: vars.fontSize['2xs'],
  color: vars.color.gray[400],
  fontStyle: 'italic',
});
