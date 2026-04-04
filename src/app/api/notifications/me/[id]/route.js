import { proxyToBackend } from '@/app/api/_lib/proxyToBackend';

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.text();
  return proxyToBackend(`/notifications/me/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: body || '{}',
  });
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  return proxyToBackend(`/notifications/me/${id}`, { method: 'DELETE' });
}
