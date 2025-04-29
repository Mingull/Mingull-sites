export { attempt } from "@mingull/exceptify/attempt.js";
export { catcher } from "@mingull/exceptify/catcher.js";
export { withFallback } from "@mingull/exceptify/fallback.js";

export type Success<T> = { data: T; error?: never };
export type Failure<E = unknown> = { data?: never; error: E };
export type Result<T, E = unknown> = Success<T> | Failure<E>;
