'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { Icon } from '@/shared/components/Icon';
import * as styles from './GNB.css.js';

function Logo({ className }) {
  return (
    <Link
      href="/"
      className={clsx(styles.logo, className)}
      aria-label="Docthru 홈"
    >
      <span className={styles.logoIcon}>
        <Icon name="docthruLogo" width={28} height={28} aria-hidden />
      </span>
      Docthru
    </Link>
  );
}

export function GNB({ status = 'guest', className, tabs = [], onTabChange }) {
  const isAdmin = status === 'admin';
  const isMember = status === 'member';
  const isGuest = status === 'guest';

  return (
    <header className={clsx(styles.gnb, className)} role="banner">
      <div className={styles.inner}>
        <div className={styles.left}>
          {(isAdmin || isGuest || isMember) && <Logo />}
          {isAdmin && tabs.length > 0 && (
            <nav className={styles.tabs} aria-label="주 메뉴">
              {tabs.map((tab, i) => {
                const TabEl = tab.href ? 'a' : 'button';
                const tabProps = tab.href
                  ? { href: tab.href }
                  : {
                      type: 'button',
                      onClick: () => onTabChange?.(i, tab),
                    };
                return (
                  <TabEl
                    key={i}
                    className={styles.tab[tab.active ? 'active' : 'default']}
                    {...tabProps}
                  >
                    {tab.label}
                  </TabEl>
                );
              })}
            </nav>
          )}
        </div>

        <div className={styles.right}>
          {isGuest && (
            <Link href="/auth/login" className={styles.loginButton}>
              로그인
            </Link>
          )}
          {isMember && (
            <>
              <span className={styles.profileWrap} aria-hidden>
                <Icon
                  name="notificationBellEmpty"
                  width={24}
                  height={24}
                  aria-hidden
                />
              </span>
              <span className={styles.profileWrap} aria-hidden>
                <Icon name="profileMember" width={32} height={32} aria-hidden />
              </span>
            </>
          )}
          {isAdmin && (
            <span className={styles.profileWrap} aria-hidden>
              <Icon name="profileAdmin" width={32} height={32} aria-hidden />
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
