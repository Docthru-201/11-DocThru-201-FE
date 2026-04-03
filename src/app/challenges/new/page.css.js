import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: vars.color.white,
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
  gap: '24px', // 입력창 사이의 간격
});

export const row = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr', // 분야와 문서 타입을 가로로 배치
  gap: '16px',
});

export const buttonWrap = style({
  marginBottom: '37px',
});

export const errorMessage = style({
  margin: '4px 0 0',
  fontSize: vars.fontSize.sm,
  color: '#ff4d4f',
});
