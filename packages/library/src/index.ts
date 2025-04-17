export { cn } from "./lib/utils.js";
export { catcher } from "./exceptions/catcher.js";

export type Prettify<T> = { [K in keyof T]: T[K] } & {};
