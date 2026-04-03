import ToastProvider from '@/shared/providers/ToastProvider';
import QueryProvider from '@/shared/providers/QueryProvider';
import AuthProvider from '@/shared/providers/AuthProvider';
import { GlobalGNB } from '@/shared/components/GNB/GlobalGNB';
import { pretendard, quantico } from '@/styles/fonts';
import '@/styles/reset.css';
import '@/styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${quantico.variable}`}>
      <body suppressHydrationWarning>
        <QueryProvider>
          <AuthProvider>
            <GlobalGNB />
            {children}
            <ToastProvider />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
