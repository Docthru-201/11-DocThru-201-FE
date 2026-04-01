// features/users/hooks/useUpdateMyProfile.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { updateMyProfile } from '../api/user.service';
import { toast } from 'react-toastify';

export const useUpdateMyProfile = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => updateMyProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.user.me });
    },
    onError: (error) => {
      toast.error(error.message || '자기소개 수정에 실패했습니다.');
    },
  });

  return {
    updateMyProfile: mutation.mutate,
    isPending: mutation.isPending,
  };
};
