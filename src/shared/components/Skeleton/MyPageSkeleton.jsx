'use client';

import * as pageStyles from '@/app/mypage/page.css.js';
import * as sk from './MyPageSkeleton.css.js';
import * as bone from './skeletonPrimitives.css.js';

export default function MyPageSkeleton() {
  return (
    <div className={pageStyles.pageContainer}>
      <div className={pageStyles.contentWrapper}>
        <div
          className={pageStyles.layout}
          role="status"
          aria-label="마이페이지 로딩 중"
        >
          <aside className={pageStyles.leftPanel}>
            <div className={sk.profileCard} aria-hidden>
              <div className={`${bone.boneCircle} ${sk.avatar}`} />
              <div className={`${bone.boneRounded} ${sk.nicknameLine}`} />
              <div className={`${bone.boneRounded} ${sk.gradeLine}`} />
              <div className={`${bone.boneRounded} ${sk.introLine}`} />
              <div className={`${bone.boneRounded} ${sk.introLineShort}`} />
            </div>
          </aside>
          <main className={pageStyles.rightPanel}>
            <div className={sk.sectionCard}>
              <div className={`${bone.boneRounded} ${sk.sectionTitle}`} />
              <div className={sk.statsGrid}>
                {Array.from({ length: 3 }, (_, i) => (
                  <div key={i} className={sk.statCell}>
                    <div className={`${bone.boneRounded} ${sk.statValue}`} />
                    <div className={`${bone.boneRounded} ${sk.statLabel}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className={sk.sectionCard}>
              <div className={sk.workHeader}>
                <div className={`${bone.boneRounded} ${sk.workTitleSk}`} />
                <div className={sk.filterRow}>
                  {[sk.filterPill, sk.filterPillMid, sk.filterPillWide].map(
                    (pillClass, i) => (
                      <div
                        key={i}
                        className={`${bone.boneRounded} ${pillClass}`}
                      />
                    ),
                  )}
                </div>
              </div>
              <div className={sk.workList}>
                {Array.from({ length: 3 }, (_, i) => (
                  <div key={i} className={sk.workCard}>
                    <div
                      className={`${bone.boneRounded} ${sk.workTitleLine}`}
                    />
                    <div className={`${bone.boneRounded} ${sk.workMeta}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className={sk.sectionCard}>
              <div className={sk.accountHeader}>
                <div className={`${bone.boneRounded} ${sk.workTitleSk}`} />
                <div className={`${bone.boneRounded} ${sk.editBtnSk}`} />
              </div>
              <div className={sk.fieldList}>
                {Array.from({ length: 2 }, (_, i) => (
                  <div key={i} className={sk.field}>
                    <div className={`${bone.boneRounded} ${sk.fieldLabel}`} />
                    <div className={`${bone.boneRounded} ${sk.fieldValue}`} />
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
