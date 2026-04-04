import { proxyToBackend } from '@/app/api/_lib/proxyToBackend';

export async function GET() {
  return proxyToBackend('/notifications/me', { method: 'GET' });
}
