import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {
    mode: 'auto',
    glob: ['**/*.css.ts', '**/*.css.tsx', '**/*.css.js'],
  },
});

const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  turbopack: {},
};

export default withVanillaExtract(nextConfig);
