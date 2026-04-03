'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { getMeUser } from '@/features/auth/api/auth.service';

export function ChallengesAuthGate({ children }) {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);

  const [isChecking, setIsChecking] = useState(true);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const redirectHome = () => {
      if (cancelled) return;
      toast.error('로그인 후 이용해주세요.');
      router.replace('/');
    };

    const verify = async () => {
      try {
        let currentUser = useAuthStore.getState().user;

        if (!currentUser) {
          const me = await getMeUser();

          if (cancelled) return;

          if (me) {
            useAuthStore.getState().setUser(me);
            currentUser = me;
          }
        }

        if (cancelled) return;

        if (!currentUser) {
          redirectHome();
          return;
        }

        setHasChecked(true);
      } catch (error) {
        if (cancelled) return;
        redirectHome();
      } finally {
        if (!cancelled) {
          setIsChecking(false);
        }
      }
    };

    if (useAuthStore.persist.hasHydrated()) {
      verify();
    } else {
      const unsub = useAuthStore.persist.onFinishHydration(() => {
        verify();
      });

      return () => {
        cancelled = true;
        unsub();
      };
    }

    return () => {
      cancelled = true;
    };
  }, [router]);

  useEffect(() => {
    if (!hasChecked) return;

    if (!user) {
      router.replace('/');
    }
  }, [hasChecked, user, router]);

  if (isChecking || !hasChecked || !user) {
    return null;
  }

  return children;
}
