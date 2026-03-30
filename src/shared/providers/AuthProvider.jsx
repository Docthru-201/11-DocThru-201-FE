'use client';
import { useMe } from '@/features/auth/hooks/useMe';

export default function AuthProvider({ children }) {
  useMe();
  return children;
}
