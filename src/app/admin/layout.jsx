'use client';

import { usePathname } from 'next/navigation';
import { GNBContainer } from '@/shared/components/GNB/GNBContainer';
import * as styles from './AdminLayout.css.js';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const adminTabs = [
    {
      label: '챌린지 관리',
      href: '/admin/management',
      active: pathname.includes('/admin/management'),
    },
    {
      label: '챌린지 목록',
      href: '/admin/challenges',
      active: pathname.includes('/admin/challenges'),
    },
  ];

  return (
    <div className={styles.adminRoot}>
      <GNBContainer tabs={adminTabs} />

      <main className={styles.adminMain}>
        <div className={styles.contentContainer}>{children}</div>
      </main>
    </div>
  );
}
