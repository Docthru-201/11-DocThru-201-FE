'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { challengeItemsMock } from '@/mock/challenges';
import { GNBContainer } from '@/shared/components/GNB/GNBContainer';
import {
  Search,
  Sort,
  Card,
  PageIndicator,
  Icon,
  Button,
} from '@/shared/components';
import {
  ChallengeFilterPopover,
  DEFAULT_CHALLENGE_FILTER,
  filterChallengeItems,
  hasActiveChallengeFilter,
} from './_components/ChallengeFilterPopover';
import * as styles from './page.css.js';

const CHALLENGES_FROM_MOCK = challengeItemsMock;

export default function ChallengesPage() {
  // 1. 상태 및 Ref 선언
  const [filterOpen, setFilterOpen] = useState(false);
  const [appliedFilter, setAppliedFilter] = useState(DEFAULT_CHALLENGE_FILTER);
  const [searchValue, setSearchValue] = useState('');
  const filterWrapRef = useRef(null);

  // 2. 외부 클릭 감지 로직
  useEffect(() => {
    if (!filterOpen) return undefined;
    function handlePointerDown(event) {
      const el = filterWrapRef.current;
      const target = event.target;
      if (el && target instanceof Node && !el.contains(target)) {
        setFilterOpen(false);
      }
    }
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [filterOpen]);

  // 3. 필터링 로직
  const filteredChallenges = useMemo(
    () =>
      filterChallengeItems(CHALLENGES_FROM_MOCK, appliedFilter, searchValue),
    [appliedFilter, searchValue],
  );

  return (
    <div className={styles.page}>
      <GNBContainer />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>챌린지 목록</h1>
          <Link href="/challenges/new">
            <Button
              variant="solidIcon"
              icon={<Icon name="plus" width={16} height={16} aria-hidden />}
              iconPosition="right"
            >
              신규 챌린지 신청
            </Button>
          </Link>
        </header>

        {/* 현재 레이아웃 확인을 위한 임시 메시지 */}
        <div
          style={{
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
          }}
        >
          Challenge Layout 확인을 위한 전체 임시 블러킹 중
        </div>
      </main>
    </div>
  );
}
