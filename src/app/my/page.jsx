'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getMyChallenges } from '@/apis/challenges';
import {
  Search,
  Tab,
  Card,
  Button,
  Icon,
  PageIndicator,
} from '@/shared/components';
import * as styles from '../challenges/page.css.js';

const PAGE_SIZE = 5;

export default function MyChallengesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState('participating');
  const skipScrollToTopRef = useRef(true);

  const handleTabChange = (next) => {
    setValue(next);
    setCurrentPage(1);
  };

  const handleSearchChange = (next) => {
    setSearchValue(next);
    setCurrentPage(1);
  };

  const myChallengesTabs = [
    { value: 'participating', label: '참여중인 챌린지' },
    { value: 'done', label: '완료한 챌린지' },
    { value: 'applied', label: '신청한 챌린지' },
  ];

  const {
    data: challengeItems = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['challenges', 'my', value],
    queryFn: async () => {
      const res = await getMyChallenges({ tab: value });
      return res?.data?.items ?? [];
    },
    staleTime: 60 * 1000,
  });

  useEffect(() => {
    if (skipScrollToTopRef.current) {
      skipScrollToTopRef.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const filteredChallenges = useMemo(() => {
    const q = searchValue.trim().toLowerCase();
    if (!q) return challengeItems;
    return challengeItems.filter((item) =>
      item.title.toLowerCase().includes(q),
    );
  }, [challengeItems, searchValue]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(filteredChallenges.length / PAGE_SIZE)),
    [filteredChallenges.length],
  );

  const safePage = Math.min(currentPage, totalPages);

  const displayedChallenges = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filteredChallenges.slice(start, start + PAGE_SIZE);
  }, [filteredChallenges, safePage]);

  return (
    <div className={styles.page}>
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
          <Tab
            tabs={myChallengesTabs}
            value={value}
            onChange={handleTabChange}
          />
        </div>

        <div className={styles.toolbar}>
          <Search
            className={styles.searchField}
            placeholder="챌린지 이름을 검색해보세요"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>

        {isPending && (
          <p className={styles.feedback}>챌린지 목록을 불러오는 중…</p>
        )}
        {isError && (
          <p className={styles.feedback} role="alert">
            {error?.message ?? '나의 챌린지를 불러오지 못했습니다.'}
          </p>
        )}

        {!isPending && !isError && (
          <div className={styles.cardList}>
            {displayedChallenges.map((study) => (
              <Card
                key={study.id}
                study={study}
                onCtaClick={() => {}}
                showEditMenu
              />
            ))}
          </div>
        )}

        {!isPending && !isError && filteredChallenges.length > 0 && (
          <div className={styles.paginationWrap}>
            <PageIndicator
              current={safePage}
              total={totalPages}
              onChange={setCurrentPage}
            />
          </div>
        )}
      </main>
    </div>
  );
}
