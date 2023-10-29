import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import type { AddonOptionsBabel as CoverageOptions } from "@storybook/addon-coverage";
import type { StorybookConfig } from "@storybook/react-vite";
import type { UserConfig as ViteConfig } from "vite";

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
  // inject CSS into Storybook UI
  managerHead: (head) => `
    ${head}
    <link rel="stylesheet" href=${
      process.env.NODE_ENV === "production"
        ? "./styles/main.css"
        : "../src/lib/styles/main.css"
    } />
  `,
  staticDirs: ["../public"],
  viteFinal: (config) =>
    // recursively merge Vite options
    mergeConfig(config, {
      // https://github.com/storybookjs/storybook/issues/18920#issuecomment-1342865124
      define: { "process.env": {} },
      plugins: [tsconfigPaths()],
      // dependencies to pre-optimize
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
      logLevel: "error",
    } as ViteConfig),
};

export default storybookConfig;
