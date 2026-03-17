// import BtnText from '@/components/btn/text/BtnText';
// import BtnText from '@/components/btn/text/BtnText';
import React from 'react';

import * as styles from './OriginalUrlSection.css';

export default function OriginalUrlSection({ originalPageUrl }) {
  return (
    <section className={styles.sectionContainer}>
      <h4 className={styles.title}>원문 링크</h4>
      <div className={styles.relativeWrapper}>
        <div className={styles.buttonPos}>
          <button
            type="button"
            onClick={() => {
              window.open(originalPageUrl, '_blank');
            }}
            className={styles.linkBtn}
          >
            링크 열기
          </button>
          {/* <BtnText
            theme="link"
            className="h-8"
            onClick={() => {
              window.open(originalPageUrl, "_blank");
            }}
          >
            링크 열기
          </BtnText> */}
        </div>
        {originalPageUrl && (
          <iframe
            src={originalPageUrl}
            title="원문 페이지"
            className={styles.previewIframe} // ✅ 스타일 객체만 적용
            loading="lazy"
            allow="clipboard-read; clipboard-write"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        )}
      </div>
    </section>
  );
}
