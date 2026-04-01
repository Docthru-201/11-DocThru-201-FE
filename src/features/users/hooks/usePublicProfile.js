import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { getPublicProfile } from '../api/user.service';

export const usePublicProfile = (userId) => {
  const { data, isPending } = useQuery({
    queryKey: QUERY_KEYS.user.profile(userId),
    queryFn: () => getPublicProfile(userId),
    enabled: !!userId,
  });

  return { profile: data ?? null, isPending };
};
