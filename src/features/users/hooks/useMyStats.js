import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { getMyStats } from '../api/user.service';

export const useMyStats = () => {
  const { data, isPending } = useQuery({
    queryKey: QUERY_KEYS.user.stats,
    queryFn: getMyStats,
  });

  return {
    stats: data ?? { participantCount: 0, workCount: 0, likeCount: 0 },
    isPending,
  };
};
