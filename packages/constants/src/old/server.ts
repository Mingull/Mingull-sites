"use server";
import { getLocale } from "next-intl/server";
import { ConstantsError } from "~/exceptions/constants-error.ts";

export const getDefaults = async <TSchema, TShared>(localeData: Record<string, any>, defaultLocale?: string, routing?: any, shared?: TShared, onError?: (error: ConstantsError) => void) => {
	try {
		if (typeof window !== "undefined") throw new ConstantsError("getDefaults cannot be called in the client-side code", ["client-side"]);

		const locale = await getLocale();

		const data = localeData[locale as keyof typeof localeData] ?? (defaultLocale ? localeData[defaultLocale] : localeData[routing?.defaultLocale as keyof typeof localeData]);

		if (!data && routing?.defaultLocale) {
			throw new ConstantsError(`Missing fallback defaults for routing.defaultLocale "${routing.defaultLocale}"`, "locales");
		}

		return {
			...data,
			...(shared ?? {}),
		};
	} catch (error) {
		onError?.(error instanceof ConstantsError ? error : new ConstantsError("An unknown error occurred while getting defaults", "unknown"));
		throw error; // Re-throw to ensure server-side rendering fails if needed
	}
};
