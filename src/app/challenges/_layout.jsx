'use client';

import { usePathname } from 'next/navigation';
import { GNB } from '@/shared/components/GNB';
import * as styles from './ChallengeLayout.css';

export default function ChallengeLayout({ children }) {
  const pathname = usePathname();

  // 일반 사용자 및 관리자 공용 챌린지 탭
  const challengeTabs = [
    {
      label: '챌린지 목록',
      href: '/challenges',
      active: pathname === '/challenges' || pathname.includes('/challenges/'),
    },
    {
      label: '마이 챌린지',
      href: '/challenges/my',
      active: pathname.includes('/challenges/my'),
    },
  ];

  return (
    <div className={styles.challengeRoot}>
      <GNB
        status="user" // 일반 서비스 레이아웃이므로 "user"로 설정
        tabs={challengeTabs}
        className=""
        onTabChange={() => {}}
      />

      <main className={styles.challengeMain}>
        <div className={styles.contentContainer}>{children}</div>
      </main>
    </div>
  );
}
