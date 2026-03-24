import { useQuery } from '@tanstack/react-query';
import { getWorkDetail } from '../api/work.service';

export const useWork = (workId) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['work', workId],
    queryFn: () => getWorkDetail(workId),
    enabled: !!workId, // workId 없으면 요청 안 함
  });

  return { work: data, isPending, isError, error };
};
