'use client';

import { GNB } from './GNB';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useLogout } from '@/features/auth/hooks/useLogout';

export function GNBContainer({ tabs = [], onTabChange = undefined }) {
  const { user, isLoggedIn } = useAuthStore(); // ✅ store에서 꺼냄
  const { logout } = useLogout(); // ✅ 로그아웃 훅

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
