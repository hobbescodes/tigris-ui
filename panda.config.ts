import { defineConfig } from "@pandacss/dev";

import tigrisPreset from "lib/panda/tigris.preset";

/**
 * 🐼 Panda configuration.
 */
const pandaConfig = defineConfig({
  // enable CSS reset
  preflight: true,
  include: ["src/**/*.{ts,tsx,mdx}"],
  outdir: "src/generated/panda",
  presets: ["@pandacss/dev/presets", tigrisPreset],
  // set JSX factory name
  jsxFactory: "panda",
  jsxFramework: "react",
});

export default pandaConfig;
