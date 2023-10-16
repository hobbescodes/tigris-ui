import { sva } from "generated/panda/css";
import { Flex, panda } from "generated/panda/jsx";

import type { ComponentProps } from "react";

export interface CardProps extends ComponentProps<typeof panda.div> {}

const recipe = sva({
  slots: ["root", "header", "title", "description", "content", "footer"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      boxShadow: "xs",
      borderRadius: "md",
      borderWidth: "1px",
    },
    header: {
      display: "flex",
      gap: 1,
      p: 6,
    },
    content: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      pb: 6,
      px: 6,
    },
    footer: {
      display: "flex",
      justifyContent: "flex-end",
      pb: 6,
      pt: 2,
      px: 6,
    },
    title: {
      textStyle: "lg",
      fontWeight: "semibold",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
    },
  },
});

const Card = ({ children, ...rest }: CardProps) => {
  const classes = recipe();

  return (
    <panda.div className={classes.root} {...rest}>
      {children}
    </panda.div>
  );
};

export interface CardHeaderProps extends ComponentProps<typeof panda.div> {
  title?: string;
  description?: string;
}

export const CardHeader = ({
  children,
  title,
  description,
  ...rest
}: CardHeaderProps) => {
  const classes = recipe();

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

export interface CardContentProps extends ComponentProps<typeof panda.div> {}

export const CardContent = ({ children, ...rest }: CardContentProps) => {
  const classes = recipe();

  return (
    <panda.div className={classes.content} {...rest}>
      {children}
    </panda.div>
  );
};

export interface CardFooterProps extends ComponentProps<typeof panda.div> {}

export const CardFooter = ({ children, ...rest }: CardFooterProps) => {
  const classes = recipe();

  return (
    <panda.div className={classes.footer} {...rest}>
      {children}
    </panda.div>
  );
};

export default Card;
