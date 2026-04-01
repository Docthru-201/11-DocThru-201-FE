// src/features/works/api/work.service.js
import { getWorkById, updateWork, deleteWork } from '@/apis/works';

export const getWorkDetail = async (workId) => {
  try {
    return await getWorkById(workId);
  } catch (error) {
    throw new Error(error.message || '작업물 조회 실패', { cause: error });
  }
};

export const updateExistingWork = async (workId, body) => {
  try {
    return await updateWork(workId, body);
  } catch (error) {
    throw new Error(error.message || '작업물 수정 실패', { cause: error });
  }
};

export const deleteExistingWork = async (workId) => {
  try {
    return await deleteWork(workId);
  } catch (error) {
    throw new Error(error.message || '작업물 삭제 실패', { cause: error });
  }
};
