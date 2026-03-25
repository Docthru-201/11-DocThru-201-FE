/**
 * 챌린지 관련 fetch 함수
 * 목록/일부는 백엔드 API, 나머지는 아직 mock.
 */

import { BASE_URL, handleResponse } from '@/apis/common';
import { challengeDetailResponseMock } from '@/mock/challenges';
import {
  applicationDetailResponseMock,
  applicationListResponseMock,
} from '@/mock/applications';
import { participantListResponseMock } from '@/mock/participants';

export async function getChallenges(params = {}) {
  const qs = new URLSearchParams();
  if (params.cursor) qs.set('cursor', String(params.cursor));
  if (params.limit != null) qs.set('limit', String(params.limit));
  if (params.keyword) qs.set('keyword', String(params.keyword));
  if (params.status) qs.set('status', String(params.status));
  if (params.category) qs.set('category', String(params.category));
  if (params.type) qs.set('type', String(params.type));

  const query = qs.toString();
  const url = `${BASE_URL}/challenges${query ? `?${query}` : ''}`;

  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include',
  });

  return handleResponse(response, '챌린지 목록을 불러오지 못했습니다.');
}

export async function getChallengeById(id) {
  void id;
  return challengeDetailResponseMock;
}

export async function createChallenge(body) {
  const response = await fetch(`${BASE_URL}/challenges`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  });

  return handleResponse(response, '챌린지 신청에 실패했습니다.');
}

export async function getMyChallenges(params = {}) {
  const qs = new URLSearchParams();
  if (params.tab) qs.set('tab', String(params.tab));
  const query = qs.toString();
  const url = `${BASE_URL}/challenges/me${query ? `?${query}` : ''}`;

  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include',
  });

  return handleResponse(response, '나의 챌린지를 불러오지 못했습니다.');
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
