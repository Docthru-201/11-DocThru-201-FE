'use client';

// import { useState, useEffect } from 'react';
import {
  GNB,
  Search,
  Tab,
  Card,
  Button,
  Icon,
  PageIndicator,
} from '@/shared/components';
import Link from 'next/link';
import * as styles from '../challenges/page.css';

export default function MyChallengesPage() {
  const [myChallenges, setMyChallenges] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState('participating');
  const totalPages = 3;

  const myChallengesTabs = [
    { value: 'participating', label: '참여중인 챌린지' },
    { value: 'done', label: '완료한 챌린지' },
    { value: 'applicated', label: '신청한 챌린지' },
  ];

  const filteredChallenges = useMemo(
    () =>
      filterChallengeItems(CHALLENGES_FROM_MOCK, appliedFilter, searchValue),
    [appliedFilter, searchValue],
  );

  // useEffect(() => {
  //   // 일단 이건 api쪽에 작성해야함.
  //   const fetchMyChallenges = async () => {
  //     try {
  //       setIsLoading(true);
  //       // Swagger 주소 적용
  //       const response = await fetch('/users/me/challenges?status=APPROVED');
  //       const result = await response.json();

  //       if (result?.data?.items) {
  //         setMyChallenges(result.data.items);
  //       }
  //     } catch (error) {
  //       console.error('데이터를 불러오는데 실패했어요:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchMyChallenges();
  // }, []);

  return (
    <div className={styles.page}>
      <GNB status="member" />
      <main className={styles.main}>
        <header className={styles.header}>
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

        <div>
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

// <div className={styles.page}>
//   <GNB status="member" />

//   <main className={styles.main}>
//     <h1 className={styles.title}>나의 챌린지</h1>

//     <div className={styles.filterSection}>
//       <Tab tabs={['참여중인 챌린지', '완료한 챌린지', '신청한 챌린지']} />
//       <Search placeholder="챌린지 이름을 검색해보세요" />
//     </div>

//     <div className={styles.cardList}>
//       {isLoading ? (
//         <p>로딩 중입니다...</p>
//       ) : myChallenges.length > 0 ? (
//         myChallenges.map((challenge) => (
//           <Card
//             key={challenge.id}
//             study={challenge}
//             ctaText="도전 계속하기"
//           />
//         ))
//       ) : (
//         <p>참여 중인 챌린지가 없습니다.</p>
//       )}
//     </div>
//   </main>
// </div>
