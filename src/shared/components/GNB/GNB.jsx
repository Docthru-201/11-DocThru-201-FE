'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Icon } from '@/shared/components/Icon';
import * as styles from './GNB.css.js';
import { Button } from '@/shared/components';
import { getMyNotifications } from '@/apis/notification';

function gradeToLabel(grade) {
  if (grade === 'EXPERT') return '전문가';
  return '일반';
}

function Logo({ href = '/', ariaLabel = 'Docthru 홈' }) {
  return (
    <Link href={href} className={clsx(styles.logo)} aria-label={ariaLabel}>
      <span className={styles.logoIcon}>
        <Icon name="docthruLogo" width={17.55} height={20.25} aria-hidden />
      </span>
      Docthru
    </Link>
  );
}

function formatNotificationDate(value) {
  if (!value) return '';
  const str = typeof value === 'string' ? value : new Date(value).toISOString();
  return str.slice(0, 10).replaceAll('-', '.');
}

function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [hideBadge, setHideBadge] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const containerRef = useRef(null);
  const visibleItems = items.filter((n) => n.message?.trim());
  const hasUnread = visibleItems.some((n) => !n.isRead);
  const showBadge = hasUnread && !hideBadge;

  async function loadNotifications() {
    try {
      setLoading(true);
      setError(null);
      const data = await getMyNotifications();
      setItems(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  const handleToggle = () => {
    setOpen((prev) => !prev);
    setHideBadge(true);
  };

  useEffect(() => {
    if (!open) return undefined;

    if (!items.length && !loading && !error) {
      void loadNotifications();
    }

    const handlePointerDown = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div ref={containerRef} className={styles.notificationContainer}>
      <button
        type="button"
        className={clsx(styles.profileWrap, styles.notificationButton)}
        aria-label={hasUnread ? '읽지 않은 알림이 있습니다' : '알림'}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleToggle}
      >
        <Icon name="notificationBellEmpty" width={24} height={24} aria-hidden />
        {showBadge && <span className={styles.notificationBadge} aria-hidden />}
      </button>

      {open && (
        <div
          className={styles.notificationDropdown}
          role="region"
          aria-label="알림"
        >
          <div className={styles.notificationHeader}>알림</div>
          <ul className={styles.notificationList}>
            {loading && (
              <li className={styles.notificationEmpty}>
                알림을 불러오는 중입니다.
              </li>
            )}
            {error && !loading && (
              <li className={styles.notificationEmpty}>
                알림을 불러오지 못했습니다.
              </li>
            )}
            {!loading && !error && visibleItems.length === 0 && (
              <li className={styles.notificationEmpty}>알림이 없습니다.</li>
            )}
            {!loading &&
              !error &&
              visibleItems.map((n) => (
                <li key={n.id} className={styles.notificationItem}>
                  <p className={styles.notificationMessage}>{n.message}</p>
                  <p className={styles.notificationDate}>
                    {formatNotificationDate(n.createdAt)}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function GNB({
  status = 'guest',
  className = undefined,
  tabs = [],
  onTabChange = undefined,
  memberNickname = '체다치즈',
  memberGrade = 'NORMAL',

  memberGradeLabel = undefined,
  memberHasGoogleAccount = false,

  /** 세션 확인 전에는 로그인 버튼을 숨겨 쿠키만 있는 사용자에게 잠깐 로그인 UI가 노출되지 않게 함 */
  sessionReady = true,

  adminNickname = '체다치즈',
  adminSubtitleLabel = '어드민',
  onLogout = undefined,
}) {
  const isAdmin = status === 'admin';
  const isMember = status === 'member';
  const isGuest = status === 'guest' && sessionReady;

  const logoHref = isAdmin || isMember ? '/challenges' : '/';
  const logoAriaLabel =
    logoHref === '/challenges' ? '챌린지 목록으로 이동' : 'Docthru 홈';

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
          {(isAdmin || isMember || status === 'guest') && (
            <Logo href={logoHref} ariaLabel={logoAriaLabel} />
          )}
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
            <Button variant="outline" className={styles.loginButton}>
              <Link href="/login">로그인</Link>
            </Button>
          )}

          {(isMember || isAdmin) && <NotificationBell />}

          {isMember && (
            <>
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
                          <span className={styles.memberDropdownNameText}>
                            {memberNickname}
                          </span>
                          {memberHasGoogleAccount && (
                            <span
                              className={styles.memberDropdownGoogleIconWrap}
                              aria-hidden
                            >
                              <Icon
                                name="loginGoogle"
                                width={14}
                                height={14}
                                aria-hidden
                              />
                            </span>
                          )}
                        </p>
                        <p className={styles.memberDropdownGrade}>
                          {memberGradeLabel ?? gradeToLabel(memberGrade)}
                        </p>
                      </div>
                    </div>
                    <ul className={styles.memberDropdownList}>
                      <li className={styles.memberDropdownItem}>
                        <Link
                          href="/mypage"
                          className={styles.memberDropdownLink}
                          role="menuitem"
                          onClick={() => setMemberMenuOpen(false)}
                        >
                          마이페이지
                        </Link>
                      </li>
                      <li className={styles.memberDropdownItem}>
                        <Link
                          href="/mypage"
                          className={styles.memberDropdownLink}
                          role="menuitem"
                          onClick={() => setMemberMenuOpen(false)}
                        >
                          마이페이지
                        </Link>
                      </li>
                      <li className={styles.memberDropdownItem}>
                        <Link
                          href="/my"
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
                  className={clsx(styles.memberDropdown, styles.adminDropdown)}
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
