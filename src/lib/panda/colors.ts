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
    secondary: {
      50: { value: "#f5f2ff" },
      100: { value: "#eee7ff" },
      200: { value: "#ded3ff" },
      300: { value: "#c5afff" },
      400: { value: "#aa81ff" },
      500: { value: "#914fff" },
      600: { value: "#852bfc" },
      700: { value: "#7b20e9" },
      800: { value: "#6314c3" },
      900: { value: "#53139f" },
      950: { value: "#32096c" },
    },
    tertiary: {
      50: { value: "#ecffff" },
      100: { value: "#d0fcfd" },
      200: { value: "#a7f8fa" },
      300: { value: "#6aeff6" },
      400: { value: "#20dce9" },
      500: { value: "#0ac0d0" },
      600: { value: "#0c9aae" },
      700: { value: "#117a8d" },
      800: { value: "#176373" },
      900: { value: "#185261" },
      950: { value: "#093643" },
    },
  },
});

export default colors;
