import { defineConfig as defineTsupConfig } from "tsup";

/**
 * `tsup` configuration.
 * @see https://tsup.egoist.dev
 */
const tsupConfig = defineTsupConfig({
  entry: {
    ui: "src/index.ts",
  },
  treeshake: true,
  sourcemap: true,
  minify: true,
  clean: true,
  splitting: false,
  format: ["cjs", "esm"],
  // NB: `peerDeps`, among others, are excluded (marked external) by default
  // see https://tsup.egoist.dev/#excluding-packages
  external: [],
  outDir: "build",
  dts: true,
  esbuildOptions: (opt, _ctx) => {
    // https://esbuild.github.io/api/#resolve-extensions
    const defaultExtensions = [".tsx", ".ts", ".jsx", ".js", ".css", ".json"];

    // filter out extensions from `esbuild` defaults
    const selectedDefaultExtensions = defaultExtensions.filter(
      (ext) => ![".css", ".json"].includes(ext)
    );

    // extend recognized extensions to include explicit ESM extensions
    opt.resolveExtensions = [...selectedDefaultExtensions, ".mts", ".mjs"];
  },
});

export default tsupConfig;
