/**
 * Create an optional key from a string union
 */
export type OptionalKey<K> = K extends string ? `${K}?` : never;
