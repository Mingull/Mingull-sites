export type Prettify<T> = { [K in keyof T]: T[K] } & {};
export type BetterExclude<T, K extends T> = Exclude<T, K>;
export type BetterOmit<T, K extends keyof T> = Omit<T, K>;

export * from "./db/schemas/index.js";
export * from "./lib/cuid2.js";
export * from "./lib/utils.js";
