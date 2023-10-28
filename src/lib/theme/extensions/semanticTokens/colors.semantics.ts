import { defineSemanticTokens } from "@pandacss/dev";

const colors = defineSemanticTokens.colors({
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
  bg: {
    primary: {
      value: {
        base: "{colors.neutral.25}",
        _dark: "{colors.neutral.950}",
      },
    },
    subtle: {
      value: {
        base: "{colors.brand.primary.50}",
        _dark: "{colors.brand.primary.950}",
      },
    },
  },
  fg: {
    primary: {
      value: {
        base: "{colors.neutral.950}",
        _dark: "{colors.white}",
      },
    },
    muted: {
      value: {
        base: "{colors.neutral.600}",
        _dark: "{colors.neutral.300}",
      },
    },
  },
  border: {
    primary: {
      value: {
        base: "{colors.neutral.200}",
        _dark: "{colors.neutral.800}",
      },
    },
  },
});

export default colors;
