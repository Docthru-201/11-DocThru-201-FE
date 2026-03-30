import { useQuery } from '@tanstack/react-query';
import { getWorkDetail } from '../api/work.service';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';

export const useWork = (workId) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: QUERY_KEYS.work.detail(workId),
    queryFn: () => getWorkDetail(workId),
    enabled: !!workId,
  });

  return { work: data, isPending, isError, error };
};
