'use client';

import * as sk from './CommentListSkeleton.css.js';
import * as bone from './skeletonPrimitives.css.js';

function CommentItemSkeleton() {
  return (
    <div className={sk.item} aria-hidden>
      <div className={sk.itemHeader}>
        <div className={`${bone.boneCircle} ${sk.avatar}`} />
        <div className={sk.nameCol}>
          <div className={`${bone.boneRounded} ${sk.name}`} />
          <div className={`${bone.boneRounded} ${sk.date}`} />
        </div>
      </div>
      <div className={`${bone.boneRounded} ${sk.contentLine}`} />
      <div className={`${bone.boneRounded} ${sk.contentLine}`} />
      <div className={`${bone.boneRounded} ${sk.contentLineShort}`} />
    </div>
  );
}

export default function CommentListSkeleton({ itemCount = 3 }) {
  return (
    <div className={sk.wrap} role="status" aria-label="댓글 로딩 중">
      <div className={sk.formRow}>
        <div className={sk.formBox}>
          <div className={`${bone.boneRounded} ${sk.formLine}`} />
          <div className={`${bone.boneRounded} ${sk.formLine2}`} />
        </div>
        <div className={`${bone.boneRounded} ${sk.formBtn}`} />
      </div>
      {Array.from({ length: itemCount }, (_, i) => (
        <CommentItemSkeleton key={i} />
      ))}
    </div>
  );
}
