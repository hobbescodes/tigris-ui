import { panda } from "generated/panda/jsx";
import { button } from "generated/panda/recipes";

import type { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<typeof Button> {}

// TODO: figure out why JSDoc is not getting picked up by storybook
/**
 * Primary UI component for user interaction.
 */
const Button = panda("button", button);

export default Button;
