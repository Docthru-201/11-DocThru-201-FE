'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { Button } from '@/shared/components/Button';
import { Icon } from '@/shared/components/Icon';
import * as styles from './GNB.css.js';

/**
 * Figma 4711-52571 GNB (Global Navigation Bar)
 * 반응형: ~767px small, 768px~ large (미디어 쿼리)
 * 로고 클릭 시 '/' 이동
 * @param {'guest'|'member'|'admin'} status - guest: 로그인 버튼(/login 이동) | member: 알림+멤버 프로필 | admin: 탭+관리자 프로필
 * @param {Array<{ label: string, active?: boolean, href?: string, onClick?: function }>} [tabs] - admin일 때 탭 목록
 * @param {function} [onTabChange] - 탭 클릭 시 (admin일 때)
 */
export function GNB({ status = 'guest', className }) {
  const isAdmin = status === 'admin';
  const isMember = status === 'member';

  return (
    <header className={clsx(styles.gnb, className)} role="banner">
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>
            <Icon name="docthruLogo" width={28} height={28} aria-hidden />
          </span>
          Docthru
        </Link>
      </div>

      {isAdmin && tabs.length > 0 && (
        <nav className={styles.center} aria-label="주 메뉴">
          <div className={styles.tabs}>
            {tabs.map((tab, i) => {
              const TabEl = tab.href ? 'a' : 'button';
              const tabProps = tab.href
                ? { href: tab.href }
                : { type: 'button', onClick: () => onTabChange?.(i, tab) };
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
          </div>
        </nav>
      )}

      <div className={styles.right}>
        {status === 'guest' && (
          <Button asChild variant="outline" className={styles.loginButton}>
            <Link href="/login">로그인</Link>
          </Button>
        )}
        {isMember && (
          <>
            <span className={styles.profileWrap} aria-hidden>
              <Icon name="notificationBellEmpty" width={24} height={24} />
            </span>
            <span className={styles.profileWrap} aria-hidden>
              <Icon name="profileMember" width={32} height={32} />
            </span>
          </>
        )}
        {isAdmin && (
          <span className={styles.profileWrap} aria-hidden>
            <Icon name="profileAdmin" width={32} height={32} />
          </span>
        )}
      </div>
    </header>
  );
}
