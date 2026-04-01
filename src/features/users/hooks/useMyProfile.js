import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { getMe } from '../api/user.service';

export const useMyProfile = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: QUERY_KEYS.user.me,
    queryFn: getMe,
  });

  return { me: data ?? null, isPending, isError };
};
