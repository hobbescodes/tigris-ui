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
import { useRef } from "react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/Icon/Icon";
import { panda } from "generated/panda/jsx";
import { modal } from "generated/panda/recipes";
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

  const dragConstraints = useRef<HTMLDivElement>(null);

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
                ref={dragConstraints}
                className={classes.content}
                asChild
              >
                {/* TODO: add useBreakpointValue to verify that draggable container is limited to mobile screens */}
                <PandaMotionContainer
                  drag="y"
                  dragConstraints={dragConstraints}
                  onDrag={(_e, info) => {
                    // TODO: add condition for velocity as well
                    if (info.offset.y > 150) ctx.close();
                  }}
                  className="group"
                >
                  <panda.div
                    w="30%"
                    borderRadius="full"
                    mx="auto"
                    my={3}
                    h={2}
                    bgColor="bg.subtle"
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
