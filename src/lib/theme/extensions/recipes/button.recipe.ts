import { defineRecipe } from "@pandacss/dev";

const button = defineRecipe({
  className: "button",
  description: "Button styles recipe.",
  base: {
    colorPalette: "brand.primary",
    display: "inline-flex",
    alignItems: "center",
    h: "fit-content",
    cursor: "pointer",
    fontWeight: "semibold",
    border: "1px solid",
    _focus: { outline: "none" },
    _hover: {
      opacity: 0.8,
    },
  },
  variants: {
    variant: {
      primary: {
        bgColor: "colorPalette.500",
        borderColor: "colorPalette.500",
        borderRadius: "sm",
        color: "white",
      },
      ghost: {
        color: "colorPalette.500",
        bgColor: "transparent",
        borderRadius: "sm",
        borderColor: "transparent",
      },
      rounded: {
        bgColor: "colorPalette.500",
        borderColor: "colorPalette.500",
        borderRadius: "full",
        color: "white",
      },
      outline: {
        bgColor: "transparent",
        borderRadius: "sm",
        borderColor: "colorPalette.500",
        color: "colorPalette.500",
      },
    },
    size: {
      xs: {
        fontSize: "xs",
        px: 1.5,
        py: 1,
      },
      sm: {
        fontSize: "sm",
        px: 2,
        py: 1.5,
      },
      md: {
        fontSize: "md",
        px: 2.5,
        py: 2,
      },
      lg: {
        fontSize: "lg",
        px: 3,
        py: 2.5,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export default button;
