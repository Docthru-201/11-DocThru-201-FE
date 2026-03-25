import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchLikeCount,
  fetchMyLikeStatus,
  addLike,
  removeLike,
} from '../api/like.service';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { toast } from 'react-toastify';

export const useLikes = (workId) => {
  const queryClient = useQueryClient();

  const { data: likeCount } = useQuery({
    queryKey: QUERY_KEYS.like.count(workId),
    queryFn: () => fetchLikeCount(workId),
    enabled: !!workId,
  });

  const { data: likeStatus } = useQuery({
    queryKey: QUERY_KEYS.like.status(workId),
    queryFn: () => fetchMyLikeStatus(workId),
    enabled: !!workId,
  });

  const likeMutation = useMutation({
    mutationFn: () => addLike(workId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.like.count(workId),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.like.status(workId),
      });
    },
    onError: (error) => {
      toast.error(error.message || '좋아요에 실패했습니다.');
    },
  });

  const unlikeMutation = useMutation({
    mutationFn: () => removeLike(workId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.like.count(workId),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.like.status(workId),
      });
    },
    onError: (error) => {
      toast.error(error.message || '좋아요 취소에 실패했습니다.');
    },
  });

  const toggleLike = () => {
    if (likeStatus?.isLiked) {
      unlikeMutation.mutate();
    } else {
      likeMutation.mutate();
    }
  };

  return {
    likeCount: likeCount?.likeCount ?? 0,
    isLiked: likeStatus?.isLiked ?? false,
    toggleLike,
    isLikePending: likeMutation.isPending || unlikeMutation.isPending,
  };
};
