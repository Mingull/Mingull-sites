import { routing } from "@/i18n/routing";
import nlMessages from "../messages/nl.json";
import enMessages from "../messages/en.json";
import { constants } from "@/constants/localized";

declare module "next-intl" {
	interface AppConfig {
		Locale: (typeof routing.locales)[number];
		Messages: typeof nlMessages | typeof enMessages;
	}
}

declare module "@mingull/constants" {
	interface Register {
		Constants: typeof constants;
	}
}
