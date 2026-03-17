import React from 'react';

import * as styles from './ListRow.css.js';

// import AdminStatusChip from "@/shared/components/AdminStatusChip";

export default function ListRow({ data }) {
  return (
    <div className={styles.rowLayout}>
      <div className={`${styles.tableCell} ${styles.colId}`}>
        {data.serialNumber}
      </div>
      <div className={styles.tableCell}>{data.type}</div>
      <div className={styles.tableCell}>{data.category}</div>
      <div className={styles.colTitle}>{data.title}</div>
      <div className={styles.tableCell}>{data.maxParticipants}명</div>
      <div className={styles.tableCell}>{data.createdAt}</div>
      <div className={styles.tableCell}>{data.deadline}</div>
      {/* <div className={styles.tableCell}>
        {data.status ? (
          <AdminStatusChip status={data.status} />
        ) : (
          "null"
        )}
      </div> */}
    </div>
  );
}
