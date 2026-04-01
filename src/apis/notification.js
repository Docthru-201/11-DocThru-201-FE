const API_BASE_URL = 'http://localhost:5001';

export async function getMyNotifications() {
  const res = await fetch(`${API_BASE_URL}/api/notifications/me`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('알림을 불러오지 못했습니다');
  }

  const json = await res.json();
  return Array.isArray(json) ? json : (json.data ?? []);
}
