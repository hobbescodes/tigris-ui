import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import type { AddonOptionsBabel as CoverageOptions } from "@storybook/addon-coverage";
import type { StorybookConfig } from "@storybook/react-vite";

/**
 * Storybook configuration.
 */
const storybookConfig: StorybookConfig = {
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  typescript: {
    // typecheck stories during Storybook build
    check: true,
  },
  docs: {
    autodocs: true,
  },
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          include: ["**/*.tsx", "**/*.stories.tsx"],
        },
      } as CoverageOptions,
    },
  ],
  // staticDirs: ["../public"],
  viteFinal: (config) =>
    // recursively merge Vite options
    mergeConfig(config, {
      plugins: [tsconfigPaths()],
    }),
};

export default storybookConfig;
