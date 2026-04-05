import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createNewWork,
  updateExistingWork,
  deleteExistingWork,
} from '../api/work.service';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const useWorkMutation = (workId, challengeId) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: async () => createNewWork(challengeId),
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.challenge.detail(challengeId),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.challenge.ranking(challengeId),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.challenge.myWork(challengeId),
      });
    },
    onError: (error) => {
      toast.error(error.message || '작업물 생성에 실패했습니다.');
    },
  });

  const updateMutation = useMutation({
    mutationFn: (body) => updateExistingWork(workId, body),
    onSuccess: (data, variables) => {
      toast.success('작업물이 수정되었습니다.');
      // PATCH 응답은 상세 GET보다 필드가 적음 → 기존 캐시와 병합해 이동 직후에도 최신 본문/제목/상태 표시
      queryClient.setQueryData(QUERY_KEYS.work.detail(workId), (old) =>
        old && typeof old === 'object' ? { ...old, ...data } : data,
      );
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.work.detail(workId),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.challenge.myWork(challengeId),
      });
      if (variables?.action === 'SUBMIT') {
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.challenge.ranking(challengeId),
        });
      }
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
        queryKey: QUERY_KEYS.challenge.detail(challengeId), // ← 추가
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.work.detail(workId),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.challenge.ranking(challengeId),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.challenge.myWork(challengeId),
      });

      router.push(`/challenges/${challengeId}`);
    },
    onError: (error) => {
      toast.error(error.message || '작업물 삭제에 실패했습니다.');
    },
  });

  return {
    createWork: createMutation.mutate,
    isCreatePending: createMutation.isPending,
    updateWork: updateMutation.mutate,
    isUpdatePending: updateMutation.isPending,
    deleteWork: deleteMutation.mutate,
    isDeletePending: deleteMutation.isPending,
  };
};
