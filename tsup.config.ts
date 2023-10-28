import { defineConfig as defineTsupConfig } from "tsup";

/**
 * `tsup` configuration.
 * @see https://tsup.egoist.dev
 */
const tsupConfig = defineTsupConfig({
  entry: {
    ui: "src/index.ts",
  },
  // TODO enable Rollup tree-shaking, temporarily disabled to allow properly injecting `use client` directive banner (Rollup tree-shaking removes it); track https://github.com/egoist/tsup/issues/835
  // treeshake: true,
  sourcemap: true,
  minify: true,
  clean: true,
  splitting: false,
  format: ["cjs", "esm"],
  // NB: `peerDeps`, among others, are excluded (marked external) by default
  // see https://tsup.egoist.dev/#excluding-packages
  external: ["@ark-ui/react", "react-icons"],
  outDir: "build",
  dts: true,
  esbuildOptions: (opts, _ctx) => {
    // https://esbuild.github.io/api/#resolve-extensions
    const defaultExtensions = [".tsx", ".ts", ".jsx", ".js", ".css", ".json"];

    // extend recognized extensions to include explicit ESM extensions
    opts.resolveExtensions = [...defaultExtensions, ".mts", ".mjs"];

    opts.banner = {
      // TODO remove, necessary for e.g. context, most ark components, etc. but try to set at a more granular level or not set at all
      js: '"use client";',
    };
  },
});

export default tsupConfig;
