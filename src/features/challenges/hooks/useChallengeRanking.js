// useChallengeRanking.js
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { getRankingAction } from '@/shared/apis/user';

export const useChallengeRanking = (challengeId) => {
  const { data, isPending } = useQuery({
    queryKey: QUERY_KEYS.challenge.ranking(challengeId),
    queryFn: () => getRankingAction(challengeId),
    enabled: !!challengeId,
  });

  return { rankingData: data ?? [], isPending };
};
