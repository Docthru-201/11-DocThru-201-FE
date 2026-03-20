import React from 'react';

import { formatInvalidatedAt } from '@/app/admin/_components/formatDate';

import * as styles from './StatusSection.css';

const statusMap = {
  PENDING: {
    message: '승인 대기 중입니다.',
  },
  REJECTED: {
    message: '신청이 거절된 챌린지입니다.',
    text: '신청 거절 사유',
  },
  DELETED: {
    message: '삭제된 챌린지입니다.',
    text: '삭제 사유',
  },
  APPROVED: {
    message: '신청이 승인된 챌린지입니다.',
  },
};

export default function StatusSection({ challenge }) {
  const { status, adminMessage, invalidatedAt } = challenge || {};
  const { message, text } = statusMap[status] || {};

  // 상태에 맞는 스타일 선택 (기본값 PENDING)
  const currentStatusStyle =
    styles.statusStyles[status] || styles.statusStyles.PENDING;

  return (
    <section>
      <div className={currentStatusStyle}>{message}</div>

      {(status === 'DELETED' || status === 'REJECTED') && (
        <div className={styles.reasonBox}>
          <span className={styles.reasonTitle}>{text}</span>
          <p className={styles.reasonContent}>{adminMessage}</p>
          <div className={styles.footerWrapper}>
            <span className={styles.footerBrand}>F11 doc-thru</span>
            <span className={styles.divider}></span>
            <span className={styles.footerDate}>
              {formatInvalidatedAt(invalidatedAt)}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
