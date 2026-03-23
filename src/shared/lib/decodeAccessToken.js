import { decodeJwt } from 'jose';

export function decodeAccessToken(token) {
  if (!token) return null;

  try {
    const payload = decodeJwt(token);
    return payload;
  } catch (error) {
    console.error('토큰 디코딩 실패:', err);
    return null;
  }
}
