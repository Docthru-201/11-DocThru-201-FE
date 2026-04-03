import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: vars.color.white,
});

/* 전역 :focus-visible(회색 테두리)가 input/textarea에 겹침 — 챌린지 신청·수정 폼에서만 제거 */
globalStyle(`${page} input:focus-visible`, {
  outline: 'none',
  outlineOffset: 0,
});
globalStyle(`${page} textarea:focus-visible`, {
  outline: 'none',
  outlineOffset: 0,
});

export const main = style({
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '0 20px',
});

export const title = style({
  fontSize: vars.fontSize['lg'],
  fontWeight: vars.fontWeight.semibold,
  margin: '24px 0',
  textAlign: 'left',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const row = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '16px',
});

export const buttonWrap = style({
  marginTop: '20px', // 버튼 위쪽 간격 추가
  marginBottom: '37px',
});

export const errorMessage = style({
  margin: '4px 0 0',
  fontSize: vars.fontSize.sm,
  color: '#ff4d4f',
});
