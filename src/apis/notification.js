export async function getMyNotifications() {
  const res = await fetch('/api/notifications/me', {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('알림을 불러오지 못했습니다');
  }

  const json = await res.json();
  return Array.isArray(json) ? json : (json.data ?? []);
}

export async function markNotificationAsRead(id, isRead = true) {
  const res = await fetch(`/api/notifications/me/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ isRead }),
  });

  if (!res.ok) {
    throw new Error('알림 읽음 처리에 실패했습니다');
  }

  return res.json();
}

export async function deleteMyNotification(id) {
  const res = await fetch(`/api/notifications/me/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('알림 삭제에 실패했습니다');
  }

  return true;
}
