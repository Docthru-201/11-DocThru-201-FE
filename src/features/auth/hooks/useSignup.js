import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { signUpUser } from '../api/auth.service';
import { toast } from 'react-toastify';

export const useSignup = () => {
  const router = useRouter();

  // useMutation: 데이터를 생성/수정/삭제하는 API 호출에 최적화된 훅
  const signupMutation = useMutation({
    mutationFn: (signUpData) => signUpUser(signUpData),

    // 성공했을 때 실행할 로직
    onSuccess: () => {
      toast.success(
        <>
          회원가입에 성공했습니다!
          <br />
          로그인 페이지로 이동합니다.
        </>,
      );
      router.push('/login'); // 로그인 페이지로 리다이렉트
    },

    // 실패했을 때 실행할 로직
    onError: (error) => {
      // service에서 throw한 에러 메시지를 활용합니다.
      toast.success(error.message || '회원가입 중 오류가 발생했습니다.');
    },
  });

  return {
    signup: signupMutation.mutate,
    signupAsync: signupMutation.mutateAsync,
    isPending: signupMutation.isPending,
    isSuccess: signupMutation.isSuccess,
    isLoading: signupMutation.isPending,
    isError: signupMutation.isError,
    error: signupMutation.error,
  };
};
