import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { googleLoginUser } from '../api/auth.service';
import { toast } from 'react-toastify';

export const useGoogleLogin = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: googleLoginUser,

    onSuccess: () => {
      toast.success('로그인에 성공했습니다!');
      router.push('/');
      router.refresh();
    },

    onError: (error) => {
      toast.error(error.message || '로그인 중 오류가 발생했습니다.');
    },
  });

  return {
    googleLogin: mutation.mutate,
    isPending: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};
