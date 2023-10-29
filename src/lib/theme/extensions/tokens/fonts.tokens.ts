import { defineTokens } from "@pandacss/dev";

/**
 * Font tokens.
 */
const fonts = defineTokens.fonts({
  sans: {
    value: [
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
  },
  serif: {
    value: [
      "ui-serif",
      "Georgia",
      "Cambria",
      '"Times New Roman"',
      "Times",
      "serif",
    ],
  },
  mono: {
    value: [
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace",
    ],
  },
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
