'use client';

import { useState, useEffect } from 'react';
import {
  Button,
  Search,
  Sort,
  Tab,
  Chip,
  Icon,
} from '@/shared/components/index.js';
import * as styles from './page.css.js';
import { GNBContainer } from './GNBContainer.jsx';

const Tabs = [
  { value: 'participating', label: '참여중인 챌린지' },
  { value: 'ongoing', label: '진행중인 챌린지' },
  { value: 'applied', label: '신청한 챌린지' },
];

const sortOptions = [
  { value: 'all', label: '승인 대기' },
  { value: 'approved', label: '신청 승인' },
  { value: 'rejected', label: '신청 거절' },
  { value: 'apply_asc', label: '신청 시간 빠른순' },
  { value: 'apply_desc', label: '신청 시간 느린순' },
  { value: 'deadline_asc', label: '마감 기한 빠른순' },
  { value: 'deadline_desc', label: '마감 기한 느린순' },
];

const statusChip = (status) => {
  if (!status) return 'pending';
  return status.toLowerCase();
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
    default:
      return type;
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
  const [tabValue, setTabValue] = useState('participating');
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('all');
  const [sortOpen, setSortOpen] = useState(false);
  const [appliedRows, setAppliedRows] = useState([]);
  const status = 'member'; // TODO: 로그인

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

  const sortRows = [...appliedRows]
    .filter((row) => {
      if (sortValue === 'pending') return row.status === 'PENDING';
      if (sortValue === 'approved') return row.status === 'APPROVED';
      if (sortValue === 'rejected') return row.status === 'REJECTED';
      return true;
    })
    .sort((a, b) => {
      const createdA = new Date(a.createdAt).getTime();
      const createdB = new Date(b.createdAt).getTime();
      const deadlineA = new Date(a.deadline).getTime();
      const deadlineB = new Date(b.deadline).getTime();

      switch (sortValue) {
        case 'pending':
        case 'approved':
        case 'rejected':
          return createdB - createdA;

        case 'apply_asc':
          return createdA - createdB;

        case 'apply_desc':
        case 'all':
          return createdB - createdA;

        case 'deadline_asc':
          return deadlineA - deadlineB;

        case 'deadline_desc':
          return deadlineB - deadlineA;

        default:
          return 0;
      }
    });
  const filteredRows = sortRows.filter((row) => {
    if (!searchValue) return true; // 검색어 없으면 전체
    const keyword = searchValue.toLowerCase();
    return row.title.toLowerCase().includes(keyword);
  });

  const currentSort = sortOptions.find((o) => o.value === sortValue);

  return (
    <>
      <GNBContainer status={status} />
      <main className={styles.page}>
        <div className={styles.header}>
          <span>나의 챌린지</span>
          <Button
            variant="solidIcon"
            icon={<Icon name="plus" width={16} height={16} aria-hidden />}
            iconPosition="right"
          >
            신규 챌린지 신청
          </Button>
        </div>

        <div className={styles.tabWrap}>
          <Tab tabs={Tabs} value={tabValue} onChange={setTabValue} />
        </div>

        <div className={styles.filterRow}>
          <Search
            className={styles.search}
            value={searchValue}
            onChange={setSearchValue}
            placeholder="챌린지 이름을 검색해보세요"
          />

          <div className={styles.sortWrap}>
            <Sort
              className={styles.sort}
              label={currentSort?.label ?? '승인 대기'}
              active={sortOpen}
              onClick={() => setSortOpen((open) => !open)}
            />
            {sortOpen && (
              <div className={styles.sortDropdown}>
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={styles.sortOption}
                    onClick={() => {
                      setSortValue(opt.value);
                      setSortOpen(false);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
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
                {filteredRows.map((row) => (
                  <tr key={row.no} className={styles.row}>
                    <td className={styles.bodyCell}>{row.no}</td>
                    <td className={styles.bodyCell}>{row.field}</td>
                    <td className={styles.bodyCell}>{row.category}</td>
                    <td className={styles.bodyTitleCell}>{row.title}</td>
                    <td className={styles.bodyCell}>{row.maxParticipants}</td>
                    <td className={styles.bodyCell}>{row.appliedAt}</td>
                    <td className={styles.bodyCell}>{row.deadline}</td>
                    <td className={styles.bodyCell}>
                      <Chip status={statusChip(row.status)} />
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
