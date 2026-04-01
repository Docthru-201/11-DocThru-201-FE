'use client';

import * as styles from './page.css.js';
import ProfileSection from './_components/ProfileSection';
import StatsSection from './_components/StatsSection';
import WorkListSection from './_components/WorkListSection';
import AccountSection from './_components/AccountSection';
import { useMyProfile } from '@/features/users/hooks/useMyProfile';
import { useMyStats } from '@/features/users/hooks/useMyStats';

export default function MyPage() {
  const { me, isPending } = useMyProfile();
  const { stats } = useMyStats();

  if (isPending)
    return <div className={styles.statusWrapper}>불러오는 중...</div>;
  if (!me)
    return (
      <div className={styles.statusWrapper}>유저 정보를 찾을 수 없습니다.</div>
    );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.layout}>
          <aside className={styles.leftPanel}>
            <ProfileSection me={me} />
          </aside>
          <main className={styles.rightPanel}>
            <StatsSection stats={stats} />
            <WorkListSection />
            <AccountSection me={me} />
          </main>
        </div>
      </div>
    </div>
  );
}
