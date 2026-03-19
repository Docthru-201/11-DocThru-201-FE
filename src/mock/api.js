// Swagger 명세 기반 API 목 핸들러
// 실제 HTTP 클라이언트 대신 import 해서 사용
import { loginResponseMock, signupResponseMock } from './auth';
import { meResponseMock, publicUserResponseMock } from './users';
import {
  challengeListResponseMock,
  challengeDetailResponseMock,
} from './challenges';
import { workListResponseMock, workDetailResponseMock } from './works';
import { commentListResponseMock, commentDetailResponseMock } from './comments';
import {
  likeCountResponseMock,
  likeStatusResponseMock,
  likeActionResponseMock,
} from './likes';
import {
  notificationListResponseMock,
  notificationDetailResponseMock,
} from './notifications';
import {
  applicationListResponseMock,
  applicationDetailResponseMock,
} from './applications';
import { participantListResponseMock } from './participants';
import { profileMeResponseMock, profilePublicResponseMock } from './profile';

// 공통 성공/메시지 전용 응답
const messageOnly = (message) => ({
  message,
  data: undefined,
});

// Mock API
export const apiMockMap = {
  // auth
  'POST /auth/signup': () => signupResponseMock,
  'POST /auth/login': () => loginResponseMock,
  'POST /auth/logout': () => messageOnly('로그아웃 성공'),
  'POST /auth/logout/all': () => messageOnly('모든 기기 로그아웃 성공'),
  'POST /auth/refresh': () => ({
    message: '토큰 재발급 성공',
    data: {
      accessToken: 'mock-refreshed-access-token',
    },
  }),
  'GET /auth/:provider/login': () => messageOnly('OAuth 로그인 리다이렉트'),
  'GET /auth/:provider/callback': () => loginResponseMock,

  // users
  'GET /users/me': () => meResponseMock,
  'PATCH /users/me': () => meResponseMock,
  'DELETE /users/me': () => messageOnly('회원 탈퇴 성공'),
  'GET /users/:userId': () => publicUserResponseMock,

  // profile
  'GET /users/me/profile': () => profileMeResponseMock,
  'PATCH /users/me/profile': () => profileMeResponseMock,
  'GET /users/:userId/profile': () => profilePublicResponseMock,

  // challenges
  'GET /challenges': () => challengeListResponseMock,
  'POST /challenges': () => challengeDetailResponseMock,
  'GET /challenges/me': () => challengeListResponseMock,
  'GET /challenges/:challengeId': () => challengeDetailResponseMock,
  'PATCH /challenges/:challengeId': () => challengeDetailResponseMock,
  'DELETE /challenges/:challengeId': () => messageOnly('챌린지 삭제 성공'),
  'GET /users/me/challenges': () => challengeListResponseMock,
  'GET /challenges/me/:challengeId': () => challengeDetailResponseMock,
  'PATCH /challenges/me/:challengeId': () => applicationDetailResponseMock,
  'GET /challenges/:challengeId/participants': () =>
    participantListResponseMock,
  'POST /challenges/:challengeId/applications': () =>
    applicationDetailResponseMock,

  // works
  'GET /works': () => workListResponseMock,
  'POST /works': () => workDetailResponseMock,
  'GET /works/:workId': () => workDetailResponseMock,
  'PATCH /works/:workId': () => workDetailResponseMock,
  'DELETE /works/:workId': () => messageOnly('작업물 삭제 성공'),

  // comments
  'GET /works/:workId/comments': () => commentListResponseMock,
  'POST /works/:workId/comments': () => commentDetailResponseMock,
  'PATCH /comments/:commentId': () => commentDetailResponseMock,
  'DELETE /comments/:commentId': () => messageOnly('댓글 삭제 성공'),

  // likes
  'GET /works/:workId/likes/count': () => likeCountResponseMock,
  'GET /works/:workId/likes/me': () => likeStatusResponseMock,
  'POST /works/:workId/likes': () => likeActionResponseMock,
  'DELETE /works/:workId/likes': () => likeActionResponseMock,

  // notifications
  'GET /notifications/me': () => notificationListResponseMock,
  'PATCH /notifications/me/:notificationId': () =>
    notificationDetailResponseMock,
  'DELETE /notifications/me/:notificationId': () =>
    messageOnly('알림 삭제 성공'),
  'POST /notifications': () => notificationDetailResponseMock,

  // applications
  'GET /applications/:applicationId': () => applicationDetailResponseMock,

  // admin
  'GET /admin/management': () => challengeListResponseMock,
  'GET /admin/management/:challengeId': () => applicationListResponseMock,
  'PATCH /admin/management/:applicationId': () => applicationDetailResponseMock,
};

// 간단히 사용 가능한 헬퍼
// 예: const res = await mockRequest('GET', '/challenges');
export async function mockRequest(method, path) {
  const key = `${method.toUpperCase()} ${path}`;
  const handler = apiMockMap[key];

  if (!handler) {
    throw new Error(`Mock handler not found for ${key}`);
  }

  // 실제 HTTP 처럼 Promise 인터페이스로 감싸줌
  return Promise.resolve(handler());
}
