import {
  ark,
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogPositioner,
  DialogTitle,
  DialogTrigger,
} from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/Icon/Icon";
import { Flex, panda } from "generated/panda/jsx";
import { drawer } from "generated/panda/recipes";
import { getContextualChildren } from "lib/util";

import type { DialogProps } from "@ark-ui/react";
import type { DialogContext } from "@ark-ui/react/dialog/dialog-context";
import type { DrawerVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface DrawerProps extends DialogProps, DrawerVariantProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  headerAddon?: ReactNode;
  footer?: ReactNode | ((props: DialogContext) => ReactNode);
}

/**
 * A panel that slides in from the edge of the screen.
 */
const Drawer = ({
  trigger,
  title,
  description,
  headerAddon,
  footer,
  children,
  alignment,
  placement,
  ...rest
}: DrawerProps) => {
  const classes = drawer({ alignment, placement });

  const PandaContainer = panda(ark.div);

  return (
    <Dialog lazyMount unmountOnExit {...rest}>
      {(ctx) => (
        <>
          {trigger && (
            <DialogTrigger className={classes.trigger} asChild>
              {trigger}
            </DialogTrigger>
          )}

          <DialogBackdrop className={classes.backdrop} />

          <DialogPositioner className={classes.positioner}>
            <DialogContent className={classes.content}>
              <PandaContainer className={classes.header}>
                {headerAddon && headerAddon}

                <Flex direction="column" gap={1}>
                  {title && (
                    <DialogTitle className={classes.title}>{title}</DialogTitle>
                  )}

                  {description && (
                    <DialogDescription className={classes.description}>
                      {description}
                    </DialogDescription>
                  )}
                </Flex>

                <DialogCloseTrigger
                  aria-label="close button"
                  className={classes.closeTrigger}
                >
                  <Icon color="fg.primary">
                    <CloseIcon />
                  </Icon>
                </DialogCloseTrigger>
              </PandaContainer>

              <PandaContainer className={classes.body} asChild>
                {getContextualChildren({ ctx, children })}
              </PandaContainer>

              {footer && (
                <PandaContainer className={classes.footer} asChild>
                  {getContextualChildren({ ctx, children: footer })}
                </PandaContainer>
              )}
            </DialogContent>
          </DialogPositioner>
        </>
      )}
    </Dialog>
  );
};

export default Drawer;
