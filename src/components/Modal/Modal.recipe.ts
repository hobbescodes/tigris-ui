import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const modalRecipe = defineSlotRecipe({
  className: "modal",
  description: "The styles for the Modal component",
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
      p: 6,
      bgColor: "bg.primary",
      boxShadow: "lg",
      borderRadius: "md",
      borderWidth: "1px",
      borderColor: "border.primary",
      color: "fg.primary",
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
      cursor: "pointer",
      borderRadius: "sm",
      p: 2,
      bgColor: { base: "inherit", _hover: "bg.subtle" },
    },
  },
});
