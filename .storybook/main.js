module.exports = {
  "stories": ["../src/**/*.stories.tsx"],
  "addons": [
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require("postcss")
        }
      }
    }
  ],
  framework: "@storybook/nextjs",
  docs: {
    autodocs: true
  }
};
