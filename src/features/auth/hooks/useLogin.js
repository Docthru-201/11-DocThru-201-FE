import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { loginUser } from '../api/auth.service'; // 서비스 함수 임포트
import { toast } from 'react-toastify'; // 추가
import { useAuthStore } from '@/shared/store/useAuthStore';
import { syncNextAuthCookies } from '@/shared/lib/syncNextAuthCookies';

export const useLogin = () => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  // useMutation: 로그인 API 호출에 최적화된 훅
  const loginMutation = useMutation({
    mutationFn: (loginData) => loginUser(loginData),

    // 성공했을 때 실행할 로직
    onSuccess: async (data) => {
      const { accessToken, refreshToken, ...user } = data;
      setUser(user);

      if (accessToken && refreshToken) {
        await syncNextAuthCookies({ accessToken, refreshToken });
      }

      toast.success('로그인에 성공했습니다!');

      const userRole = user.role || user.user?.role;

      if (userRole === 'ADMIN') {
        router.push('/admin/management');
      } else {
        router.push('/challenges');
      }

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
    isSuccess: loginMutation.isSuccess,
    isError: loginMutation.isError, // 에러 발생 여부
    error: loginMutation.error, // 에러 객체
  };
};
