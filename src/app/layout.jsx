import ToastProvider from '@/shared/providers/ToastProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
