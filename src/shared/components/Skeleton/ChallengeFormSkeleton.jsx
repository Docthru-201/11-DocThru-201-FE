'use client';

import * as pageStyles from '@/app/admin/_components/ChallengeForm.css.js';
import * as sk from './ChallengeFormSkeleton.css.js';
import * as bone from './skeletonPrimitives.css.js';

export default function ChallengeFormSkeleton() {
  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <div
          className={`${bone.boneRounded} ${sk.titleSkeleton}`}
          role="status"
          aria-label="챌린지 신청 폼 로딩 중"
        />

        <div className={pageStyles.form}>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className={sk.fieldBlock}>
              <div className={`${bone.boneRounded} ${sk.labelLine}`} />
              <div className={`${bone.boneRounded} ${sk.inputLine}`} />
            </div>
          ))}

          <div className={sk.textAreaBlock}>
            <div className={`${bone.boneRounded} ${sk.labelLine}`} />
            <div className={sk.textArea}>
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className={`${bone.boneRounded} ${sk.textAreaLine}`}
                  style={{ width: i === 7 ? '72%' : '100%' }}
                />
              ))}
            </div>
          </div>

          <div className={`${bone.boneRounded} ${sk.submitBtn}`} />
        </div>
      </main>
    </div>
  );
}
