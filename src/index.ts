// inject root cascade layers
import "lib/styles/main.css";

export { tigrisPreset } from "lib/theme/presets";

// 🐼 export backfill of Panda components
export * from "generated/panda/css";
export * from "generated/panda/jsx";
export type { JsxStyleProps } from "generated/panda/types";

export * from "components";
