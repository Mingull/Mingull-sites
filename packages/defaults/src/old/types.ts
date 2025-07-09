import { Prettify } from "@mingull/lib";
import { DomainsConfig, LocalePrefixMode, Pathnames, RoutingConfig } from "next-intl/routing";
import { z } from "zod";
import { DefaultsError } from "../utils/default-error.ts";

export type Locales = ReadonlyArray<string>;

export type SchemaType = z.ZodObject<Record<string, z.ZodTypeAny>> | Record<string, z.ZodTypeAny>;
/**
 * Return type of the `defineDefaults` function.
 * Contains both server and client accessors for locale-specific default values.
 */
export type Defaults<Schema extends SchemaType, Shared = unknown> = {
	/**
	 * Server-side function that returns the validated default values for the current locale.
	 *
	 * This should only be called in server components, API routes, or other server-side logic.
	 * Throws if the data for the current or fallback locale is missing or invalid.
	 *
	 * @returns A promise that resolves to the validated default values.
	 */
	getDefaults(): Promise<DefaultsSchema<Schema, Shared>>;
	/**
	 * Client-side hook that provides default values for the current locale.
	 *
	 * This hook should be used inside React client components.
	 * It automatically determines the active locale via `useLocale()` from `next-intl`.
	 *
	 * @returns The validated default values for the active locale.
	 */
	useDefaults(): DefaultsSchema<Schema, Shared>;
};

export type DefaultsSchema<Schema extends SchemaType, Shared extends unknown = unknown> =
	Schema extends z.ZodObject<any> ? Prettify<Readonly<z.infer<Schema>> & (Shared extends object ? Shared : {})>
	: Schema extends Record<string, z.ZodTypeAny> ?
		Prettify<{ readonly [K in keyof Schema]: Readonly<z.infer<Schema[K]>> } & (Shared extends object ? Shared : {})>
	:	never;

/**
 * Configuration options for `defineDefaults`.
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
			/**
			 * An explicit list of supported locales.
			 */
			locales: TLocales;

			/**
			 * The default locale to fall back to when no matching locale is found.
			 * Must be one of the provided `locales`.
			 */
			defaultLocale: TLocales[number];
			/**
			 * If using the `locales` approach, `routing` must not be provided.
			 */
			routing?: never;
	  }
	| {
			/**
			 * Use `routing` when relying on `next-intl`'s routing configuration
			 * instead of manually specifying `locales` and `defaultLocale`.
			 */
			routing: RoutingConfig<TLocales, TLocalePrefixMode, TPathnames, TDomains>;
			/**
			 * These should be omitted when using routing.
			 */
			locales?: never;
			defaultLocale?: never;
	  }
) & {
	/**
	 * The Zod schema defining the structure and types of the default values.
	 */
	schema: TSchema;
	/**
	 * Optional shared values that are not locale-specific, like error pages.
	 *
	 * These values will be validated against the same schema as the locale-specific data.
	 * If provided, they will be available in all locales under the `shared` key.
	 */
	shared?: TShared;
	/**
	 * Optional error handler that will be called if validation fails for any locale's data.
	 * If omitted, validation errors will throw by default.
	 */
	onError?: (error: DefaultsError) => void;
} & LocaleMap<TLocales, TSchema, TShared>;

/**
 * A mapping from locale codes to their respective default values.
 * Each value must conform to the given Zod schema.
 */
export type LocaleMap<TLocales extends Locales, Schema extends SchemaType, Shared = unknown> = {
	[K in TLocales[number]]: Shared extends object ? Prettify<Omit<DefaultsSchema<Schema>, keyof Shared>>
	:	DefaultsSchema<Schema>;
};
