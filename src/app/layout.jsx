import ToastProvider from '@/shared/providers/ToastProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <ToastProvider />
      </body>
import { pretendard, quantico } from '@/styles/fonts';
import '@/styles/reset.css';
import '@/styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${quantico.variable}`}>
      <body>{children}</body>
    </html>
  );
}
