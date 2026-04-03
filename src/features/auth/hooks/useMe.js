import { useEffect, useState } from 'react';
import { getMeUser } from '../api/auth.service';
import { useAuthStore } from '@/shared/store/useAuthStore';

export const useMe = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const [sessionReady, setSessionReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getMeUser()
      .then((user) => {
        if (!cancelled) setUser(user);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setSessionReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, [setUser]);

  return { sessionReady };
};
