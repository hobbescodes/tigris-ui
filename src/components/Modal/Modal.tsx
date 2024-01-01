import { Dialog as ArkDialog } from "@ark-ui/react";
import { FiX as CloseIcon } from "react-icons/fi";

import Icon from "components/Icon/Icon";
import { panda } from "generated/panda/jsx";
import { modal } from "generated/panda/recipes";
import { createStyleContext, getContextualChildren } from "lib/util";

import type { DialogProps } from "@ark-ui/react";
import type { ModalVariantProps } from "generated/panda/recipes";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(modal);

export interface ModalProps extends DialogProps, ModalVariantProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  /** Modal content (body) container props. */
  contentProps?: ComponentPropsWithoutRef<typeof ModalContent>;
}

export const ModalRoot = withProvider(panda(ArkDialog.Root), "root");

export const ModalTrigger = withContext(panda(ArkDialog.Trigger), "trigger");

export const ModalBackdrop = withContext(panda(ArkDialog.Backdrop), "backdrop");

export const ModalCloseTrigger = withContext(
  panda(ArkDialog.CloseTrigger),
  "closeTrigger"
);

export const ModalPositioner = withContext(
  panda(ArkDialog.Positioner),
  "positioner"
);

export const ModalContent = withContext(panda(ArkDialog.Content), "content");

export const ModalTitle = withContext(panda(ArkDialog.Title), "title");

export const ModalDescription = withContext(
  panda(ArkDialog.Description),
  "description"
);

/**
 * A modal window that appears on top of the main content.
 */
const Modal = ({
  trigger,
  title,
  description,
  contentProps,
  children,
  ...rest
}: ModalProps) => (
  <ModalRoot lazyMount unmountOnExit {...rest}>
    {(ctx) => (
      <>
        {trigger && <ModalTrigger asChild>{trigger}</ModalTrigger>}

        <ModalBackdrop />

        <ModalPositioner>
          <ModalContent {...contentProps}>
            {title && <ModalTitle>{title}</ModalTitle>}

            {description && <ModalDescription>{description}</ModalDescription>}

            {getContextualChildren({ ctx, children })}

            <ModalCloseTrigger aria-label="close button">
              <Icon color="fg.primary">
                <CloseIcon />
              </Icon>
            </ModalCloseTrigger>
          </ModalContent>
        </ModalPositioner>
      </>
    )}
  </ModalRoot>
);

export default Modal;
