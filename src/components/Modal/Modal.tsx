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
import { motion } from "framer-motion";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/Icon/Icon";
import { cx } from "generated/panda/css";
import { panda } from "generated/panda/jsx";
import { modal } from "generated/panda/recipes";
import { useIsMobile } from "lib/hooks";
import { getContextualChildren } from "lib/util";

import type { DialogProps } from "@ark-ui/react";
import type { ModalVariantProps } from "generated/panda/recipes";
import type { ReactNode } from "react";

export interface ModalProps extends DialogProps, ModalVariantProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
}

const PandaMotionContainer = panda(motion.div);

/**
 * A modal window that appears on top of the main content.
 */
const Modal = ({
  trigger,
  title,
  description,
  children,
  variant,
  ...rest
}: ModalProps) => {
  const classes = modal({ variant });

  const isMobile = useIsMobile();

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
                className={cx(classes.content, "group")}
                unmountOnExit
                asChild
              >
                <PandaMotionContainer
                  drag={isMobile ? "y" : false}
                  dragConstraints={{ top: 0, bottom: 200 }}
                  dragElastic={false}
                  dragSnapToOrigin
                  onDrag={(_e, info) => {
                    if (info.offset.y > 150 || info.velocity.y > 500)
                      ctx.close();
                  }}
                  cursor={isMobile ? "pointer" : "default"}
                >
                  <panda.div
                    display={{ base: "block", sm: "none" }}
                    w="20%"
                    borderRadius="full"
                    mx="auto"
                    my={3}
                    h={2}
                    bgColor="border.primary"
                    opacity={{ base: 1, _groupHover: 0.8 }}
                  />

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
                </PandaMotionContainer>
              </DialogContent>
            </DialogContainer>
          </Portal>
        </>
      )}
    </Dialog>
  );
};

export default Modal;
