import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { getMyWorks } from '../api/user.service';

export const useMyWorks = () => {
  const { data, isPending } = useQuery({
    queryKey: QUERY_KEYS.user.works,
    queryFn: getMyWorks,
  });

  return { works: data ?? [], isPending };
};
