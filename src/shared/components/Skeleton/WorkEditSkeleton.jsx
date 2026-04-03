'use client';

import * as pageStyles from '@/app/challenges/[id]/work/[workId]/edit/page.css.js';
import * as sk from './WorkEditSkeleton.css.js';
import * as bone from './skeletonPrimitives.css.js';

export default function WorkEditSkeleton() {
  return (
    <div className={pageStyles.pageWrapper}>
      <div className={pageStyles.mainRow}>
        <div className={pageStyles.leftPane}>
          <div className={pageStyles.leftPaneInner}>
            <div className={sk.headerBar}>
              <div className={`${bone.boneRounded} ${sk.logo}`} />
              <div className={sk.actions}>
                <div className={`${bone.boneRounded} ${sk.btn}`} />
                <div className={`${bone.boneRounded} ${sk.btn}`} />
                <div className={`${bone.boneRounded} ${sk.btn}`} />
              </div>
            </div>
            <div className={`${bone.boneRounded} ${sk.titleLine}`} />
            <div className={pageStyles.editorSection}>
              <div className={sk.editorArea}>
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className={`${bone.boneRounded} ${i % 4 === 3 ? sk.editorLineShort : sk.editorLine}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={sk.rightPane} aria-hidden>
          <div className={`${bone.boneRounded} ${sk.iframeBar}`} />
          <div className={`${bone.boneRounded} ${sk.iframeBody}`} />
        </div>
      </div>
    </div>
  );
}
