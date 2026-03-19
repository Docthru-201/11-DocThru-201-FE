import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { signUpUser } from '../api/auth.service';

export const useSignup = () => {
  const router = useRouter();

  // useMutation: 데이터를 생성/수정/삭제하는 API 호출에 최적화된 훅
  const signupMutation = useMutation({
    mutationFn: (signUpData) => signUpUser(signUpData),

    // 성공했을 때 실행할 로직
    onSuccess: (data) => {
      alert('회원가입에 성공했습니다! 로그인 페이지로 이동합니다.');
      router.push('/auth/login'); // 로그인 페이지로 리다이렉트
    },

    // 실패했을 때 실행할 로직
    onError: (error) => {
      // service에서 throw한 에러 메시지를 활용합니다.
      alert(error.message || '회원가입 중 오류가 발생했습니다.');
    },
  });

  return {
    // 컴포넌트에서 사용할 변수와 함수들
    signup: signupMutation.mutate, // 회원가입 실행 함수
    isLoading: signupMutation.isPending, // 로딩 상태 (Next 13+에서는 isPending)
    isError: signupMutation.isError, // 에러 발생 여부
    error: signupMutation.error, // 에러 객체
  };
};
