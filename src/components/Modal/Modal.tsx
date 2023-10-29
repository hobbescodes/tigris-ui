import {
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
import { modal } from "generated/panda/recipes";
import { getContextualChildren } from "lib/util";

import type { DialogProps } from "@ark-ui/react";
import type { ReactNode } from "react";

export interface ModalProps extends DialogProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
}

/**
 * A modal window that appears on top of the main content.
 */
const Modal = ({
  trigger,
  title,
  description,
  children,
  ...rest
}: ModalProps) => {
  const classes = modal();

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
              <DialogContent className={classes.content}>
                {title && (
                  <DialogTitle className={classes.title}>{title}</DialogTitle>
                )}

                {description && (
                  <DialogDescription className={classes.description}>
                    {description}
                  </DialogDescription>
                )}

                {getContextualChildren({ ctx, children })}

                <DialogCloseTrigger
                  aria-label="close button"
                  className={classes.closeTrigger}
                >
                  <Icon color="fg.primary">
                    <CloseIcon />
                  </Icon>
                </DialogCloseTrigger>
              </DialogContent>
            </DialogContainer>
          </Portal>
        </>
      )}
    </Dialog>
  );
};

export default Modal;
