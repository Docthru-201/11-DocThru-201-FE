import React from 'react';
import { Icon } from '@/shared/components/Icon';
import { Chip } from '@/shared/components/Chip';

import { formatDeadline } from '@/app/admin/_components/formatDate';

import * as styles from './ChallengeInfo.css';

export default function ChallengeInfo({ challenge }) {
  const {
    title,
    description,
    category,
    type,
    deadline,
    participants = [],
    maxParticipants,
    status,
  } = challenge || {};

  return (
    <article className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.titleText}>{title}</h2>
      </div>
      <div className={styles.chipWrapper}>
        {type && <Chip type={type.toLowerCase()} />}
        {category && <Chip category={category.toLowerCase()} />}
      </div>
      <p className={styles.descriptionText}>{description}</p>

      <div className={styles.infoRow}>
        <Icon name="deadlineBlack" alt="마감일" />
        {formatDeadline(deadline)} 마감
        <Icon name="personYellow" alt="참가자" />
        {status === 'APPROVED'
          ? `${participants?.length || 0}/${maxParticipants}명`
          : `${maxParticipants}명`}
      </div>
    </article>
  );
}
