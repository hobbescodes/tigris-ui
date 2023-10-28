import { defineSlotRecipe } from "@pandacss/dev";

const card = defineSlotRecipe({
  className: "card",
  description: "Card styles recipe.",
  slots: ["root", "header", "title", "description", "content", "footer"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      boxShadow: "xs",
      borderRadius: "md",
      borderWidth: "1px",
    },
    header: {
      display: "flex",
      gap: 1,
      p: 6,
    },
    content: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      color: "fg.primary",
      pb: 6,
      px: 6,
    },
    footer: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 2,
      pb: 6,
      pt: 2,
      px: 6,
    },
    title: {
      textStyle: "lg",
      fontWeight: "semibold",
      color: "fg.primary",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
    },
  },
  variants: {
    variant: {
      primary: {
        root: {
          bgColor: "bg.primary",
          borderColor: "border.primary",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default card;
