import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { createChallengeRequest } from '../api/challenges.service';

export function useCreateChallenge() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (payload) => createChallengeRequest(payload),
    onSuccess: () => {
      toast.success('챌린지 신청이 완료되었습니다.');
      router.push('/challenges');
    },
    onError: (error) => {
      toast.error(error.message || '챌린지 신청에 실패했습니다.');
    },
  });

  return {
    createChallenge: mutation.mutate,
    createChallengeAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
