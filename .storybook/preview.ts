import type { Preview } from "@storybook/react";

import "lib/styles/main.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      default: true,
      classTarget: "html",
      stylePreview: true,
    },
  },
};

export default preview;
