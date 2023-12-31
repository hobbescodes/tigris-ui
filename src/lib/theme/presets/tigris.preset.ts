import {
  definePreset,
  defineSemanticTokens,
  defineTokens,
} from "@pandacss/dev";

import * as baseExtensions from "lib/theme/extensions/base";
import * as recipes from "lib/theme/extensions/recipes";
import {
  colors as semanticColors,
  fonts as semanticFonts,
} from "lib/theme/extensions/semanticTokens";
import * as slotRecipes from "lib/theme/extensions/slotRecipes";
import {
  animations,
  colors,
  easings,
  fonts,
  zIndex,
} from "lib/theme/extensions/tokens";

const tokens = defineTokens({
  animations,
  colors,
  easings,
  fonts,
  zIndex,
});

const semanticTokens = defineSemanticTokens({
  colors: semanticColors,
  fonts: semanticFonts,
});

const tigrisPreset = definePreset({
  theme: {
    extend: {
      ...baseExtensions,
      recipes,
      semanticTokens,
      slotRecipes,
      tokens,
    },
  },
});

export default tigrisPreset;
