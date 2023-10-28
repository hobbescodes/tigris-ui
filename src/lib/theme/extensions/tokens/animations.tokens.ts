import { defineTokens } from "@pandacss/dev";

const animations = defineTokens.animations({
  "fade-in": {
    value: "fade-in 250ms {easings.default}",
  },
  "fade-out": {
    value: "fade-out 200ms {easings.default}",
  },
  "slide-in": {
    value: "slide-in 400ms {easings.emphasized-in}",
  },
  "slide-out": {
    value: "slide-out 200ms {easings.emphasized-out}",
  },
  "slide-in-left": {
    value: "slide-in-left 400ms {easings.emphasized-in}",
  },
  "slide-out-left": {
    value: "slide-out-left 200ms {easings.emphasized-out}",
  },
  "slide-in-right": {
    value: "slide-in-right 400ms {easings.emphasized-in}",
  },
  "slide-out-right": {
    value: "slide-out-right 200ms {easings.emphasized-out}",
  },
  "slide-in-bottom": {
    value: "slide-in-bottom 400ms {easings.emphasized-in}",
  },
  "slide-out-bottom": {
    value: "slide-out-bottom 200ms {easings.emphasized-out}",
  },
  "slide-in-top": {
    value: "slide-in-top 400ms {easings.emphasized-in}",
  },
  "slide-out-top": {
    value: "slide-out-top 200ms {easings.emphasized-out}",
  },
  "infinite-spin": {
    value: "spin 1s infinite linear",
  },
});

export default animations;
