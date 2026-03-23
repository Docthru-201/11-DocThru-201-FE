'use client';

import { useState, useEffect } from 'react';
import { GNB } from '@/shared/components/GNB';
import { Button, Search, Sort, Tab, Chip } from '@/shared/components/index.js';
import * as styles from './page.css.js';
import Image from 'next/image.js';

const Tabs = [
  { value: 'participating', label: '참여중인 챌린지' },
  { value: 'ongoing', label: '진행중인 챌린지' },
  { value: 'applied', label: '신청한 챌린지' },
];

// const sortOptions = [
//   { value: 'pending', label: '승인 대기' },
//   { value: 'approved', label: '신청 승인' },
//   { value: 'rejected', label: '신청 거절' },
//   { value: 'apply_asc', label: '신청 시간 빠른순' },
//   { value: 'apply_desc', label: '신청 시간 느린순' },
//   { value: 'deadline_asc', label: '마감 기한 빠른순' },
//   { value: 'deadline_desc', label: '마감 기한 느린순' },
// ];

const mapStatusChip = (status) => {
  switch (status) {
    case 'PENDING':
    case 'APPROVED':
    case 'REJECTED':
    case 'DELETED':
      return status.toLowerCase();
    default:
      return 'pending';
  }
};

const type = (type) => {
  switch (type) {
    case 'NEXT_JS':
      return 'Next.js';
    case 'API':
      return 'API';
    case 'CAREER':
      return 'Career';
    case 'MODERN_JS':
      return 'Modern JS';
    case 'WEB':
      return 'Web';
  }
};

const category = (category) => {
  switch (category) {
    case 'DOCUMENT':
      return '공식문서';
    case 'BLOG':
      return '블로그';
    default:
      return category;
  }
};

const formatDate = (value) => {
  if (!value) return '-';

  const date = new Date(value);
  const year = String(date.getFullYear()).slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
};

export default function MyChallengePage() {
  const isLoggedIn = true; // TODO: 내일의 나에게
  const isAdminUser = false;
  const [tabValue, setTabValue] = useState('participating');
  const [searchValue, setSearchValue] = useState(''); // TODO: 검색
  const [sortValue, setSortValue] = useState('pending'); // TODO: 정렬
  const [appliedRows, setAppliedRows] = useState([]);
  const status = !isLoggedIn ? 'guest' : isAdminUser ? 'admin' : 'member';

  useEffect(() => {
    if (tabValue !== 'applied') return;

    const fetchMyChallenges = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/challenges/me', {
          credentials: 'include',
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();

        const rows = data.map((item) => ({
          no: item.serialNumber,
          field: type(item.type),
          category: category(item.category),
          title: item.title,
          maxParticipants: item.maxParticipants,
          appliedAt: formatDate(item.createdAt),
          deadline: formatDate(item.deadline),
          status: item.status,
          createdAt: item.createdAt,
        }));

        rows.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );

        setAppliedRows(rows);
      } catch (e) {
        console.error('신청한 챌린지 조회 실패', e);
        setAppliedRows([]);
      }
    };

    fetchMyChallenges();
  }, [tabValue]);

  return (
    <>
      <GNB status={status} />
      <main className={styles.page}>
        <div className={styles.header}>
          <span>나의 챌린지</span>
          <Button className={styles.newBtn}>
            신규 챌린지 신청
            <Image
              src="/icons/plus.svg"
              alt="챌린지 신청"
              width={16}
              height={16}
              style={{
                display: 'inline-block',
                position: 'relative',
                top: '2px',
                marginLeft: '8px',
              }}
            ></Image>
          </Button>
        </div>
        <div className={styles.tabWrap}>
          <Tab tabs={Tabs} value={tabValue} onChange={setTabValue} />
        </div>{' '}
        <div className={styles.filterRow}>
          <Search
            className={styles.search}
            value={searchValue}
            onChange={setSearchValue}
            placeholder="챌린지 이름을 검색해보세요"
          />
          <Sort
            className={styles.sort}
            value={sortValue}
            onClick={setSortValue}
          />
        </div>
        <div className={styles.tab}>
          {tabValue === 'participating' && <div>참여중인 챌린지</div>}
          {tabValue === 'ongoing' && <div>진행중인 챌린지</div>}
          {tabValue === 'applied' && (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={`${styles.headerCell} ${styles.headerFirst}`}>
                    No.
                  </th>
                  <th className={styles.headerCell}>분야</th>
                  <th className={styles.headerCell}>카테고리</th>
                  <th className={styles.headerCell}>챌린지 제목</th>
                  <th className={styles.headerCell}>모집 인원</th>
                  <th className={styles.headerCell}>신청일</th>
                  <th className={styles.headerCell}>마감 기한</th>
                  <th className={`${styles.headerCell} ${styles.headerLast}`}>
                    상태
                  </th>
                </tr>
                <tr>
                  <th colSpan={8} className={styles.headerGapCell}></th>
                </tr>
              </thead>
              <tbody>
                {appliedRows.map((row) => (
                  <tr key={row.no} className={styles.row}>
                    <td className={styles.bodyCell}>{row.no}</td>
                    <td className={styles.bodyCell}>{row.field}</td>
                    <td className={styles.bodyCell}>{row.category}</td>
                    <td className={styles.bodyTitleCell}>{row.title}</td>
                    <td className={styles.bodyCell}>{row.maxParticipants}</td>
                    <td className={styles.bodyCell}>{row.appliedAt}</td>
                    <td className={styles.bodyCell}>{row.deadline}</td>
                    <td className={styles.bodyCell}>
                      <Chip status={mapStatusChip(row.status)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
}
