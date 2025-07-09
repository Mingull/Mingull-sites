"use client";
import { DiscordIcon, GitHubIcon, MingullIcon } from "@mingull/icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Navigation } from "./type";

export const useNavigation = (): Navigation => {
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
						label: "Home",
						href: "/",
					},
					{
						label: "Projects",
						href: "/projects",
					},
					{
						label: "Posts",
						href: "/posts",
					},
					{
						label: "Contact",
						href: "/contact",
					},
				],
			},
			{
				orientation: "horizontal",
				header: (year) => <>&copy; {year} Mingull</>,
				footer: (
					<>
						Built by <span className="font-bold">Mingull</span>
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
					{
						label: "LinkedIn",
						href: "https://linkedin.com/in/gebruikersnaam",
						description: "Connect with me on LinkedIn",
						icon: LinkedInLogoIcon,
						external: true,
						iconOnly: true,
					},
					{
						label: "Discord",
						href: "https://discord.gg/jouwserver",
						description: "Join my Discord community",
						icon: DiscordIcon,
						external: true,
						iconOnly: true,
					},
				],
			},
		],
	};
};
