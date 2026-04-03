import React from 'react';

import * as styles from './LineDivider.css';

function LineDivider({ className = '' }) {
  return <span className={`${styles.divider} ${className}`}></span>;
}

export default LineDivider;
