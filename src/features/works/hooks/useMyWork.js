// useMyWork.js
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { getMyWorkAction } from '@/shared/apis/user';

export const useMyWork = (challengeId) => {
  const { data, isPending } = useQuery({
    queryKey: QUERY_KEYS.challenge.myWork(challengeId),
    queryFn: () => getMyWorkAction(challengeId),
    enabled: !!challengeId,
    throwOnError: false, // 작업물 없을 때 에러 무시
  });

  return { myWork: data ?? null, isPending };
};
