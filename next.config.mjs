import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {
    mode: 'auto',
    glob: ['**/*.css.ts', '**/*.css.tsx'],
  },
});

const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
};

export default withVanillaExtract(nextConfig);
