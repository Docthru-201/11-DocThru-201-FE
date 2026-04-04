import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getServerApiBaseUrl } from '@/shared/lib/serverApiUrl';

/**
 * Next(동일 출처) 쿠키의 accessToken으로 백엔드에 요청을 넘김.
 * 브라우저→Render 직접 호출 시 쿠키가 안 붙는 환경을 피하기 위함.
 */
export async function proxyToBackend(path, init = {}) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  if (!accessToken) {
    return NextResponse.json({ message: '인증이 필요합니다' }, { status: 401 });
  }

  const base = getServerApiBaseUrl();
  const url = `${base}${path.startsWith('/') ? path : `/${path}`}`;

  const forwardHeaders = new Headers();
  forwardHeaders.set('Cookie', `accessToken=${accessToken}`);
  const extra = new Headers(init.headers);
  extra.forEach((value, key) => forwardHeaders.set(key, value));

  const res = await fetch(url, {
    ...init,
    headers: forwardHeaders,
    cache: 'no-store',
  });

  const text = await res.text();
  const out = new NextResponse(text, { status: res.status });
  const ct = res.headers.get('content-type');
  if (ct) out.headers.set('content-type', ct);
  return out;
}
