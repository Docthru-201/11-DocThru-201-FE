export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export async function handleResponse(response, defaultMessage) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || defaultMessage);
  }

  if (response.status === 204) return;

  return response.json();
}
