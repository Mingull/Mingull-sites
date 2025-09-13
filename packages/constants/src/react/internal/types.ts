import { Prettify } from "@mingull/lib";
import { DomainsConfig, LocalePrefixMode, Pathnames, RoutingConfig } from "next-intl/routing";
import { z } from "zod";
import { ConstantsError } from "~/exceptions/constants-error.ts";

export type Locales = ReadonlyArray<string>;

export type SchemaType = z.ZodObject<Record<string, z.ZodTypeAny>> | Record<string, z.ZodTypeAny>;

/**
 * Return type of the `defineDefaults` function.
 * Contains both server and client accessors for locale-specific default values.
 */
export type Constants<
	Schema extends SchemaType,
	Shared extends unknown,
	TLocales extends Locales,
	TLocalePrefixMode extends LocalePrefixMode = "always",
	TPathnames extends Pathnames<TLocales> = never,
	TDomains extends DomainsConfig<TLocales> = never,
> = {
	[K in TLocales[number]]: MergeShared<Schema, Shared>;
} & (
	| { locales: TLocales; defaultLocale: TLocales[number]; routing?: never }
	| {
			routing: RoutingConfig<TLocales, TLocalePrefixMode, TPathnames, TDomains>;
			locales?: never;
			defaultLocale?: never;
	  }
);

/**
 * Configuration options for `createConstants`.
 *
 * Supports two approaches:
 * - Manual locale list: using `locales` and `defaultLocale`
 * - Dynamic detection: using a full `routing` config from `next-intl`
 */
export type Options<
	TSchema extends SchemaType,
	TShared extends unknown,
	TLocales extends Locales,
	TLocalePrefixMode extends LocalePrefixMode,
	TPathnames extends Pathnames<TLocales>,
	TDomains extends DomainsConfig<TLocales>,
> = (
	| {
			/** An explicit list of supported locales. */
			locales: TLocales;
			/** The default locale to fall back to when no matching locale is found. Must be one of the provided `locales`. */
			defaultLocale: TLocales[number];
			/** If using the `locales` approach, `routing` must not be provided. */
			routing?: never;
	  }
	| {
			/** Use `routing` when relying on `next-intl`'s routing configuration instead of manually specifying `locales` and `defaultLocale`. */
			routing: RoutingConfig<TLocales, TLocalePrefixMode, TPathnames, TDomains>;
			/** These should be omitted when using routing. */
			locales?: never;
			/** These should be omitted when using routing. */
			defaultLocale?: never;
	  }
) & {
	/** The Zod schema defining the structure and types of the default values. */
	schema: TSchema;
	/** Optional shared values that are not locale-specific, like error pages.
	 *
	 * These values will be validated against the same schema as the locale-specific data. If provided, they will be available in all locales under the `shared` key. */
	shared?: NoOverlap<SharedValues<TShared>, ValuesUnion<TLocales, LocaleMap<TLocales, TSchema, TShared>>>;
	/** Optional error handler that will be called if validation fails for any locale's data. If omitted, validation errors will throw by default. */
	onError?: (error: ConstantsError) => void;
} & LocaleMap<TLocales, TSchema, TShared>;

// export type MergeShared<Schema extends SchemaType, Shared extends unknown> =
// 	Schema extends z.ZodObject<any> ?
// 		Shared extends object ?
// 			Prettify<DeepReadonly<z.infer<Schema> & { readonly [K in keyof Shared]: DeepReadonly<z.infer<Shared[K]>> }>>
// 		:	Prettify<DeepReadonly<z.infer<Schema>>>
// 	: Schema extends Record<string, z.ZodTypeAny> ?
// 		Shared extends object ?
// 			Prettify<{ readonly [K in keyof Schema]: DeepReadonly<z.infer<Schema[K]>> } & { readonly [K in keyof Shared]: DeepReadonly<z.infer<Shared[K]>> }>
// 		:	Prettify<{ readonly [K in keyof Schema]: DeepReadonly<z.infer<Schema[K]>> }>
// 	:	never;

export type MergeShared<Schema extends SchemaType, Shared extends unknown> =
	Shared extends object ? Prettify<DeepReadonly<InferSchema<Schema> & InferShared<Shared>>> : Prettify<DeepReadonly<InferSchema<Schema>>>;

// export type ConstantsSchema<Schema extends SchemaType, Shared extends unknown> =
// 	Schema extends z.ZodObject<any> ? Prettify<Readonly<z.infer<Schema>> & Readonly<Shared extends object ? { readonly [K in keyof Shared]: Readonly<z.infer<Shared[K]>> } : {}>>
// 	: Schema extends Record<string, z.ZodTypeAny> ?
// 		Prettify<{ readonly [K in keyof Schema]: Readonly<z.infer<Schema[K]>> } & Readonly<Shared extends object ? { readonly [K in keyof Shared]: Readonly<z.infer<Shared[K]>> } : {}>>
// 	:	never;
export type ConstantsSchema<Schema extends SchemaType, Shared extends unknown> =
	Shared extends object ? Prettify<Readonly<InferSchema<Schema> & InferShared<Shared>>> : Prettify<Readonly<InferSchema<Schema>>>;

/** A mapping from locale codes to their respective default values. Each value must conform to the given Zod schema. */
export type LocaleMap<TLocales extends Locales, Schema extends SchemaType, Shared extends unknown> =
	Shared extends object ?

		{
			// Infer full set of keys from combined schema
			[K in TLocales[number]]: Prettify<
				PartialByKeys<
					ConstantsSchema<Schema, Shared>,
					// Make all shared keys optional/missing in locale objects
					Extract<keyof Shared, keyof ConstantsSchema<Schema, Shared> & string>
				>
			>;
		}
	:	{
			[K in TLocales[number]]: ConstantsSchema<Schema, Shared>;
		};

// Helper types:
// These are used to infer the schema type from the Zod schema and to ensure correct typing of shared values.
export type InferSchema<S extends SchemaType> =
	S extends z.ZodObject<any> ? z.infer<S>
	: S extends Record<string, z.ZodTypeAny> ? { [K in keyof S]: z.infer<S[K]> }
	: never;
// Helper type to infer shared values from a schema
export type InferShared<S extends object> = { [K in keyof S]: z.infer<S[K]> };
// helper type to make only certain keys optional
export type PartialByKeys<T, K extends keyof T> = Prettify<Omit<T, K> & { [P in K]?: T[P] }>;
// Helper type to ensure no overlap between shared and locale keys
export type NoOverlap<A extends unknown, B extends unknown> = Extract<keyof A, keyof B> extends never ? A : { ERROR: "Shared and locale keys must not overlap" };
// Helper type to ensure shared values are not overlapping with locale-specific values
export type SharedValues<T extends unknown> = {
	[K in keyof T]: z.infer<T[K]>;
};
// Helper type to extract values from a locale map
export type ValuesUnion<TLocales extends Locales, TMap extends Record<string, any>> = {
	[K in TLocales[number]]: keyof TMap[K];
}[TLocales[number]];
export type DeepReadonly<T> = T extends object ? { readonly [K in keyof T]: DeepReadonly<T[K]> } : T;
