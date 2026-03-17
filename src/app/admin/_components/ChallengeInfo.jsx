import Image from 'next/image';
import React from 'react';

import { formatDeadline } from '@/app/admin/_components/formatDate';
import clock from '@/app/admin/_components/ic_clock.svg';
import challengers from '@/app/admin/_components/ic_person.svg';

import * as styles from './ChallengeInfo.css';

export default function ChallengeInfo({ challenge }) {
  const {
    title,
    description,
    category,
    docType,
    deadline,
    participants,
    maxParticipant,
    status,
    id,
  } = challenge || {};

  return (
    <article className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.titleText}>{title}</h2>
      </div>

      <div className={styles.chipWrapper}>
        {/* {categoryChipMap[category] ?? null}
        {typeChipMap[docType] ?? null} */}
      </div>

      <p className={styles.descriptionText}>{description}</p>

      <div className={styles.infoRow}>
        <Image src={clock} alt="시계 아이콘" width={24} height={24} />
        {formatDeadline(deadline)} 마감
        <Image src={challengers} alt="참가자 아이콘" width={24} height={24} />
        {status === 'APPROVED'
          ? `${participants}/${maxParticipant}`
          : `${maxParticipant}명`}
      </div>
    </article>
  );
}
