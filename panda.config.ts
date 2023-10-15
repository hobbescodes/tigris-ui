import { defineConfig } from "@pandacss/dev";

/**
 * 🐼 Panda configuration.
 */
const pandaConfig = defineConfig({
  // enable CSS reset
  preflight: true,
  include: ["src/**/*.{ts,tsx,mdx}"],
  outdir: "src/generated/panda",
  presets: ["@pandacss/dev/presets"],
  // set JSX factory name
  jsxFactory: "panda",
  jsxFramework: "react",
});

export default pandaConfig;
