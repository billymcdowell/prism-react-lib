import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/stories/docs/Introduction.mdx",
    "../src/stories/**/*.(mdx|md)",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-themes"
  ],
  "framework": "@storybook/react-vite",
  // Map source docs to /docs/* on the dev server and in storybook-static (LLM-friendly URLs).
  // A string entry like "../src/stories/docs" would copy files to the *root* (/button.mdx), not /docs/.
  "staticDirs": [{ from: "../src/stories/docs", to: "/docs" }],
};
export default config;