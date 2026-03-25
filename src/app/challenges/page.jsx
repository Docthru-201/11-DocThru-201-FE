// 'use client';

// import { useEffect, useMemo, useRef, useState } from 'react';
// import Link from 'next/link';
// import { challengeItemsMock } from '@/mock/challenges';
// import { GNBContainer } from '@/shared/components/GNB/GNBContainer';
// import {
//   Search,
//   Sort,
//   Card,
//   PageIndicator,
//   Icon,
//   Button,
// } from '@/shared/components';
// import {
//   ChallengeFilterPopover,
//   DEFAULT_CHALLENGE_FILTER,
//   filterChallengeItems,
//   hasActiveChallengeFilter,
// } from './_components/ChallengeFilterPopover';
// import * as styles from './page.css.js';

// const CHALLENGES_FROM_MOCK = challengeItemsMock;

// export default function ChallengesPage() {
//   const [filterOpen, setFilterOpen] = useState(false);
//   const [appliedFilter, setAppliedFilter] = useState(DEFAULT_CHALLENGE_FILTER);
//   const [searchValue, setSearchValue] = useState('');
//   const filterWrapRef = useRef(null);

//   useEffect(() => {
//     if (!filterOpen) return undefined;
//     function handlePointerDown(event) {
//       const el = filterWrapRef.current;
//       const target = event.target;
//       if (el && target instanceof Node && !el.contains(target)) {
//         setFilterOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', handlePointerDown);
//     document.addEventListener('touchstart', handlePointerDown);
//     return () => {
//       document.removeEventListener('mousedown', handlePointerDown);
//       document.removeEventListener('touchstart', handlePointerDown);
//     };
//   }, [filterOpen]);

//   const filteredChallenges = useMemo(
//     () => filterChallengeItems(CHALLENGES_FROM_MOCK, appliedFilter, searchValue),
//     [appliedFilter, searchValue],
//   );

//   const filterButtonActive = filterOpen || hasActiveChallengeFilter(appliedFilter);

//   return (
//     <div className={styles.page}>
//       <GNBContainer />
//       <main className={styles.main}>
//         <header className={styles.header}>
//           <h1 className={styles.title}>챌린지 목록</h1>
//           <Link href="/challenges/new">
//             <Button
//               variant="solidIcon"
//               icon={<Icon name="plus" width={16} height={16} aria-hidden />}
//               iconPosition="right"
//             >
//               신규 챌린지 신청
//             </Button>
//           </Link>
//         </header>
//         <div>Challenge Layout 확인을 위한 전체 임시 블러킹</div>
//       </main>
//     </div>
//   );
// }

// //challenge 전체 리스트

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import {
// GNB,
// Button,
// Search,
// Sort,
// Card,
// PageIndicator,
// Icon,
// } from '@/shared/components';
// import * as styles from '@/shared/styles/challenges.css.js';

// //여길 나중에 바꿔야 fetch
// const MOCK_CHALLENGES = [
// {
// isRecruitmentFull: true,
// isDeadlinePassed: false,
// title: 'Next.js - App Router: Routing Fundamentals',
// type: 'NEXT_JS',
// category: 'DOCUMENT',
// deadline: '2024-03-03',
// maxParticipants: 5,
// currentParticipants: 5,
// isParticipating: true,
// },
// {
// isRecruitmentFull: false,
// isDeadlinePassed: false,
// title: 'API 설계 베스트 프랙티스',
// type: 'API',
// category: 'BLOG',
// deadline: '2024-03-15',
// maxParticipants: 8,
// currentParticipants: 3,
// isParticipating: false,
// },
// {
// isRecruitmentFull: false,
// isDeadlinePassed: false,
// title: '모던 자바스크립트 Deep Dive',
// type: 'MODERN_JS',
// category: 'DOCUMENT',
// deadline: '2024-04-01',
// maxParticipants: 10,
// currentParticipants: 7,
// isParticipating: true,
// },
// {
// isRecruitmentFull: true,
// isDeadlinePassed: false,
// title: 'React Server Components 실전 활용',
// type: 'NEXT_JS',
// category: 'BLOG',
// deadline: '2024-02-28',
// maxParticipants: 6,
// currentParticipants: 6,
// isParticipating: false,
// },
// {
// isRecruitmentFull: false,
// isDeadlinePassed: true,
// title: '웹 접근성 A11y 마스터',
// type: 'WEB',
// category: 'DOCUMENT',
// deadline: '2024-01-10',
// maxParticipants: 5,
// currentParticipants: 4,
// isParticipating: false,
// },
// ];

// export default function ChallengesPage() {
// const [searchValue, setSearchValue] = useState('');
// const [sortActive, setSortActive] = useState(false);
// const [currentPage, setCurrentPage] = useState(1);
// const totalPages = 3;

//   return (
//     <div className={styles.page}>
//       <GNB status="guest" />
//       <main className={styles.main}>
//         <header className={styles.header}>
//           <h1 className={styles.title}>챌린지 목록</h1>
//           <Button
//             asChild
//             variant="solid"
//             icon={<Icon name="plus" width={24} height={24} />}
//             iconPosition="right"
//           >
//             <Link href="/challenges/new">신규 챌린지 신청</Link>
//           </Button>
//         </header>

//         <div className={styles.toolbar}>
//           <Sort
//             label="필터"
//             active={sortActive}
//             onClick={() => setSortActive((prev) => !prev)}
//           />
//           <Search
//             className={styles.searchField}
//             placeholder="챌린지 이름을 검색해보세요"
//             value={searchValue}
//             onChange={setSearchValue}
//           />
//         </div>

//         <div className={styles.cardList}>
//           {MOCK_CHALLENGES.map((study, i) => (
//             <Card key={i} study={study} onCtaClick={() => {}} showEditMenu />
//           ))}
//         </div>

//         <div className={styles.paginationWrap}>
//           <PageIndicator
//             current={currentPage}
//             total={totalPages}
//             onChange={setCurrentPage}
//           />
//         </div>
//       </main>
//     </div>
//   );
// }
