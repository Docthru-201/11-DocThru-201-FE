'use client';

import * as styles from './AdminLayout.css.js';

export default function AdminLayout({ children }) {
  return (
    <div className={styles.adminRoot}>
      <main className={styles.adminMain}>
        <div className={styles.contentContainer}>{children}</div>
      </main>
    </div>
  );
}
