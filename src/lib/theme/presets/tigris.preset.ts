import {
  definePreset,
  defineSemanticTokens,
  defineTokens,
} from "@pandacss/dev";

import * as baseExtensions from "lib/theme/extensions/base";
import { colors as semanticColors } from "lib/theme/extensions/semanticTokens";
import * as slotRecipes from "lib/theme/extensions/slotRecipes";
import {
  animations,
  colors,
  easings,
  zIndex,
} from "lib/theme/extensions/tokens";

const tokens = defineTokens({
  animations,
  colors,
  easings,
  zIndex,
});

const semanticTokens = defineSemanticTokens({
  colors: semanticColors,
});

const tigrisPreset = definePreset({
  theme: {
    extend: {
      ...baseExtensions,
      semanticTokens,
      slotRecipes,
      tokens,
    },
  },
});

export default tigrisPreset;
