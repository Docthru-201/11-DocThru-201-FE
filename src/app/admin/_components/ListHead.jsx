import React from 'react';

import * as styles from './ListHead.css';

export default function ListHead() {
  return (
    <div className={`${styles.tableHeader} ${styles.rowLayout}`}>
      <div className={`${styles.headerCell} ${styles.colId}`}>No.</div>
      <div className={`${styles.headerCell} ${styles.colCategory}`}>분야</div>
      <div className={`${styles.headerCell} ${styles.colType}`}>카테고리</div>
      <div className={`${styles.headerCell} ${styles.colTitle}`}>
        챌린지 제목
      </div>
      <div className={`${styles.headerCell} ${styles.colSmall}`}>모집 인원</div>
      <div className={`${styles.headerCell} ${styles.colSmall}`}>신청일</div>
      <div className={`${styles.headerCell} ${styles.colSmall}`}>마감 기한</div>
      <div className={`${styles.headerCell} ${styles.colSmall}`}>상태</div>
    </div>
  );
}
