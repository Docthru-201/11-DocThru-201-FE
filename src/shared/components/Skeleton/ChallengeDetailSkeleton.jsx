'use client';

import * as pageStyles from '@/app/challenges/[id]/Page.css.js';
import * as sk from './ChallengeDetailSkeleton.css.js';
import * as bone from './skeletonPrimitives.css.js';

export default function ChallengeDetailSkeleton() {
  return (
    <div className={pageStyles.pageContainer}>
      <div className={pageStyles.contentWrapper}>
        <section className={pageStyles.topSection} aria-hidden>
          <div className={sk.leftStack}>
            <div className={`${bone.boneRounded} ${sk.chip}`} />
            <div className={`${bone.boneRounded} ${sk.titleLine}`} />
            <div className={`${bone.boneRounded} ${sk.titleLineMid}`} />
            <div className={`${bone.boneRounded} ${sk.titleLineShort}`} />
            <div className={sk.authorRow}>
              <div className={`${bone.boneCircle} ${sk.authorAvatar}`} />
              <div className={`${bone.boneRounded} ${sk.authorName}`} />
            </div>
          </div>
          <div className={sk.rightCard}>
            <div className={`${bone.boneRounded} ${sk.rightLine}`} />
            <div className={`${bone.boneRounded} ${sk.rightLine}`} />
            <div className={`${bone.boneRounded} ${sk.rightLineShort}`} />
          </div>
        </section>

        <section className={pageStyles.rankingSection}>
          <div className={pageStyles.rankingHeader}>
            <div className={`${bone.boneRounded} ${sk.headerBarShort}`} />
            <div className={`${bone.boneRounded} ${sk.headerBarNav}`} />
          </div>
          <div className={pageStyles.rankingListContainer}>
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className={sk.rankingRow}>
                <div className={`${bone.bone} ${sk.rankBadge}`} />
                <div className={`${bone.boneCircle} ${sk.rowAvatar}`} />
                <div className={sk.rowInfo}>
                  <div className={`${bone.boneRounded} ${sk.rowName}`} />
                  <div className={`${bone.boneRounded} ${sk.rowRole}`} />
                </div>
                <div className={sk.rowRight}>
                  <div className={`${bone.boneRounded} ${sk.rowLike}`} />
                  <div className={`${bone.boneRounded} ${sk.rowCta}`} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
