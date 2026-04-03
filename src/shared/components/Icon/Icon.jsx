import Image from 'next/image';

import { iconPaths } from './iconPaths.js';

export function Icon({ name, alt = '', width = 24, height = 24, ...rest }) {
  const src = iconPaths[name];

  if (!src) {
    return null;
  }

  return <Image src={src} alt={alt} width={width} height={height} {...rest} />;
}
