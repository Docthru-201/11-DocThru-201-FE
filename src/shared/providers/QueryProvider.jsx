'use client'; // 클라이언트 컴포넌트로 선언

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function QueryProvider({ children }) {
  // 컴포넌트 내부에서 QueryClient를 생성하여 요청 간에 데이터가 섞이지 않도록 합니다.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 전역 설정: 데이터가 상할 때까지 기다리는 시간 등을 조절할 수 있습니다.
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
