"use server";
import { getLocale } from "next-intl/server";
import { DefaultsError } from "~/utils/default-error.ts";

export const getDefaults = async <TSchema, TShared>(
	localeData: Record<string, any>,
	defaultLocale?: string,
	routing?: any,
	shared?: TShared,
	onError?: (error: DefaultsError) => void,
) => {
	try {
		if (typeof window !== "undefined")
			throw new DefaultsError("getDefaults cannot be called in the client-side code", ["client-side"]);

		const locale = await getLocale();

		const data =
			localeData[locale as keyof typeof localeData] ??
			(defaultLocale ? localeData[defaultLocale] : localeData[routing?.defaultLocale as keyof typeof localeData]);

		if (!data && routing?.defaultLocale) {
			throw new DefaultsError(
				`Missing fallback defaults for routing.defaultLocale "${routing.defaultLocale}"`,
				"locales",
			);
		}

		return {
			...data,
			...(shared ?? {}),
		};
	} catch (error) {
		onError?.(
			error instanceof DefaultsError ? error : (
				new DefaultsError("An unknown error occurred while getting defaults", "unknown")
			),
		);
		throw error; // Re-throw to ensure server-side rendering fails if needed
	}
};
