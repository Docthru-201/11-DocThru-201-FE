'use client';

import React from 'react';
import Link from 'next/link';
import * as styles from './RankingListItem.css';

import { Icon } from '@/shared/components/Icon';

export default function RankingListItem({ item, highlight = false }) {
  const { rank, userName, userRole, likes, workId = 0, challengeId = 0 } = item;

  // 랭킹 배지 스타일 결정
  const rankStyleKey = highlight ? 'highlight' : 'default';
  const displayRank = rank.toString().padStart(2, '0');
  const displayLikes = likes >= 10000 ? '9999...' : likes.toLocaleString();

  return (
    <div className={styles.itemContainer}>
      {/* 왼쪽: 순위 및 유저 정보 */}
      <div className={styles.leftSection}>
        <div className={styles.rankBadgeVariants[rankStyleKey]}>
          {rank === 1 && highlight && (
            <Icon
              name={'crown'}
              alt="1등 왕관"
              width={12}
              height={12}
              style={{ marginRight: '6px' }}
            />
          )}
          {displayRank}
        </div>

        <Icon
          name={'profileMember'}
          alt="프로필"
          width={24}
          height={24}
          className={styles.userProfile}
        />

        <div>
          <div className={styles.userNameText}>{userName}</div>
          <div className={styles.userRoleText}>{userRole}</div>
        </div>
      </div>

      {/* 오른쪽: 좋아요 수 + 작업물 보기 */}
      <div className={styles.rightSection}>
        <div className={styles.likeCountGroup}>
          <Icon
            name={'heartActive'}
            alt="좋아요"
            width={20}
            height={20}
            style={{ marginRight: '4px' }}
          />
          {displayLikes}
        </div>

        <Link
          href={`/challenges/${challengeId}/work/${workId}`}
          className={styles.workLink}
        >
          <span>작업물 보기</span>
          <Icon name={'arrowCircleRight'} alt="이동" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
}
