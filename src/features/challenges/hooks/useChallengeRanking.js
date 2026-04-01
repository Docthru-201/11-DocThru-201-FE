// useChallengeRanking.js
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { getChallengeRanking } from '../api/challenges.service';

export const useChallengeRanking = (challengeId) => {
  const { data, isPending } = useQuery({
    queryKey: QUERY_KEYS.challenge.ranking(challengeId),
    queryFn: () => getChallengeRanking(challengeId),
    enabled: !!challengeId,
    staleTime: 0,
  });

  return { rankingData: data ?? [], isPending };
};
