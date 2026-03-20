import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { loginUser } from '../api/auth.service'; // 서비스 함수 임포트
import { toast } from 'react-toastify'; // 추가

export const useLogin = () => {
  const router = useRouter();

  // useMutation: 로그인 API 호출에 최적화된 훅
  const loginMutation = useMutation({
    mutationFn: (loginData) => loginUser(loginData),

    // 성공했을 때 실행할 로직
    onSuccess: (data) => {
      // 1. 성공 알림
      toast.success('로그인에 성공했습니다!');

      // 2. 페이지 리다이렉트 (대시보드 또는 메인)
      router.push('/');

      // 3. 상태 업데이트를 위해 페이지 새로고침 (필요 시)
      router.refresh();
    },

    // 실패했을 때 실행할 로직
    onError: (error) => {
      // service에서 throw한 에러 메시지를 활용합니다.
      toast.error(error.message || '로그인 중 오류가 발생했습니다.');
    },
  });

  return {
    // 컴포넌트에서 사용할 변수와 함수들
    login: loginMutation.mutate, // 로그인 실행 함수
    isPending: loginMutation.isPending, // 로딩 상태 (isLoading 대신 isPending 권장)
    isError: loginMutation.isError, // 에러 발생 여부
    error: loginMutation.error, // 에러 객체
  };
};
