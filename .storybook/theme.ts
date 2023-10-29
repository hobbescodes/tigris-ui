import { create } from "@storybook/theming/create";

import { fonts } from "../src/lib/theme/extensions/semanticTokens";

import type { ThemeVars } from "@storybook/theming";

const typography: Pick<ThemeVars, "fontBase" | "fontCode"> = {
  fontBase: fonts.primary.value,
  fontCode: fonts.code.value,
};

/**
 * Custom Storybook theme.
 */
const storybookTheme = create({
  ...typography,
  // set dark theme default
  base: "dark",
  brandTitle: `<div style="display: flex; gap: 0.5rem; align-items: center; justify-content: center;"><img src="/img/hobbescodes.jpeg" width="30px" height="30px" style="border-radius: 9999px;" /> Tigris UI</div>`,
  brandTarget: "_self",
});

export default storybookTheme;
