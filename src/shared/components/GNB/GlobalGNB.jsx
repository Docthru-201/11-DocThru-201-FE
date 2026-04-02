'use client';

import { usePathname } from 'next/navigation';
import { GNBContainer } from './GNBContainer';

/** 인트로·로그인·회원가입 등 풀스크린/비GNB 라우트 */
const NO_GNB_PREFIXES = ['/intro', '/login', '/signup'];

export function GlobalGNB() {
  const pathname = usePathname();

  const hideGnb =
    NO_GNB_PREFIXES.some(
      (p) => pathname === p || pathname.startsWith(`${p}/`),
    ) || pathname.endsWith('/edit');
  if (hideGnb) return null;

  const adminTabs = pathname.startsWith('/admin')
    ? [
        {
          label: '챌린지 관리',
          href: '/admin/management',
          active: pathname.includes('/admin/management'),
        },
        {
          label: '챌린지 목록',
          href: '/challenges',
          active: pathname.includes('/challenges'),
        },
      ]
    : [];

  return <GNBContainer tabs={adminTabs} />;
}
