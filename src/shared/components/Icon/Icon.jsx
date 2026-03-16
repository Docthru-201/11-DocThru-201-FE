import Image from 'next/image';

import { iconPaths } from './iconPaths.js';

// 공통 Icon 컴포넌트
// 사용 예시:
// <Icon name="search" alt="" width={24} height={24} />

export function Icon({ name, alt, width = 24, height = 24, ...rest }) {
  const src = iconPaths[name];

  if (!src) {
    return null;
  }

  return <Image src={src} alt={alt} width={width} height={height} {...rest} />;
}
