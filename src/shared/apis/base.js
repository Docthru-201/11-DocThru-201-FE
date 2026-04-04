import { cookies } from 'next/headers';
import { getServerApiBaseUrl } from '@/shared/lib/serverApiUrl';

async function parseJsonBody(res) {
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export async function requestWithAuth(url, options = {}) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    throw new Error('인증 정보가 없습니다. 다시 로그인해 주세요');
  }

  const baseUrl = getServerApiBaseUrl();

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Cookie: `accessToken=${accessToken}`,
  };

  try {
    const res = await fetch(`${baseUrl}${url}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    const data = await parseJsonBody(res);

    if (!res.ok) {
      throw new Error((data && data.message) || '요청 처리에 실패했습니다.');
    }

    return data;
  } catch (error) {
    console.error(`API 요청 오류 (${url}):`, error.message);
    throw error;
  }
}
