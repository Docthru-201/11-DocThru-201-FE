'use client';

import { useState, useEffect } from 'react'; // useEffect 추가
import { GNB, Search, Tab, Card } from '@/shared/components';
import * as styles from './page.css.js';

export default function MyChallengesPage() {
  const [myChallenges, setMyChallenges] = useState([]);

  useEffect(() => {
    const fetchMyChallenges = async () => {
      try {
        // 실제 API 주소로 요청 (예시 주소입니다)
        const response = await fetch('/users/me/challenges?status=APPROVED');
        const data = await response.json();

        setMyChallenges(result.data.items);
      } catch (error) {
        console.error('데이터를 불러오는데 실패했어요:', error);
      }
    };

    fetchMyChallenges();
  }, []);

  return (
    <div className={styles.page}>
      <GNB status="member" />
      <main className={styles.main}>
        <h1 className={styles.title}>나의 챌린지</h1>

        {/* 탭 메뉴 (피그마 참고) */}
        <Tab items={['참여중인 챌린지', '완료한 챌린지', '신청한 챌린지']} />

        <Search placeholder="챌린지 이름을 검색해보세요" />

        <div className={styles.cardList}>
          {/* 3. 서버에서 받아온 데이터로 카드 그리기 */}
          {myChallenges.length > 0 ? (
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
