import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {
    mode: 'auto',
    glob: ['**/*.css.ts', '**/*.css.tsx', '**/*.css.js'],
  },
});

const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  /** 상위 디렉터리 lockfile 때문에 워크스페이스 루트가 어긋나 라우트 404가 나는 경우 방지 */
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resgqvkfdnaunibowexs.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
