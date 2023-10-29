import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

const drawer = defineSlotRecipe({
  className: "drawer",
  description: "Drawer styles recipe.",
  slots: dialogAnatomy.keys(),
  base: {
    backdrop: {
      backdropFilter: "blur(4px)",
      background: {
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
      inset: 0,
      position: "fixed",
      zIndex: "modal",
    },
    content: {
      background: "bg.primary",
      boxShadow: "lg",
      borderWidth: "1px",
      borderColor: "border.primary",
      overflowY: "auto",
      position: "relative",
      p: 6,
    },
    title: {
      fontWeight: "bold",
      textStyle: "xl",
      color: "fg.primary",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
    },
    trigger: {
      w: "fit-content",
    },
    closeTrigger: {
      cursor: "pointer",
      borderRadius: "sm",
      pos: "absolute",
      p: 2,
      bgColor: { base: "inherit", _hover: "bg.subtle" },
      _focus: { outline: "none" },
    },
  },
  variants: {
    placement: {
      right: {
        container: {
          justifyContent: "flex-end",
        },
        content: {
          height: "100%",
          width: { base: "100%", sm: "sm" },
          _open: {
            animation: "slide-in-right",
          },
          _closed: {
            animation: "slide-out-right",
          },
        },
      },
      left: {
        container: {
          justifyContent: "flex-start",
        },
        content: {
          height: "100%",
          width: { base: "100%", sm: "sm" },
          _open: {
            animation: "slide-in-left",
          },
          _closed: {
            animation: "slide-out-left",
          },
        },
      },
      bottom: {
        container: {
          alignItems: "flex-end",
        },
        content: {
          height: { base: "95%", sm: "sm" },
          width: "100%",
          _open: {
            animation: "slide-in-bottom",
          },
          _closed: {
            animation: "slide-out-bottom",
          },
        },
      },
      top: {
        container: {
          alignItems: "flex-start",
        },
        content: {
          height: { base: "95%", sm: "sm" },
          width: "100%",
          _open: {
            animation: "slide-in-top",
          },
          _closed: {
            animation: "slide-out-top",
          },
        },
      },
    },
    layout: {
      start: {
        content: {
          textAlign: "start",
        },
        closeTrigger: {
          top: 2,
          right: 2,
        },
      },
      end: {
        content: {
          textAlign: "end",
        },
        closeTrigger: {
          top: 2,
          left: 2,
        },
      },
    },
  },
  defaultVariants: {
    placement: { base: "bottom", sm: "right" },
    layout: "start",
  },
});

export default drawer;
