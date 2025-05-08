export type Success<T> = { data: T; error?: never };
export type Failure<E = unknown> = { data?: never; error: E };
export type Result<T, E = unknown> = Success<T> | Failure<E>;
