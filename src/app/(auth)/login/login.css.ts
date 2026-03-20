import { style } from '@vanilla-extract/css';

/* 1. 전체 화면 레이아웃 (회원가입과 동일하게 유지) */
export const container = style({
  width: '120rem',
  height: '67.5rem',
  margin: '0 auto',
  padding: '7.5rem 43.81rem',
  backgroundColor: '#f4f4f4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
});

/* 2. 로고 영역 (아래로 조금 더 내려오도록 마진 조정) */
export const logoWrapper = style({
  display: 'flex',
  width: '20rem',
  height: '4.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '2rem', // 로고를 좀 더 아래로 배치
});

/* 3. 폼 전체 (너비 유지 및 버튼 그룹화를 위한 flex 설정) */
export const form = style({
  width: '32.38rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem', // 인풋 그룹 간 간격
});

/* 4. 인풋 그룹 (제목 + 인풋창) */
export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignSelf: 'stretch',
});

/* 5. 라벨 (이메일, 비밀번호 텍스트 스타일) */
export const label = style({
  color: '#171717', // gray900
  fontFamily:
    'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 'normal',
});

/* 6. 인풋창 스타일 */
export const input = style({
  display: 'flex',
  height: '3rem',
  padding: '0.6875rem 1.25rem',
  alignItems: 'center',
  borderRadius: '0.75rem',
  border: '1px solid #E5E5E5',
  backgroundColor: '#FFFFFF',
  fontSize: '1rem',
  outline: 'none',
  selectors: {
    '&:focus': {
      borderColor: '#262626',
    },
  },
});

/* 7. 로그인 버튼 (가입하기 버튼 스타일 계승) */
export const submitButton = style({
  display: 'flex',
  height: '3rem',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: '0.5rem',
  backgroundColor: '#262626',
  color: '#FFFFFF',
  border: 'none',
  fontSize: '1.1rem',
  fontWeight: '700',
  cursor: 'pointer',
  marginTop: '0.5rem', // 폼 마지막 요소와 약간의 거리
  selectors: {
    '&:disabled': {
      backgroundColor: '#E5E5E5',
      cursor: 'not-allowed',
    },
  },
});

/* 8. 구글로 시작하기 버튼 (새로 추가) */
export const googleButton = style({
  display: 'flex',
  height: '3rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
  alignSelf: 'stretch',
  borderRadius: '0.5rem',
  border: '1px solid #E5E5E5', // gray200
  backgroundColor: '#FFFFFF',
  color: '#171717',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  marginTop: '-0.5rem', // 로그인 버튼과 가깝게 배치
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#F9F9F9',
  },
});

/* 9. 하단 회원가입 유도 영역 (위로 좀 더 올림) */
export const footer = style({
  marginTop: '1.5rem', // 버튼들 바로 아래 오도록 조정
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
  fontSize: '0.9rem',
  color: '#666',
});

export const signupLink = style({
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
  marginTop: '-0.2rem',
});
