export { cn, isPromise } from "./lib/utils.js";
export type Prettify<T> = { [K in keyof T]: T[K] } & {};
