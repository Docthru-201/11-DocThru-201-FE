import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createNewWork,
  updateExistingWork,
  deleteExistingWork,
} from '../api/work.service';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const useWorkMutation = (workId) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (body) => createNewWork(body),
    onSuccess: (data) => {
      toast.success('작업물이 생성되었습니다.');
    },
    onError: (error) => {
      toast.error(error.message || '작업물 생성에 실패했습니다.');
    },
  });

  const updateMutation = useMutation({
    mutationFn: (body) => updateExistingWork(workId, body),
    onSuccess: () => {
      toast.success('작업물이 수정되었습니다.');
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.work.detail(workId),
      });
    },
    onError: (error) => {
      toast.error(error.message || '작업물 수정에 실패했습니다.');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteExistingWork(workId),
    onSuccess: () => {
      toast.success('작업물이 삭제되었습니다.');
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.work.detail(workId),
      });
      router.back();
    },
    onError: (error) => {
      toast.error(error.message || '작업물 삭제에 실패했습니다.');
    },
  });

  return {
    createWork: createMutation.mutate,
    updateWork: updateMutation.mutate,
    isUpdatePending: updateMutation.isPending,
    deleteWork: deleteMutation.mutate,
    isDeletePending: deleteMutation.isPending,
  };
};
