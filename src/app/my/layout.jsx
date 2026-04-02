import { Suspense } from 'react';

export default function MyLayout({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
