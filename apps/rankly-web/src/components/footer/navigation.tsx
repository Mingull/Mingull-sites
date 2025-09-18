"use client";
import { GitHubIcon, MingullIcon } from "@mingull/icons";
import { useTranslations } from "next-intl";
import { Navigation } from "./type";

export const useNavigation = (): Navigation => {
	const t = useTranslations();

	return {
		title: "Mingull",
		icon: MingullIcon,
		orientation: "vertical",
		groups: [
			{
				header: "",
				footer: "",
				orientation: "horizontal",
				items: [
					{
						label: t("nav.features"),
						href: "/features",
					},
					{
						label: t("nav.pricing"),
						href: "/pricing",
					},
				],
			},
			{
				orientation: "horizontal",
				header: (year) => <>&copy; {year} Mingull</>,
				footer: (
					<>
						{t("footer.builtBy")} <span className="font-bold">Mingull</span>
					</>
				),
				muted: true,
				items: [
					{
						label: "GitHub",
						href: "https://github.com/gebruikersnaam",
						description: "View my open source work",
						icon: GitHubIcon,
						external: true,
						iconOnly: true,
					},
				],
			},
		],
	};
};
