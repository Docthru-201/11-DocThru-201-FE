import { cookies } from 'next/headers';
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export async function requestWithAuth(url, options = {}) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    throw new Error('인증 정보가 없습니다. 다시 로그인해 주세요');
  }

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Cookie: `accessToken=${accessToken}`,
  };

  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || '요청 처리에 실패했습니다.');
    }

    return data;
  } catch (error) {
    console.error(`API 요청 오류 (${url}):`, error.message);
    throw error;
  }
}
