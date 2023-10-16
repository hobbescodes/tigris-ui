import { definePreset, defineTokens } from "@pandacss/dev";

import {
  animations,
  colors,
  easings,
  keyframes,
  semanticTokens,
  slotRecipes,
  zIndex,
} from "lib/panda";

const tokens = defineTokens({
  animations,
  colors,
  easings,
  zIndex,
});

const tigrisPreset = definePreset({
  theme: {
    extend: {
      keyframes,
      tokens,
      semanticTokens,
      slotRecipes,
    },
  },
});

export default tigrisPreset;
