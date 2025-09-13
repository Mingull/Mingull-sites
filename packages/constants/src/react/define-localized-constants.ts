import { DomainsConfig, LocalePrefixMode, Pathnames } from "next-intl/routing";
import { z } from "zod";
import type { Constants, LocaleMap, Locales, Options, SchemaType } from "~/react/internal/types.ts";
import { ConstantsError } from "~/exceptions/constants-error.ts";
import { getSchemaForLocale, getSharedSchema, isZodObject, mergeLocaleDataWithShared } from "./internal/_utils.ts";
/**
 * Defines constants for a set of locales using a Zod schema.
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
export function defineConstants<
	const TSchema extends SchemaType,
	const TShared extends unknown,
	const TLocales extends Locales,
	const TLocalePrefixMode extends LocalePrefixMode = "always",
	const TPathnames extends Pathnames<TLocales> = never,
	const TDomains extends DomainsConfig<TLocales> = never,
>(options: Options<TSchema, TShared, TLocales, TLocalePrefixMode, TPathnames, TDomains>): Constants<TSchema, TShared, TLocales, TLocalePrefixMode, TPathnames, TDomains> {
	const { schema, locales, defaultLocale, routing, shared, onError, ...rest } = options;
	const localeData: LocaleMap<TLocales, TSchema, TShared> = rest as unknown as LocaleMap<TLocales, TSchema, TShared>;

	try {
		if (!locales && !routing) throw new ConstantsError("Either 'locales' or 'routing' must be provided.", "locales");
		if (locales && routing) throw new ConstantsError("Cannot provide both 'locales' and 'routing'. Choose one.", "locales");
		if (locales && !defaultLocale) throw new ConstantsError("Default locale must be provided.", "locales");

		const schemaForLocale = getSchemaForLocale(schema, shared);

		const localeList = locales ?? routing?.locales;

		if (!localeList) {
			throw new ConstantsError("No locales provided to iterate over.", "locales");
		}
		for (const locale of localeList) {
			const data = localeData[locale as keyof typeof localeData];
			if (!data) {
				throw new ConstantsError(`Missing data for locale "${locale}"`, "locales-missing");
			}
			const result = isZodObject(schemaForLocale) ? schemaForLocale.safeParse(data) : z.object(schemaForLocale).safeParse(data);

			if (!result.success) {
				throw new ConstantsError(`Invalid data for locale "${locale}"`, "locales-validation", {
					context: { locale, validationError: JSON.parse(result.error.message) },
				});
			}
		}

		if (shared) {
			const sharedSchema = getSharedSchema(schema, Object.keys(shared));

			const sharedResult = isZodObject(sharedSchema) ? sharedSchema.safeParse(shared) : z.object(sharedSchema).safeParse(shared);

			if (!sharedResult.success) {
				throw new ConstantsError(`Invalid shared data: ${sharedResult.error.message}`, "shared-validation");
			}
		}
	} catch (error) {
		onError?.(error instanceof ConstantsError ? error : new ConstantsError("An unknown error occurred while creating defaults", "unknown"));
		throw error; // Re-throw to ensure server-side rendering fails if needed
	}

	return {
		locales,
		defaultLocale,
		routing,
		...mergeLocaleDataWithShared(localeData, shared),
	} as Constants<TSchema, TShared, TLocales, TLocalePrefixMode, TPathnames, TDomains>;
}
