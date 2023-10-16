import { dialogAnatomy } from "@ark-ui/anatomy";
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

import { sva } from "generated/panda/css";

import type { DialogProps } from "@ark-ui/react";
import type { ReactNode } from "react";

const modal = sva({
  slots: dialogAnatomy.keys(),
  base: {
    backdrop: {
      backdropFilter: "blur(4px)",
      background: {
        // TODO: replace when supported in Panda: bg.canvas/80
        base: "rgba(250, 250, 250, 0.8)",
        _dark: "rgba(10, 10, 10, 0.8)",
      },
      inset: 0,
      position: "fixed",
      zIndex: "overlay",
      _open: {
        animation: "fade-in",
      },
      _closed: {
        animation: "fade-out",
      },
    },
    container: {
      display: "flex",
      position: "fixed",
      inset: 0,
      alignItems: "center",
      justifyContent: "center",
      zIndex: "modal",
    },
    content: {
      position: "relative",
      mx: 1,
      bgColor: "bg.primary",
      boxShadow: "lg",
      borderRadius: "md",
      borderWidth: "1px",
      borderColor: "border.primary",
      maxWidth: { base: "xs", sm: "sm" },
      _open: {
        animation: "slide-in",
      },
      _closed: {
        animation: "slide-out",
      },
    },
    title: {
      color: "fg.primary",
      fontWeight: "semibold",
      textStyle: "lg",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
    },
    trigger: {
      w: "fit-content",
    },
    closeTrigger: {
      position: "absolute",
      top: 2,
      right: 2,
      borderRadius: "sm",
      p: 2,
      bgColor: { base: "inherit", _hover: "bg.subtle" },
      _hover: {
        opacity: 0.8,
      },
    },
  },
});

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

                {/* forward nested context/state if utilized, otherwise directly render children */}
                {typeof children === "function" ? children(ctx) : children}

                <DialogCloseTrigger className={classes.closeTrigger} asChild>
                  <CloseIcon />
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
