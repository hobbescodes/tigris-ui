import { definePreset, defineTokens } from "@pandacss/dev";

import { colors, semanticTokens } from "lib/panda";

const tokens = defineTokens({
  colors,
});

const tigrisPreset = definePreset({
  theme: {
    extend: {
      tokens,
      semanticTokens,
    },
  },
});

export default tigrisPreset;
