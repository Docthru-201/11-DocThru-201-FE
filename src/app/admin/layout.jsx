'use client';

import { usePathname } from 'next/navigation';
import * as styles from './AdminLayout.css.js';
import { vars } from '@/styles/tokens.css';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isAdminChallengesList = pathname?.startsWith('/admin/challenges');

  return (
    <div className={styles.adminRoot}>
      <main
        className={styles.adminMain}
        style={{
          backgroundColor: isAdminChallengesList
            ? vars.color.gray[50]
            : undefined,
        }}
      >
        <div className={styles.contentContainer}>{children}</div>
      </main>
    </div>
  );
}
