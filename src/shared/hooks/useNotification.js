import { useQuery } from '@tanstack/react-query';
import { getMyNotifications } from '@/apis/notification';

export function useMyNotificationsQuery(options = {}) {
  const { enabled = true, ...rest } = options;

  return useQuery({
    queryKey: ['notifications', 'me'],
    queryFn: () => getMyNotifications(),
    enabled,
    ...rest,
  });
}

export function useUnreadCount(options = {}) {
  const query = useMyNotificationsQuery(options);
  const items = Array.isArray(query.data)
    ? query.data
    : (query.data?.items ?? []);
  const unreadCount = items.filter((n) => !n.isRead).length;

  return {
    ...query,
    unreadCount,
  };
}
