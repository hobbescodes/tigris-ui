import { definePreset, defineTokens } from "@pandacss/dev";

import {
  animations,
  colors,
  easings,
  keyframes,
  semanticTokens,
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
    },
  },
});

export default tigrisPreset;
