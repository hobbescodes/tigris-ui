import { defineConfig } from "@pandacss/dev";

import * as recipes from "lib/theme/extensions/recipes";
import * as slotRecipes from "lib/theme/extensions/slotRecipes";
import { tigrisPreset } from "lib/theme/presets";
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
  presets: ["@pandacss/preset-panda", tigrisPreset],
  // set JSX factory name
  jsxFactory: "panda",
  jsxFramework: "react",
  staticCss: {
    // pregenerate recipe styles; allow Storybook stories to properly use `args` without needing to hint the extractor with `render` or other workarounds like `{fn}.raw`
    // TODO PurgeCSS (https://panda-css.com/docs/guides/static#removing-unused-css)
    recipes: {
      ...mapArrayToObject(recipeKeys, ["*"]),
      ...mapArrayToObject(slotRecipeKeys, ["*"]),
    },
  },
});

export default pandaConfig;
