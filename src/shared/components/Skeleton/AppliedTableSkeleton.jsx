'use client';

import * as sk from './MyChallengesSkeleton.css.js';
import * as bone from './skeletonPrimitives.css.js';

const COLS = [56, 72, 72, 160, 64, 88, 88, 72];

export default function AppliedTableSkeleton({ rowCount = 5 }) {
  return (
    <div className={sk.tableWrap} role="status" aria-label="신청 목록 로딩 중">
      <table className={sk.tableSk}>
        <thead>
          <tr className={sk.thRow}>
            {COLS.map((w, i) => (
              <th key={i} className={sk.thCell}>
                <div
                  className={`${bone.boneRounded} ${sk.thBone}`}
                  style={{ width: w }}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowCount }, (_, ri) => (
            <tr key={ri} className={sk.trRow}>
              {COLS.map((w, ci) => (
                <td key={ci} className={sk.tdCell}>
                  <div
                    className={`${bone.boneRounded} ${ci === 3 ? sk.tdBoneWide : sk.tdBone}`}
                    style={{ maxWidth: w + 40 }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
