/**
 * work, like, comment 관련 fetch 함수
 * 현재는 `src/mock/*` 목 응답을 그대로 반환합니다.
 */

import { workDetailResponseMock, workListResponseMock } from '@/mock/works';
import {
  commentDetailResponseMock,
  commentListResponseMock,
} from '@/mock/comments';
import {
  likeActionResponseMock,
  likeCountResponseMock,
  likeStatusResponseMock,
} from '@/mock/likes';

const messageOnly = (message) => ({
  message,
  data: undefined,
});

export async function getWorks(params = {}) {
  void params;
  return workListResponseMock;
}

export async function getWorkById(workId) {
  void workId;
  return workDetailResponseMock;
}

export async function createWork(body) {
  void body;
  return workDetailResponseMock;
}

export async function updateWork(workId, body) {
  void workId;
  void body;
  return workDetailResponseMock;
}

export async function deleteWork(workId) {
  void workId;
  return messageOnly('작업물 삭제 성공');
}

// Comments
export async function getComments(workId, params = {}) {
  void workId;
  void params;
  return commentListResponseMock;
}

export async function createComment(workId, body) {
  void workId;
  void body;
  return commentDetailResponseMock;
}

export async function updateComment(commentId, body) {
  void commentId;
  void body;
  return commentDetailResponseMock;
}

export async function deleteComment(commentId) {
  void commentId;
  return messageOnly('댓글 삭제 성공');
}

// Likes
export async function getLikeCount(workId) {
  void workId;
  return likeCountResponseMock;
}

export async function getLikeStatus(workId) {
  void workId;
  return likeStatusResponseMock;
}

export async function likeWork(workId) {
  void workId;
  return likeActionResponseMock;
}

export async function unlikeWork(workId) {
  void workId;
  return likeActionResponseMock;
}
