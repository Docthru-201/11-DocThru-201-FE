import React from 'react';

import { Button } from '@/shared/components/Button';
import { Icon } from '@/shared/components/Icon';
import * as styles from './OriginalUrlSection.css';

export default function OriginalUrlSection({ originalPageUrl }) {
  return (
    <section className={styles.sectionContainer}>
      <h4 className={styles.title}>원문 링크</h4>
      <div className={styles.relativeWrapper}>
        <div className={styles.buttonPos}>
          <Button
            variant="transparent" //Icon Riht 사용법?? - swlee
            icon={<Icon name="arrowClick" width={24} height={24} aria-hidden />}
            iconPosition="right"
            onClick={() => {
              if (originalPageUrl) {
                window.open(originalPageUrl, '_blank');
              }
            }}
          >
            링크 열기
          </Button>
        </div>
        {originalPageUrl && (
          <iframe
            src={originalPageUrl}
            title="원문 페이지"
            className={styles.previewIframe}
            loading="lazy"
            allow="clipboard-read; clipboard-write"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        )}
      </div>
    </section>
  );
}
