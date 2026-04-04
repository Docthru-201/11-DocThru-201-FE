import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { logoutUser } from '../api/auth.service';
import { toast } from 'react-toastify';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { clearNextAuthCookies } from '@/shared/lib/syncNextAuthCookies';

export const useLogout = () => {
  const router = useRouter();
  const clearUser = useAuthStore((state) => state.clearUser);

  const logoutMutation = useMutation({
    mutationFn: async () => {
      try {
        await logoutUser();
      } finally {
        await clearNextAuthCookies();
      }
    },

    onSuccess: () => {
      clearUser();
      toast.success('로그아웃 되었습니다.');
      router.replace('/');
    },

    onError: (error) => {
      clearUser();
      toast.error(error.message || '로그아웃 중 오류가 발생했습니다.');
      router.replace('/');
    },
  });

  return {
    logout: logoutMutation.mutate,
    isPending: logoutMutation.isPending,
  };
};
