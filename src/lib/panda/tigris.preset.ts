import { definePreset, defineTokens } from "@pandacss/dev";

import { colors } from "lib/panda";

const tokens = defineTokens({
  colors,
});

const tigrisPreset = definePreset({
  theme: {
    extend: {
      tokens,
    },
  },
});

export default tigrisPreset;
