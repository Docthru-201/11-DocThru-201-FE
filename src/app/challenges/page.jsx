'use client';

import { useState } from 'react';
import Link from 'next/link';
import { challengeItemsMock } from '@/mock/challenges';
import {
  GNB,
  Search,
  Sort,
  Card,
  PageIndicator,
  Icon,
  Button,
} from '@/shared/components';
import * as styles from './page.css.js';

const CHALLENGES_FROM_MOCK = challengeItemsMock;

export default function ChallengesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [sortActive, setSortActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
    <div className={styles.page}>
      <GNB status="member" />
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
          <Sort
            label="필터"
            active={sortActive}
            onClick={() => setSortActive((prev) => !prev)}
          />
          <Search
            className={styles.searchField}
            placeholder="챌린지 이름을 검색해보세요"
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>

        <div className={styles.cardList}>
          {CHALLENGES_FROM_MOCK.map((study, i) => (
            <Card key={i} study={study} onCtaClick={() => {}} showEditMenu />
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
