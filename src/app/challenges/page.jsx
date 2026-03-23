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
  const [searchValue, setSearchValue] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [appliedFilter, setAppliedFilter] = useState(DEFAULT_CHALLENGE_FILTER);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const filterWrapRef = useRef(null);

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

  const filteredChallenges = useMemo(
    () =>
      filterChallengeItems(CHALLENGES_FROM_MOCK, appliedFilter, searchValue),
    [appliedFilter, searchValue],
  );

  const filterButtonActive =
    filterOpen || hasActiveChallengeFilter(appliedFilter);

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

        <div className={styles.toolbar}>
          <div className={styles.filterSlot} ref={filterWrapRef}>
            <Sort
              variant="filter"
              label="필터"
              active={filterButtonActive}
              onClick={() => setFilterOpen((prev) => !prev)}
            />
            {filterOpen && (
              <ChallengeFilterPopover
                applied={appliedFilter}
                onApply={setAppliedFilter}
                onClose={() => setFilterOpen(false)}
              />
            )}
          </div>
          <Search
            className={styles.searchField}
            placeholder="챌린지 이름을 검색해보세요"
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>

        <div className={styles.cardList}>
          {filteredChallenges.map((study) => (
            <Card
              key={study.id}
              study={study}
              onCtaClick={() => {}}
              showEditMenu
            />
          ))}
        </div>

        <div className={styles.paginationWrap}>
          <PageIndicator
            current={currentPage}
            total={totalPages}
            onChange={setCurrentPage}
          />
        </div>
      </main>
    </div>
  );
}
