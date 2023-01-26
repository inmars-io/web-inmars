module.exports = {
  stories: ['../dist/packages/atoms/**/stories/*.stories.{js,md,mdx}'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
  ],
  framework: '@storybook/web-components',
};
