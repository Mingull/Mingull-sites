import { DiscordIcon, GitHubIcon } from "@mingull/icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BookUserIcon, CompassIcon, Globe2Icon } from "lucide-react";
import { Navigation } from "./type";

export const navigation: Navigation = {
	groups: [
		{
			label: "Explore",
			icon: CompassIcon,
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
			label: "Social",
			icon: Globe2Icon,
			items: [
				{
					label: "GitHub",
					href: "https://github.com/gebruikersnaam",
					description: "View my open source work",
					icon: GitHubIcon,
					external: true,
				},
				{
					label: "LinkedIn",
					href: "https://linkedin.com/in/gebruikersnaam",
					description: "Connect with me on LinkedIn",
					icon: LinkedInLogoIcon,
					external: true,
				},
				{
					label: "Discord",
					href: "https://discord.gg/jouwserver",
					description: "Join my Discord community",
					icon: DiscordIcon,
					external: true,
				},
			],
		},
		{
			label: "Contact",
			icon: BookUserIcon,
			items: [
				{
					label: "example@example.com",
					href: "mailto:example@example.com",
				},
			],
		},
	],
};
