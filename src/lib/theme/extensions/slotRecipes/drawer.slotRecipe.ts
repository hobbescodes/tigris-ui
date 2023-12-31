import { dialogAnatomy } from "@ark-ui/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

const anatomy = dialogAnatomy.extendWith("header", "body", "footer");

const drawer = defineSlotRecipe({
  className: "drawer",
  slots: [...anatomy.keys()],
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
      top: 0,
      bottom: 0,
      justifyContent: "center",
      position: "fixed",
      width: { base: "full", sm: "sm" },
      zIndex: "modal",
    },
    content: {
      background: "bg.primary",
      borderWidth: "1px",
      boxShadow: "xl",
      display: "grid",
      divideY: "1px",
      divideColor: "border.primary",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr auto",
      gridTemplateAreas: `
        'header'
        'body'
        'footer'
      `,
      height: "full",
      width: "full",
      _hidden: {
        display: "none",
      },
    },
    header: {
      display: "flex",
      position: "relative",
      alignItems: "center",
      gap: 2,
      gridArea: "header",
      pt: { base: 4, md: 6 },
      pb: 4,
      px: { base: 4, md: 6 },
    },
    body: {
      display: "flex",
      flexDirection: "column",
      gridArea: "body",
      overflow: "auto",
      color: "fg.primary",
      p: { base: 4, md: 6 },
    },
    footer: {
      display: "flex",
      gridArea: "footer",
      justifyContent: "flex-end",
      py: 4,
      px: { base: 4, md: 6 },
    },
    title: {
      color: "fg.primary",
      fontWeight: "semibold",
      textStyle: "xl",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
    },
    closeTrigger: {
      position: "absolute",
      cursor: "pointer",
      borderRadius: "sm",
      p: 2,
      bgColor: { base: "inherit", _hover: "bg.subtle" },
    },
  },
  variants: {
    placement: {
      left: {
        positioner: {
          left: 0,
        },
        content: {
          borderRightColor: "border.primary",
          _open: {
            animation: "slide-in-left",
          },
          _closed: {
            animation: "slide-out-left",
          },
        },
      },
      right: {
        positioner: {
          right: 0,
        },
        content: {
          borderLeftColor: "border.primary",
          _open: {
            animation: "slide-in-right",
          },
          _closed: {
            animation: "slide-out-right",
          },
        },
      },
    },
    alignment: {
      start: {
        closeTrigger: {
          top: 2,
          right: 2,
        },
        body: {
          textAlign: "start",
        },
      },
      end: {
        closeTrigger: {
          top: 2,
          left: 2,
        },
        header: {
          flexDirection: "row-reverse",
        },
        title: {
          textAlign: "end",
        },
        description: {
          textAlign: "end",
        },
        body: {
          textAlign: "end",
        },
        footer: {
          flexDirection: "row-reverse",
        },
      },
    },
  },
  defaultVariants: {
    placement: "right",
    alignment: "start",
  },
});

export default drawer;
