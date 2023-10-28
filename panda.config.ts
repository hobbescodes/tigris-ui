import { defineConfig } from "@pandacss/dev";

import { PREGENERATE_STATIC_CSS } from "lib/config";
import { recipes, slotRecipes } from "lib/panda";
import tigrisPreset from "lib/panda/tigris.preset";
import { mapArrayToObject } from "lib/util";

const recipeKeys = Object.keys(recipes);
const slotRecipeKeys = Object.keys(slotRecipes);

/**
 * 🐼 Panda configuration.
 */
const pandaConfig = defineConfig({
  // enable CSS reset
  preflight: true,
  include: ["src/**/*.{ts,tsx,mdx}"],
  outdir: "src/generated/panda",
  presets: ["@pandacss/preset-base", tigrisPreset],
  jsxFramework: "react",
  jsxFactory: "panda",
  staticCss: PREGENERATE_STATIC_CSS
    ? {
        // pregenerate recipe styles; allow Storybook stories to properly use `args` without needing to hint the extractor with `render` or other workarounds like `{fn}.raw`
        // TODO PurgeCSS (https://panda-css.com/docs/guides/static#removing-unused-css)
        recipes: {
          ...mapArrayToObject(recipeKeys, ["*"]),
          ...mapArrayToObject(slotRecipeKeys, ["*"]),
        },
      }
    : {},
});

export default pandaConfig;
