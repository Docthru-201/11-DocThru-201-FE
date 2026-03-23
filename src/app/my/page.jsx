'use client';

import { useState, useEffect } from 'react';
import { GNB, Search, Tab, Card } from '@/shared/components';
import * as styles from './page.css.js'; // 확장자 .ts로 수정

export default function MyChallengesPage() {
  const [myChallenges, setMyChallenges] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchMyChallenges = async () => {
      try {
        setIsLoading(true);
        // 1. Swagger 주소 적용
        const response = await fetch('/users/me/challenges?status=APPROVED');
        const result = await response.json();

        // 2. 변수명 통일 (result.data.items)
        if (result?.data?.items) {
          setMyChallenges(result.data.items);
        }
      } catch (error) {
        console.error('데이터를 불러오는데 실패했어요:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyChallenges();
  }, []);

  return (
    <div className={styles.page}>
      <GNB status="member" />

      <main className={styles.main}>
        <h1 className={styles.title}>나의 챌린지</h1>

        <div className={styles.filterSection}>
          <Tab tabs={['참여중인 챌린지', '완료한 챌린지', '신청한 챌린지']} />
          <Search placeholder="챌린지 이름을 검색해보세요" />
        </div>

        <div className={styles.cardList}>
          {isLoading ? (
            <p>로딩 중입니다...</p>
          ) : myChallenges.length > 0 ? (
            myChallenges.map((challenge) => (
              <Card
                key={challenge.id}
                study={challenge}
                ctaText="도전 계속하기"
              />
            ))
          ) : (
            <p>참여 중인 챌린지가 없습니다.</p>
          )}
        </div>
      </main>
    </div>
  );
}
