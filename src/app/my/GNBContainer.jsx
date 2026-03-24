'use client';

import { GNB } from '@/shared/components/GNB';

export function GNBContainer({ status = 'guest', ...rest }) {
  return <GNB status={status} {...rest} />;
}
