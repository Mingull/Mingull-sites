"use client";
import { createFlexibleContext } from "@mingull/ui/contexts";
import { ReactNode, useState } from "react";
import { Defaults, SchemaType, Locales } from "~/react/types.ts";
import { DomainsConfig, LocalePrefixMode, Pathnames } from "next-intl/routing";

type DefaultsContext<
	TSchema extends SchemaType,
	TShared extends unknown,
	TLocales extends Locales,
	TLocalePrefixMode extends LocalePrefixMode = "always",
	TPathnames extends Pathnames<TLocales> = never,
	TDomains extends DomainsConfig<TLocales> = never,
> = {
	defaults: Defaults<TSchema, TShared, TLocales, TLocalePrefixMode, TPathnames, TDomains>;
};

const createDefaultsProvider = <
	const TSchema extends SchemaType,
	const TShared extends unknown,
	const TLocales extends Locales,
	const TLocalePrefixMode extends LocalePrefixMode = "always",
	const TPathnames extends Pathnames<TLocales> = never,
	const TDomains extends DomainsConfig<TLocales> = never,
>() => {
	const { Provider, useFlexibleContext } =
		createFlexibleContext<DefaultsContext<TSchema, TShared, TLocales, TLocalePrefixMode, TPathnames, TDomains>>();

	const useDefaults = () =>
		useFlexibleContext({
			errorMessage: "useDefaults must be used within a DefaultsProvider",
			onError: console.log,
		});

	const DefaultsProvider = ({
		defaults,
		children,
	}: {
		children: ReactNode;
		defaults: DefaultsContext<TSchema, TShared, TLocales, TLocalePrefixMode, TPathnames, TDomains>["defaults"];
	}) => {
		return <Provider value={{ defaults }}>{children}</Provider>;
	};

	return {
		DefaultsProvider,
		useDefaults,
	};
};

export const { DefaultsProvider, useDefaults } = createDefaultsProvider();
