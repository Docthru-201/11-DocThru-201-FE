import React from 'react';
import { formatDate } from '@/app/admin/_components/formatDate';
import { Chip } from '@/shared/components/Chip';
import * as styles from './ListRow.css';

export default function ListRow({ data }) {
  return (
    <div className={styles.rowLayout}>
      <div className={`${styles.tableCell} ${styles.colId}`}>
        {data.serialNumber}
      </div>
      <div className={styles.tableCell}>
        {data.type && <Chip type={data.type.toLowerCase()} />}
      </div>
      <div className={styles.tableCell}>
        {data.category && <Chip category={data.category.toLowerCase()} />}
      </div>
      <div className={styles.colTitle}>{data.title}</div>
      <div className={styles.tableCell}>{data.maxParticipants}명</div>
      <div className={styles.tableCell}>{formatDate(data.createdAt)}</div>
      <div className={styles.tableCell}>{formatDate(data.deadline)}</div>
      <div className={styles.tableCell}>
        {data.status && <Chip status={data.status.toLowerCase()} />}
      </div>
    </div>
  );
}
