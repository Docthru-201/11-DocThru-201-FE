import {
  getComments,
  createComment,
  updateComment,
  deleteComment,
} from '@/apis/comments';

export const fetchComments = async (workId) => {
  try {
    return await getComments(workId);
  } catch (error) {
    throw new Error(error.message || '댓글 목록 조회 실패', { cause: error });
  }
};

export const addComment = async (workId, body) => {
  try {
    return await createComment(workId, body);
  } catch (error) {
    throw new Error(error.message || '댓글 작성 실패', { cause: error });
  }
};

export const editComment = async (commentId, body) => {
  try {
    return await updateComment(commentId, body);
  } catch (error) {
    throw new Error(error.message || '댓글 수정 실패', { cause: error });
  }
};

export const removeComment = async (commentId) => {
  try {
    return await deleteComment(commentId);
  } catch (error) {
    throw new Error(error.message || '댓글 삭제 실패', { cause: error });
  }
};
