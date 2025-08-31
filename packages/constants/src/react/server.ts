import "server-only";
import { DomainsConfig, LocalePrefixMode, Pathnames } from "next-intl/routing";
import { Constants, Locales, SchemaType } from "./internal/types.ts";
import { getLocale } from "next-intl/server";

export const createGetConstants = <
	const TSchema extends SchemaType,
	const TShared extends unknown,
	const TLocales extends Locales,
	const TPrefix extends LocalePrefixMode = "always",
	const TPathnames extends Pathnames<TLocales> = never,
	const TDomains extends DomainsConfig<TLocales> = never,
>(
	constants: Constants<TSchema, TShared, TLocales, TPrefix, TPathnames, TDomains>,
) => {
	return async () => {
		const locale = (await getLocale()) as TLocales[number];

		const { defaultLocale, locales, routing } = constants;

		const currentLocale = routing?.locales.includes(locale) || locales?.includes(locale as TLocales[number]) ? locale : defaultLocale;

		const value = constants[currentLocale as TLocales[number]];

		return value;
	};
};
