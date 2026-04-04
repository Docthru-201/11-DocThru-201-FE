import { proxyToBackend } from '@/app/api/_lib/proxyToBackend';

export async function GET() {
  return proxyToBackend('/auth/me', { method: 'GET' });
}
