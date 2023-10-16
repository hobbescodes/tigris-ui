import { defineTokens } from "@pandacss/dev";

// default Panda colors: https://panda-css.com/docs/customization/theme#colors
const colors = defineTokens.colors({
  brand: {
    primary: {
      50: { value: "#eff8ff" },
      100: { value: "#dbeefe" },
      200: { value: "#bfe3fe" },
      300: { value: "#94d1fc" },
      400: { value: "#61b7f9" },
      500: { value: "#3c98f5" },
      600: { value: "#2077e9" },
      700: { value: "#1e65d7" },
      800: { value: "#1f52ae" },
      900: { value: "#1f4789" },
      950: { value: "#172c54" },
    },
  },
});

export default colors;
