'use client';

import * as pageStyles from '@/app/challenges/[id]/work/[workId]/page.css';
import * as sk from './WorkDetailSkeleton.css.js';
import * as bone from './skeletonPrimitives.css.js';

export default function WorkDetailSkeleton() {
  return (
    <div className={pageStyles.pageContainer}>
      <div className={pageStyles.contentWrapper}>
        <div role="status" aria-label="작업물 로딩 중">
          <div className={`${bone.boneRounded} ${sk.titleBar}`} />
          <div className={sk.tagRow}>
            <div className={`${bone.boneRounded} ${sk.tag}`} />
            <div className={`${bone.boneRounded} ${sk.tag}`} />
          </div>
          <hr className={sk.divider} />
          <div className={sk.metaRow}>
            <div className={sk.metaLeft}>
              <div className={`${bone.boneCircle} ${sk.avatar}`} />
              <div className={`${bone.boneRounded} ${sk.name}`} />
              <div className={sk.likeBlock}>
                <div className={`${bone.boneRounded} ${sk.likeIcon}`} />
                <div className={`${bone.boneRounded} ${sk.likeNum}`} />
              </div>
            </div>
            <div className={`${bone.boneRounded} ${sk.date}`} />
          </div>
          <hr className={sk.divider} />
          <div className={sk.bodyBlock}>
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className={`${bone.boneRounded} ${i % 5 === 4 ? sk.bodyLineShort : sk.bodyLine}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
