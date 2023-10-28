import { defineRecipe } from "@pandacss/dev";

const button = defineRecipe({
  className: "button",
  description: "Button styles recipe.",
  base: {
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
    colorScheme: {
      primary: {
        bgColor: "accent.primary",
        borderColor: "accent.primary",
        color: "accent.primary",
      },
      secondary: {
        bgColor: "accent.secondary",
        borderColor: "accent.secondary",
        color: "accent.secondary",
      },
      tertiary: {
        bgColor: "accent.tertiary",
        borderColor: "accent.tertiary",
        color: "accent.tertiary",
      },
    },
    variant: {
      primary: {
        borderRadius: "sm",
        color: "white!",
      },
      ghost: {
        bgColor: "transparent!",
        borderRadius: "sm",
        borderColor: "transparent!",
      },
      rounded: {
        borderRadius: "full",
        color: "white!",
      },
      outline: {
        bgColor: "transparent!",
        borderRadius: "sm",
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
    colorScheme: "primary",
    variant: "primary",
    size: "md",
  },
});

export default button;
