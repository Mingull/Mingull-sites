"use client";
import { GitHubIcon, MingullIcon } from "@mingull/icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
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
						label: t("nav.projects.title"),
						href: "/projects",
					},
					{
						label: t("nav.posts.title"),
						href: "/posts",
					},
					{
						label: t("nav.about.title"),
						href: "/about",
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
						href: "https://github.com/mingull",
						description: "View my open source work",
						icon: GitHubIcon,
						external: true,
						iconOnly: true,
					},
					{
						label: "LinkedIn",
						href: "https://linkedin.com/in/niels-plug",
						description: "Connect with me on LinkedIn",
						icon: LinkedInLogoIcon,
						external: true,
						iconOnly: true,
					},
				],
			},
		],
	};
};
