/**
 * 챌린지 관련 fetch 함수
 * 현재는 `src/mock/*` 목 응답을 그대로 반환합니다.
 */

import {
  challengeDetailResponseMock,
  challengeListResponseMock,
} from '@/mock/challenges';
import {
  applicationDetailResponseMock,
  applicationListResponseMock,
} from '@/mock/applications';
import { participantListResponseMock } from '@/mock/participants';

const messageOnly = (message) => ({
  message,
  data: undefined,
});

export async function getChallenges(params = {}) {
  void params;
  return challengeListResponseMock;
}

export async function getChallengeById(id) {
  void id;
  return challengeDetailResponseMock;
}

export async function createChallenge(body) {
  void body;
  return challengeDetailResponseMock;
}

export async function getMyChallenges(params = {}) {
  void params;
  return challengeListResponseMock;
}

export async function applyChallenge(challengeId, body) {
  void challengeId;
  void body;
  return applicationDetailResponseMock;
}

export async function getParticipants(challengeId) {
  void challengeId;
  return participantListResponseMock;
}

export async function getChallengeApplications(challengeId, params = {}) {
  void challengeId;
  void params;
  return applicationListResponseMock;
}

export async function getApplicationById(applicationId) {
  void applicationId;
  return applicationDetailResponseMock;
}
