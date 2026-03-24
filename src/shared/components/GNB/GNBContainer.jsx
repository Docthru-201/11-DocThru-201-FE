'use client';

import { GNB } from './GNB';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useLogout } from '@/features/auth/hooks/useLogout';
import { useMe } from '@/features/auth/hooks/useMe';

export function GNBContainer({ tabs = [], onTabChange = undefined }) {
  useMe();
  const user = useAuthStore((state) => state.user);
  const { logout } = useLogout(); // ✅ 로그아웃 훅

  const isLoggedIn = !!user;
  const status = !isLoggedIn
    ? 'guest'
    : user?.role === 'ADMIN'
      ? 'admin'
      : 'member';

  return (
    <GNB
      status={status}
      memberNickname={user?.nickname}
      memberGrade={user?.grade}
      adminNickname={user?.nickname}
      onLogout={logout}
      tabs={tabs}
      onTabChange={onTabChange}
    />
  );
}
