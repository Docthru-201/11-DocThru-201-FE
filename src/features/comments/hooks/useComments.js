import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchComments,
  addComment,
  editComment,
  removeComment,
} from '../api/comment.service';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { toast } from 'react-toastify';

export const useComments = (workId) => {
  const queryClient = useQueryClient();

  const {
    data: comments,
    isPending,
    isError,
  } = useQuery({
    queryKey: QUERY_KEYS.comments.all(workId), // all로 수정
    queryFn: () => fetchComments(workId),
    enabled: !!workId,
  });

  const createMutation = useMutation({
    mutationFn: (body) => addComment(workId, body),
    onSuccess: () => {
      toast.success('댓글이 작성되었습니다.');
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.comments.all(workId),
      });
    },
    onError: (error) => {
      toast.error(error.message || '댓글 작성에 실패했습니다.');
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ commentId, body }) => editComment(commentId, body),
    onSuccess: () => {
      toast.success('댓글이 수정되었습니다.');
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.comments.all(workId),
      });
    },
    onError: (error) => {
      toast.error(error.message || '댓글 수정에 실패했습니다.');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (commentId) => removeComment(commentId),
    onSuccess: () => {
      toast.success('댓글이 삭제되었습니다.');
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.comments.all(workId),
      });
    },
    onError: (error) => {
      toast.error(error.message || '댓글 삭제에 실패했습니다.');
    },
  });

  return {
    comments: comments ?? [],
    isPending,
    isError,
    createComment: createMutation.mutate,
    isCreatePending: createMutation.isPending,
    updateComment: updateMutation.mutate,
    isUpdatePending: updateMutation.isPending,
    deleteComment: deleteMutation.mutate,
    isDeletePending: deleteMutation.isPending,
  };
};
