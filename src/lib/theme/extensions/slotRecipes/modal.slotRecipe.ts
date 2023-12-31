import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

const modal = defineSlotRecipe({
  className: "modal",
  description: "Modal styles recipe.",
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
    positioner: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      left: 0,
      overflow: "auto",
      position: "fixed",
      top: 0,
      width: "100vw",
      height: "100dvh",
      zIndex: "modal",
    },
    content: {
      mx: 1,
      pt: { base: 0, sm: 6 },
      px: 6,
      pb: 6,
      position: "relative",
      bgColor: "bg.primary",
      boxShadow: "lg",
      borderWidth: "1px",
      borderColor: "border.primary",
      borderRadius: "sm",
      color: "fg.primary",
      w: { base: "full", sm: "sm" },
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
      display: { base: "none", sm: "inline-flex" },
    },
  },
  variants: {
    variant: {
      primary: {
        content: {
          position: "relative",
          borderRadius: "md",
          _open: {
            animation: "slide-in",
          },
          _closed: {
            animation: "slide-out",
          },
        },
      },
      mobile: {
        content: {
          position: "absolute",
          bottom: 0,
          borderTopRadius: "xl",
          minH: "50vh",
          _open: {
            animation: "slide-in-bottom",
          },
          _closed: {
            animation: "slide-out-bottom",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default modal;
