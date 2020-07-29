module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/preset-scss',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    // '@storybook/addon-a11y/register',
    '@storybook/addon-links/register',
    'storybook-addon-paddings',
  ],
};
