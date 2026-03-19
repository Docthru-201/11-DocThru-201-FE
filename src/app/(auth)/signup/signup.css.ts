import { style } from '@vanilla-extract/css';

/* 1. 전체 화면 레이아웃 (120rem x 67.5rem 기준) */
export const container = style({
  width: '120rem',
  height: '67.5rem',
  margin: '0 auto',
  padding: '7.5rem 43.81rem', // 상하 7.5, 좌우 43.81
  backgroundColor: '#f4f4f4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
});

/* 2. 로고 영역 */
export const logoWrapper = style({
  display: 'flex',
  width: '20rem',
  height: '4.5rem',
  padding: '0 0.96244rem 0 0.89988rem',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '2rem', // 폼과의 간격 조절
});

/* 3. 폼 전체 */
export const form = style({
  width: '32.38rem', // 120 - (43.81 * 2) 한 나머지 공간
  display: 'flex',
  flexDirection: 'column',
  // 인풋 그룹 간의 간격 (인풋과 다음 제목 사이의 gap: 1.5rem)
  gap: '1.5rem',
});

/* 4. 인풋 그룹 (제목 + 인풋창) */
export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  // 제목과 인풋창 사이의 gap: 0.5rem
  gap: '0.5rem',
  alignSelf: 'stretch',
});

/* 5. 라벨 (제목) */
export const label = style({
  color: '#171717', // gray900
  fontFamily:
    'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
  fontSize: '0.875rem', // 14px
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
});

/* 6. 인풋창 스타일 (전달해주신 상세 수치 반영) */
export const input = style({
  display: 'flex',
  height: '3rem', // 48px
  padding: '0.6875rem 1.25rem',
  alignItems: 'center',
  gap: '0.625rem',
  alignSelf: 'stretch',
  borderRadius: '0.75rem', // 12px
  border: '1px solid #E5E5E5', // gray200
  backgroundColor: '#FFFFFF',
  fontSize: '1rem',
  outline: 'none',
  selectors: {
    '&:focus': {
      borderColor: '#262626',
    },
  },
});

/* 8. 가입하기 버튼 (전달해주신 상세 수치 반영) */
export const submitButton = style({
  display: 'flex',
  height: '3rem',
  padding: '0.875rem 7.875rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
  alignSelf: 'stretch',
  borderRadius: '0.5rem',
  backgroundColor: '#262626', // brand-black
  color: '#FFFFFF',
  border: 'none',
  fontSize: '1.1rem',
  fontWeight: '700',
  cursor: 'pointer',
  selectors: {
    '&:disabled': {
      backgroundColor: '#E5E5E5',
      cursor: 'not-allowed',
    },
  },
});

/* 9. 하단 로그인 영역 */
export const footer = style({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
  fontSize: '0.9rem',
  color: '#666',
});

export const loginLink = style({
  background: 'none',
  border: 'none',
  color: '#262626',
  fontWeight: '700',
  cursor: 'pointer',
  textDecoration: 'underline',
});

/* 10. 에러 메시지 */
export const errorMessage = style({
  color: '#ff4d4f',
  fontSize: '0.85rem',
  marginTop: '-0.2rem', // 인풋창과 너무 멀지 않게 조절
});
