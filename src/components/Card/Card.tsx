import { Flex, panda } from "generated/panda/jsx";
import { card } from "generated/panda/recipes";

import type { CardVariantProps } from "generated/panda/recipes";
import type { ComponentProps } from "react";

export type CardProps = ComponentProps<typeof panda.div> & CardVariantProps;

/**
 * A container component that displays content in a compact and organized way.
 */
const Card = ({ children, variant, ...rest }: CardProps) => {
  const classes = card({ variant });

  return (
    <panda.div className={classes.root} {...rest}>
      {children}
    </panda.div>
  );
};

export interface CardHeaderProps extends CardProps {
  title?: string;
  description?: string;
}

export const CardHeader = ({
  children,
  variant,
  title,
  description,
  ...rest
}: CardHeaderProps) => {
  const classes = card({ variant });

  return (
    <panda.div className={classes.header} {...rest}>
      {(title || description) && (
        <Flex direction="column" gap={1}>
          {title && <panda.h2 className={classes.title}>{title}</panda.h2>}
          {description && (
            <panda.p className={classes.description}>{description}</panda.p>
          )}
        </Flex>
      )}
      {children}
    </panda.div>
  );
};

export interface CardContentProps extends CardProps {}

export const CardContent = ({
  children,
  variant,
  ...rest
}: CardContentProps) => {
  const classes = card({ variant });

  return (
    <panda.div className={classes.content} {...rest}>
      {children}
    </panda.div>
  );
};

export interface CardFooterProps extends CardProps {}

export const CardFooter = ({ children, variant, ...rest }: CardFooterProps) => {
  const classes = card({ variant });

  return (
    <panda.div className={classes.footer} {...rest}>
      {children}
    </panda.div>
  );
};

export default Card;
