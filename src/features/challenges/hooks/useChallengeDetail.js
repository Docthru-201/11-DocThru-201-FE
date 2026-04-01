// useChallengeDetail.js
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { getChallengeDetail } from '@/shared/apis/user';

export const useChallengeDetail = (challengeId) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: QUERY_KEYS.challenge.detail(challengeId),
    queryFn: () => getChallengeDetail(challengeId),
    enabled: !!challengeId,
  });

  return { challenge: data, isPending, isError, error };
};
