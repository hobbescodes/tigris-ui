import { cva } from "generated/panda/css";
import { panda } from "generated/panda/jsx";

import type { ComponentProps } from "react";

export interface Props extends ComponentProps<typeof Button> {}

const recipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    h: "fit-content",
    px: 2.5,
    py: 1.5,
    cursor: "pointer",
    fontWeight: "semibold",
    _hover: {
      opacity: 0.8,
    },
  },
  variants: {
    variant: {
      primary: {
        bgColor: "brand.primary.700",
        borderRadius: "sm",
        color: { base: "white", _dark: "black" },
      },
      ghost: {
        bgColor: "transparent",
        borderRadius: "sm",
        color: "brand.primary.700",
      },
      rounded: {
        bgColor: "brand.primary.700",
        borderRadius: "full",
        color: { base: "white", _dark: "black" },
      },
      outline: {
        bgColor: "transparent",
        borderRadius: "sm",
        border: "1px solid",
        borderColor: "brand.primary.700",
        color: "brand.primary.700",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

/**
 * Core button component.
 */
const Button = panda("button", recipe);

export default Button;
