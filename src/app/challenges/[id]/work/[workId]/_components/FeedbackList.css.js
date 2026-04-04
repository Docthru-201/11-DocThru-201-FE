import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const container = style({
  width: '100%',
  padding: 0,
});

export const item = style({
  padding: '16px',
  borderRadius: '12px',
  backgroundColor: vars.color.gray[50],
  marginBottom: '16px',
  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export const itemHeader = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space.sm,
  marginBottom: '15px',
  position: 'relative',
});

export const avatar = style({
  width: '32px',
  height: '32px',
  borderRadius: vars.radius.full,
  objectFit: 'cover',
  backgroundColor: vars.color.brand.point,
  flexShrink: 0,
});

export const authorInfo = style({
  display: 'flex',
  flexDirection: 'column',
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
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[700],
  lineHeight: vars.lineHeight.normal,
  marginBottom: '15px',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  whiteSpace: 'pre-wrap',
});

export const actions = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const replyCollapseButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  marginTop: vars.space.md,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: vars.fontSize['2xs'],
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[400],
  cursor: 'pointer',
  borderRadius: vars.radius.sm,
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[100],
      color: vars.color.gray[600],
    },
  },
});

export const replyToggleButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: `${vars.space.xs} ${vars.space.sm}`,
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: vars.fontSize['2xs'],
  fontWeight: vars.fontWeight.medium,
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

export const dropdownWrapper = style({
  position: 'relative',
  marginLeft: 'auto',
  flexShrink: 0,
});

export const dropdownTrigger = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  border: 'none',
  backgroundColor: 'transparent',
  color: vars.color.gray[400],
  cursor: 'pointer',
  borderRadius: vars.radius.sm,
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[100],
      color: vars.color.gray[600],
    },
  },
});

export const dropdownMenu = style({
  position: 'absolute',
  top: 'calc(100% + 4px)',
  right: 0,
  zIndex: 10,
  minWidth: '96px',
  backgroundColor: '#ffffff',
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.md,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  overflow: 'hidden',
});

export const dropdownItem = style({
  display: 'block',
  width: '100%',
  padding: `${vars.space.sm} ${vars.space.md}`,
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[700],
  textAlign: 'left',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[50],
    },
  },
});

export const dropdownItemDanger = style([
  dropdownItem,
  {
    color: vars.color.semantic.error,
    selectors: {
      '&:hover': {
        backgroundColor: '#fff5f5',
      },
    },
  },
]);

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

export const replies = style({
  marginLeft: vars.space.xl,
  marginTop: vars.space.md,
  paddingLeft: vars.space.lg,
  borderLeft: `2px solid ${vars.color.gray[200]}`,
});

export const moreButton = style({
  display: 'block',
  margin: `${vars.space.lg} auto 0`,
  width: '180px',
  maxWidth: '100%',
  height: '48px',
  padding: `0 ${vars.space.lg}`,
  border: 'none',
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.gray[100],
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[500],
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[200],
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
