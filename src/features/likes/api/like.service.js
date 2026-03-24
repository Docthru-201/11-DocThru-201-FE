import {
  getLikeCount,
  getMyLikeStatus,
  likeWork,
  unlikeWork,
} from '@/apis/likes';

export const fetchLikeCount = async (workId) => {
  try {
    return await getLikeCount(workId);
  } catch (error) {
    throw new Error(error.message || '좋아요 수 조회 실패', { cause: error });
  }
};

export const fetchMyLikeStatus = async (workId) => {
  try {
    return await getMyLikeStatus(workId);
  } catch (error) {
    throw new Error(error.message || '좋아요 여부 조회 실패', { cause: error });
  }
};

export const addLike = async (workId) => {
  try {
    return await likeWork(workId);
  } catch (error) {
    throw new Error(error.message || '좋아요 실패', { cause: error });
  }
};

export const removeLike = async (workId) => {
  try {
    return await unlikeWork(workId);
  } catch (error) {
    throw new Error(error.message || '좋아요 취소 실패', { cause: error });
  }
};
