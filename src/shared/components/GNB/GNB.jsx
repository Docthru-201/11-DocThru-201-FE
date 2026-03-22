'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Icon } from '@/shared/components/Icon';
import * as styles from './GNB.css.js';

function gradeToLabel(grade) {
  if (grade === 'EXPERT') return '전문가';
  return '일반';
}

function Logo({ className = undefined } = {}) {
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

export function GNB({
  status = 'guest',
  className = undefined,
  tabs = [],
  onTabChange = undefined,
  memberNickname = '체다치즈',
  memberGrade = 'EXPERT',
  /** API에서 이미 한글 라벨을 주는 경우 우선 */
  memberGradeLabel = undefined,
  /** 어드민 헤더 드롭다운 */
  adminNickname = '체다치즈',
  adminSubtitleLabel = '어드민',
  onLogout = undefined,
}) {
  const isAdmin = status === 'admin';
  const isMember = status === 'member';
  const isGuest = status === 'guest';

  const [memberMenuOpen, setMemberMenuOpen] = useState(false);
  const memberMenuRef = useRef(null);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  const adminMenuRef = useRef(null);

  useEffect(() => {
    if (!memberMenuOpen && !adminMenuOpen) return undefined;

    const handlePointerDown = (e) => {
      if (memberMenuRef.current && !memberMenuRef.current.contains(e.target)) {
        setMemberMenuOpen(false);
      }
      if (adminMenuRef.current && !adminMenuRef.current.contains(e.target)) {
        setAdminMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMemberMenuOpen(false);
        setAdminMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [memberMenuOpen, adminMenuOpen]);

  function handleLogoutClick() {
    setMemberMenuOpen(false);
    setAdminMenuOpen(false);
    if (onLogout) {
      onLogout();
      return;
    }
    /* Storybook 등 App Router 컨텍스트 밖에서는 useRouter 대신 이동 */
    if (typeof window !== 'undefined') {
      window.location.assign('/login');
    }
  }

  return (
    <header className={clsx(styles.gnb, className)} role="banner">
      <div className={styles.inner}>
        <div className={styles.left}>
          {(isAdmin || isGuest || isMember) && <Logo />}
          {isAdmin && tabs.length > 0 && (
            <nav className={styles.tabs} aria-label="주 메뉴">
              {tabs.map((tab, i) => {
                const tabClassName =
                  styles.tab[tab.active ? 'active' : 'default'];

                if (tab.href) {
                  return (
                    <a
                      key={i}
                      href={tab.href}
                      className={tabClassName}
                      aria-current={tab.active ? 'page' : undefined}
                    >
                      {tab.label}
                    </a>
                  );
                }

                return (
                  <button
                    key={i}
                    type="button"
                    className={tabClassName}
                    onClick={() => onTabChange?.(i, tab)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          )}
        </div>

        <div className={styles.right}>
          {isGuest && (
            <Link href="/login" className={styles.loginButton}>
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
              <div className={styles.memberMenu} ref={memberMenuRef}>
                <button
                  type="button"
                  className={styles.memberTrigger}
                  aria-label="프로필 메뉴"
                  aria-haspopup="menu"
                  aria-expanded={memberMenuOpen}
                  onClick={() => setMemberMenuOpen((open) => !open)}
                >
                  <Icon
                    name="profileMember"
                    width={32}
                    height={32}
                    aria-hidden
                  />
                </button>
                {memberMenuOpen && (
                  <div
                    className={styles.memberDropdown}
                    role="menu"
                    aria-label="회원 메뉴"
                  >
                    <div className={styles.memberDropdownHeader}>
                      <span className={styles.memberDropdownAvatar} aria-hidden>
                        <Icon name="profileMember" width={32} height={32} />
                      </span>
                      <div className={styles.memberDropdownMeta}>
                        <p className={styles.memberDropdownName}>
                          {memberNickname}
                        </p>
                        <p className={styles.memberDropdownGrade}>
                          {memberGradeLabel ?? gradeToLabel(memberGrade)}
                        </p>
                      </div>
                    </div>
                    <ul className={styles.memberDropdownList}>
                      <li className={styles.memberDropdownItem}>
                        <Link
                          href="/challenges"
                          className={styles.memberDropdownLink}
                          role="menuitem"
                          onClick={() => setMemberMenuOpen(false)}
                        >
                          나의 챌린지
                        </Link>
                      </li>
                      <li className={styles.memberDropdownItem}>
                        <button
                          type="button"
                          className={styles.memberDropdownLogout}
                          role="menuitem"
                          onClick={handleLogoutClick}
                        >
                          로그아웃
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
          {isAdmin && (
            <div className={styles.memberMenu} ref={adminMenuRef}>
              <button
                type="button"
                className={styles.memberTrigger}
                aria-label="어드민 프로필 메뉴"
                aria-haspopup="menu"
                aria-expanded={adminMenuOpen}
                onClick={() => setAdminMenuOpen((open) => !open)}
              >
                <Icon name="profileAdmin" width={32} height={32} aria-hidden />
              </button>
              {adminMenuOpen && (
                <div
                  className={styles.memberDropdown}
                  role="menu"
                  aria-label="어드민 메뉴"
                >
                  <div className={styles.memberDropdownHeader}>
                    <span className={styles.memberDropdownAvatar} aria-hidden>
                      <Icon name="profileAdmin" width={32} height={32} />
                    </span>
                    <div className={styles.memberDropdownMeta}>
                      <p className={styles.memberDropdownName}>
                        {adminNickname}
                      </p>
                      <p className={styles.memberDropdownGrade}>
                        {adminSubtitleLabel}
                      </p>
                    </div>
                  </div>
                  <ul className={styles.memberDropdownList}>
                    <li className={styles.memberDropdownItem}>
                      <button
                        type="button"
                        className={styles.adminDropdownLogout}
                        role="menuitem"
                        onClick={handleLogoutClick}
                      >
                        로그아웃
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
