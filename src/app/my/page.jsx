'use client';

import { useState } from 'react';
import { GNBContainer } from '@/shared/components/GNB/GNBContainer';
import {
  Search,
  Tab,
  Card,
  Button,
  Icon,
  PageIndicator,
} from '@/shared/components';
import Link from 'next/link';
import * as styles from '../challenges/page.css';
import { challengeItemsMock } from '@/mock/challenges';
// import { filterChallengeItems } from '@/shared/lib/filterChallengeItems';

export default function MyChallengesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState('participating');
  const totalPages = 3;

  const myChallengesTabs = [
    { value: 'participating', label: '참여중인 챌린지' },
    { value: 'done', label: '완료한 챌린지' },
    { value: 'applied', label: '신청한 챌린지' },
  ];

  return (
    <div className={styles.page}>
      <GNBContainer />
      <main className={styles.main}>
        <header className={styles.headerMy}>
          <h1 className={styles.title}>나의 챌린지</h1>
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

        <div className={styles.tabBar}>
          <Tab tabs={myChallengesTabs} value={value} onChange={setValue} />
        </div>

        <div className={styles.toolbar}>
          <Search
            className={styles.searchField}
            placeholder="챌린지 이름을 검색해보세요"
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>

        <div className={styles.cardList}>
          {challengeItemsMock.map((study) => (
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
