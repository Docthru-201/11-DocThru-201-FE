import { Quantico } from 'next/font/google';
import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    {
      path: '../../node_modules/@fontsource/pretendard/files/pretendard-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../node_modules/@fontsource/pretendard/files/pretendard-latin-500-normal.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../node_modules/@fontsource/pretendard/files/pretendard-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});

export const quantico = Quantico({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-quantico',
  display: 'swap',
});
