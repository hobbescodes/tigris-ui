import { ark } from "@ark-ui/react";

import { panda } from "generated/panda/jsx";
import { icon } from "generated/panda/recipes";

import type { ComponentProps, ReactElement } from "react";

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
