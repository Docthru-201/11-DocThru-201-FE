'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGoogleLogin } from '@/features/auth/hooks/useGoogleLogin';
import * as s from './callback.css';

function GoogleCallbackContent() {
  const searchParams = useSearchParams();
  const { login, isPending } = useGoogleLogin();

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) login(code);
  }, [searchParams, login]);

  return (
    <div className={s.container}>
      <h2>구글 로그인 처리 중...</h2>
      <p>잠시만 기다려주세요. 메인 페이지로 이동합니다.</p>
      {isPending && <p>서버와 통신 중입니다...</p>}
    </div>
  );
}

export default function GoogleCallbackPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <GoogleCallbackContent />
    </Suspense>
  );
}
