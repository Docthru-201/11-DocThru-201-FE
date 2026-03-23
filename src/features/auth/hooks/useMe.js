import { useEffect } from 'react';
import { getMeUser } from '../api/auth.service';
import { useAuthStore } from '@/shared/store/useAuthStore';

export const useMe = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const isLoggedIn = !!user;
  useEffect(() => {
    // 쿠키는 있는데 store에 유저 정보가 없을 때 (구글 로그인 후 등)
    if (!isLoggedIn) {
      getMeUser()
        .then((user) => setUser(user))
        .catch(() => {}); // 비로그인 상태면 그냥 무시
    }
  }, []);
};
