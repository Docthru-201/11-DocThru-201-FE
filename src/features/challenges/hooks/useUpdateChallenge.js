import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { updateChallengeRequest } from '../api/challenges.service';

export function useUpdateChallenge() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (payload) => updateChallengeRequest(payload),
    onSuccess: () => {
      toast.success('챌린지 수정이 완료되었습니다.');
      router.push('/challenges');
    },
    onError: (error) => {
      toast.error(error.message || '챌린지 수정에 실패했습니다.');
    },
  });

  return {
    updateChallenge: mutation.mutate,
    updateChallengeAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
