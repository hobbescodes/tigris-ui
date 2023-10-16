import { ark } from "@ark-ui/react";

import { cva } from "generated/panda/css";
import { panda } from "generated/panda/jsx";

import type { ComponentProps, ReactElement } from "react";

const icon = cva({
  base: {
    display: "inline-block",
    flexShrink: 0,
    verticalAlign: "middle",
    lineHeight: "1em",
  },
  variants: {
    size: {
      xs: {
        w: 3,
        h: 3,
      },
      sm: {
        w: 4,
        h: 4,
      },
      md: {
        w: 5,
        h: 5,
      },
      lg: {
        w: 6,
        h: 6,
      },
      xl: {
        w: 7,
        h: 7,
      },
      "2xl": {
        w: 8,
        h: 8,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface IconProps extends ComponentProps<typeof PandaIcon> {
  children: ReactElement;
}

const PandaIcon = panda(ark.svg, icon);

/**
 * A graphical representation of an action, file, or concept.
 */
const Icon = ({ ...props }: IconProps) => {
  return <PandaIcon asChild {...props} />;
};

export default Icon;
