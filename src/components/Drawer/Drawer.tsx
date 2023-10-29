import {
  ark,
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Portal,
} from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/Icon/Icon";
import { panda } from "generated/panda/jsx";
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
  footer?: ReactNode | ((props: DialogContext) => ReactNode);
}

/**
 * A panel that slides in from the edge of the screen.
 */
const Drawer = ({
  trigger,
  title,
  description,
  footer,
  children,
  alignment,
  placement,
  ...rest
}: DrawerProps) => {
  const classes = drawer({ alignment, placement });

  const PandaContainer = panda(ark.div);

  return (
    <Dialog {...rest}>
      {(ctx) => (
        <>
          {trigger && (
            <DialogTrigger className={classes.trigger} asChild>
              {trigger}
            </DialogTrigger>
          )}

          <Portal>
            <DialogBackdrop className={classes.backdrop} />

            <DialogContainer className={classes.container}>
              <DialogContent
                className={classes.content}
                lazyMount
                unmountOnExit
              >
                <PandaContainer className={classes.header}>
                  {title && (
                    <DialogTitle className={classes.title}>{title}</DialogTitle>
                  )}

                  {description && (
                    <DialogDescription className={classes.description}>
                      {description}
                    </DialogDescription>
                  )}

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
            </DialogContainer>
          </Portal>
        </>
      )}
    </Dialog>
  );
};

export default Drawer;
