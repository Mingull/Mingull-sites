import { DomainsConfig, LocalePrefixMode, Pathnames } from "next-intl/routing";
import { z } from "zod";
import type { Defaults, LocaleMap, Locales, MergeShared, Options, SchemaType } from "~/react/types.ts";
import { DefaultsError } from "~/utils/default-error.ts";

/**
 * Defines default values for a set of locales using a Zod schema.
 *
 * Supports both server and client environments, and works with either `locales` + `defaultLocale`
 * or a `routing` config from `next-intl`. It ensures all locale data conforms to the provided schema.
 *
 * @param {Options<TSchema, TLocales, TLocalePrefixMode, TPathnames, TDomains>} options - Configuration object containing:
 * - `schema`: Zod schema for validating defaults.
 * - `locales`: Optional array of supported locale codes.
 * - `defaultLocale`: Fallback locale (required if `locales` is provided).
 * - `routing`: Optional next-intl routing config.
 * - Locale-specific data mapped by locale keys.
 *
 * @returns An object with expected defaults for the specified locales.
 */
export function createDefaults<
	const TSchema extends SchemaType,
	const TShared extends unknown,
	const TLocales extends Locales,
	const TLocalePrefixMode extends LocalePrefixMode = "always",
	const TPathnames extends Pathnames<TLocales> = never,
	const TDomains extends DomainsConfig<TLocales> = never,
>(
	options: Options<TSchema, TShared, TLocales, TLocalePrefixMode, TPathnames, TDomains>,
): Defaults<TSchema, TShared, TLocales, TLocalePrefixMode, TPathnames, TDomains> {
	const { schema, locales, defaultLocale, routing, shared, onError, ...rest } = options;
	const localeData: LocaleMap<TLocales, TSchema, TShared> = rest as unknown as LocaleMap<TLocales, TSchema, TShared>;

	try {
		if (!locales && !routing) throw new DefaultsError("Either 'locales' or 'routing' must be provided.", "locales");
		if (locales && routing)
			throw new DefaultsError("Cannot provide both 'locales' and 'routing'. Choose one.", "locales");
		if (locales && !defaultLocale) throw new DefaultsError("Default locale must be provided.", "locales");

		const schemaForLocale = getSchemaForLocale(schema, shared);

		const localeList = locales ?? routing?.locales;

		if (!localeList) {
			throw new DefaultsError("No locales provided to iterate over.", "locales");
		}
		for (const locale of localeList) {
			const data = localeData[locale as keyof typeof localeData];

			const result =
				isZodObject(schemaForLocale) ?
					schemaForLocale.safeParse(data)
				:	z.object(schemaForLocale).safeParse(data);

			if (!result.success) {
				throw new DefaultsError(`Invalid data for locale "${locale}"`, "locales-validation", {
					context: { locale, validationError: JSON.parse(result.error.message) },
				});
			}
		}

		if (shared) {
			if (!isZodObject(schema) && !isSchemaRecord(schema)) {
				throw new DefaultsError("Invalid schema type provided", "unknown");
			}
			const sharedResult =
				isZodObject(schema) ? schema.partial().safeParse(shared) : z.object(schema).partial().safeParse(shared);

			if (!sharedResult.success) {
				throw new DefaultsError(`Invalid shared data: ${sharedResult.error.message}`, "shared-validation");
			}
		}
	} catch (error) {
		onError?.(
			error instanceof DefaultsError ? error : (
				new DefaultsError("An unknown error occurred while creating defaults", "unknown")
			),
		);
		throw error; // Re-throw to ensure server-side rendering fails if needed
	}

	return {
		locales,
		defaultLocale,
		routing,
		...mergeLocaleDataWithShared(localeData, shared),
	} as Defaults<TSchema, TShared, TLocales, TLocalePrefixMode, TPathnames, TDomains>;
}

function isZodObject(value: unknown): value is z.ZodObject<any> {
	return typeof value === "object" && value !== null && "safeParse" in value && "parse" in value;
}

function isSchemaRecord(value: unknown): value is Record<string, z.ZodTypeAny> {
	return typeof value === "object" && value !== null && !("shape" in value) && !isZodObject(value);
}
function getSchemaForLocale<T extends SchemaType>(schema: T, shared?: unknown): T {
	if (!shared) return schema;

	if (isZodObject(schema)) {
		return schema.partial() as unknown as T; // Make all fields optional
	} else if (isSchemaRecord(schema)) {
		const partial: Record<string, z.ZodTypeAny> = {};
		for (const key in schema) {
			const validator = schema[key];
			if (validator) {
				partial[key] = validator.optional();
			} else {
				partial[key] = z.any().optional();
			}
		}
		return partial as T;
	}

	throw new DefaultsError("Invalid schema type", "unknown");
}

function mergeLocaleDataWithShared<TLocales extends Locales, TSchema extends SchemaType, TShared extends unknown>(
	localeData: LocaleMap<TLocales, TSchema, TShared>,
	shared?: TShared,
): Record<TLocales[number], MergeShared<TSchema, TShared>> {
	const merged = {} as Record<TLocales[number], MergeShared<TSchema, TShared>>;

	for (const locale of Object.keys(localeData) as Array<TLocales[number]>) {
		merged[locale] = {
			...localeData[locale as keyof typeof localeData],
			...(shared || {}),
		} as unknown as MergeShared<TSchema, TShared>;
	}

	return merged;
}
