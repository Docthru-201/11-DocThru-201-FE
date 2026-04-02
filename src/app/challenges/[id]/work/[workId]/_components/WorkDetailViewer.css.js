import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';
export const container = style({
  flex: 1,
  width: '100%',
});

export const titleRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: vars.space.md,
  marginBottom: vars.space.md,
});

export const title = style({
  flex: 1,
  minWidth: 0,
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.gray[800],
  lineHeight: vars.lineHeight.normal,
});

export const tagRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.space.sm,
  marginBottom: vars.space.md,
});

export const divider = style({
  border: 'none',
  borderTop: `1px solid ${vars.color.gray[200]}`,
  margin: 0,
  width: '100%',
});

export const dividerSpaced = style([
  divider,
  {
    marginTop: vars.space.md,
    marginBottom: vars.space.md,
  },
]);

export const metaRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space.lg,
  minHeight: '24px',
  marginBottom: vars.space.md,
});

export const metaLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  minWidth: 0,
});

export const authorBlock = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  flexShrink: 0,
});

export const avatar = style({
  width: '24px',
  height: '24px',
  borderRadius: vars.radius.full,
  objectFit: 'cover',
  backgroundColor: vars.color.brand.point,
  flexShrink: 0,
});

export const nickname = style({
  fontSize: vars.fontSize['2xs'],
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[800],
});

export const likeBlock = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  marginLeft: vars.space.sm,
});

export const likeCount = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[500],
});

export const likeButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  lineHeight: 0,
  selectors: {
    '&:disabled': {
      opacity: Number(vars.opacity.disabled),
      cursor: 'not-allowed',
    },
  },
});

export const metaDate = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[500],
  flexShrink: 0,
  marginLeft: 'auto',
});

/** TipTap 래퍼 */
export const workProse = style({
  width: '100%',
  minHeight: '120px',
});

/** TipTap `.ProseMirror` — `style()` 안에서 `& :global(.ProseMirror)` 는 VE 규칙 위반이므로 `globalStyle` 사용 */
globalStyle(`${workProse} .ProseMirror`, {
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  lineHeight: 1.6,
  color: vars.color.gray[800],
  outline: 'none',
});

globalStyle(`${workProse} .ProseMirror p`, {
  marginBottom: '1em',
});

globalStyle(`${workProse} .ProseMirror p:last-child`, {
  marginBottom: 0,
});

globalStyle(`${workProse} .ProseMirror ul`, {
  listStyle: 'disc',
  paddingLeft: '1.5em',
  marginBottom: '1em',
});

globalStyle(`${workProse} .ProseMirror ol`, {
  listStyle: 'decimal',
  paddingLeft: '1.5em',
  marginBottom: '1em',
});

globalStyle(`${workProse} .ProseMirror li`, {
  marginBottom: '0.25em',
});

globalStyle(
  `${workProse} .ProseMirror h1, ${workProse} .ProseMirror h2, ${workProse} .ProseMirror h3, ${workProse} .ProseMirror h4`,
  {
    fontWeight: vars.fontWeight.semibold,
    color: vars.color.gray[800],
    marginBottom: '0.5em',
    marginTop: '1em',
  },
);

globalStyle(`${workProse} .ProseMirror h1`, {
  fontSize: vars.fontSize.lg,
});

globalStyle(`${workProse} .ProseMirror h2`, {
  fontSize: vars.fontSize.md,
});

globalStyle(`${workProse} .ProseMirror h3`, {
  fontSize: vars.fontSize.base,
});

globalStyle(`${workProse} .ProseMirror img`, {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: vars.radius.md,
});

export const emptyBody = style({
  textAlign: 'center',
  padding: `${vars.space['2xl']} 0`,
  color: vars.color.gray[400],
  fontSize: vars.fontSize.sm,
});
