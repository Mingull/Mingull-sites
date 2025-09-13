"use client";

import { createFlexibleContext } from "@mingull/ui/contexts";
import { useLocale } from "next-intl";
import { DomainsConfig, LocalePrefixMode, Pathnames } from "next-intl/routing";
import { ReactNode } from "react";
import { Constants, Locales, MergeShared, SchemaType } from "~/react/internal/types.ts";

type ConstantsContext<TSchema extends SchemaType, TShared extends unknown> = MergeShared<TSchema, TShared>;

export function createClientConstants<
	const TSchema extends SchemaType,
	const TShared extends unknown,
	const TLocales extends Locales,
	const TPrefix extends LocalePrefixMode = "always",
	const TPathnames extends Pathnames<TLocales> = never,
	const TDomains extends DomainsConfig<TLocales> = never,
>(constants: Constants<TSchema, TShared, TLocales, TPrefix, TPathnames, TDomains>) {
	const { Provider, useFlexibleContext } = createFlexibleContext<ConstantsContext<TSchema, TShared>>();

	const useConstants = () =>
		useFlexibleContext({
			errorMessage: "useConstants must be used within a ConstantsProvider",
			onError: console.log,
		});

	const ConstantsProvider = ({ children }: { children: ReactNode }) => {
		const locale = useLocale();

		const { defaultLocale, locales, routing } = constants;

		const currentLocale = routing?.locales.includes(locale) || locales?.includes(locale as TLocales[number]) ? locale : defaultLocale;

		// 👇 Explicitly cast only the localized map part to avoid TS inference issues
		const localizedConstants = constants as Record<TLocales[number], ConstantsContext<TSchema, TShared>>;

		const value = localizedConstants[currentLocale as TLocales[number]];

		return <Provider value={value}>{children}</Provider>;
	};

	return {
		ConstantsProvider,
		useConstants,
	};
}
