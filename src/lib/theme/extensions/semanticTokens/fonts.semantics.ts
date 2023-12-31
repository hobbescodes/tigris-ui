import { defineSemanticTokens } from "@pandacss/dev";

/**
 * Font semantic tokens.
 */
const fonts = defineSemanticTokens.fonts({
  primary: {
    value: `var(--font-primary), "Geist", sans-serif`,
    description: "Primary font",
  },
  code: {
    value: `var(--font-code), monospace`,
    description: "Code font",
  },
});

export default fonts;
