"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import ReactCountryFlag from "react-country-flag";
import { Button } from "@mingull/ui/comps/button";

export default function LanguageSelector({ size }: { size?: "default" | "sm" }) {
	const locale = useLocale();
	const pathname = usePathname();
	return (
		<Button size={size ?? "sm"} variant="ghost" asChild>
			<Link href={pathname} locale={locale === "en" ? "nl" : "en"}>
				<ReactCountryFlag
					countryCode={locale === "en" ? "GB" : "NL"}
					className="h-6 w-6 md:h-4 md:w-4"
					svg
					style={{ width: size === "sm" ? "1rem" : "1.5rem", height: size === "sm" ? "1rem" : "1.5rem" }}
				/>
			</Link>
		</Button>
	);
}
