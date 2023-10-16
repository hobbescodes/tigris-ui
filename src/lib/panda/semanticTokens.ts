import { defineSemanticTokens } from "@pandacss/dev";

const semanticTokens = defineSemanticTokens({
  colors: {
    accent: {
      primary: {
        value: {
          base: "{colors.brand.primary.500}",
          _dark: "{colors.brand.primary.500}",
        },
      },
      secondary: {
        value: {
          base: "{colors.brand.secondary.500}",
          _dark: "{colors.brand.secondary.500}",
        },
      },
      tertiary: {
        value: {
          base: "{colors.brand.tertiary.500}",
          _dark: "{colors.brand.tertiary.500}",
        },
      },
    },
  },
});

export default semanticTokens;
