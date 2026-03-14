'use client';

import { toast } from 'react-toastify';

export default function Page() {
  return <button onClick={() => toast('토스트 테스트!')}>토스트 테스트</button>;
}
