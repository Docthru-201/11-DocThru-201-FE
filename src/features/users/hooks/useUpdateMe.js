import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { updateMe } from '../api/user.service';
import { toast } from 'react-toastify';

export const useUpdateMe = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => updateMe(data),
    onSuccess: () => {
      toast.success('프로필이 수정되었습니다.');
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.user.me,
      });
    },
    onError: (error) => {
      toast.error(error.message || '프로필 수정에 실패했습니다.');
    },
  });

  return {
    updateMe: mutation.mutate,
    isPending: mutation.isPending,
  };
};
