const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

async function handleResponse(response, defaultMessage) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || defaultMessage);
  }

  if (response.status === 204) return;

  return response.json();
}

export async function fetchClient(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    credentials: 'include',
    ...options,
  });

  return handleResponse(response, '요청에 실패했습니다.');
}
