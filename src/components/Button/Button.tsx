import { panda } from "generated/panda/jsx";

import type { ComponentProps } from "react";

export interface Props extends ComponentProps<typeof panda.button> {}

const Button = ({ children, ...rest }: Props) => (
  <panda.button {...rest}>{children}</panda.button>
);

export default Button;
