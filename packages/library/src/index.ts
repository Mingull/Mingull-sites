export type Prettify<T> = { [K in keyof T]: T[K] } & {};

export * from "./auth/client.js";
export * from "./db/schemas/index.js";
export * from "./lib/cuid2.js";
export * from "./lib/utils.js";
export * from "./plugins/client/index.js";
