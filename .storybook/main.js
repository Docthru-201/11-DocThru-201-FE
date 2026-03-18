import path from 'path';
import { fileURLToPath } from 'url';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, '../src'),
    };

    config.plugins = [...(config.plugins || []), vanillaExtractPlugin()];

    return config;
  },
};
export default config;
