import { DiscordIcon } from "@mingull/ui/icons";
import { Navigation } from "./type";

export const navigation: Navigation = {
	groups: [
		{
			label: "Explore",
			items: [
				{
					label: "Item 1",
					href: "/item1",
				},
				{
					label: "Item 2",
					href: "/item2",
				},
			],
		},
		{
			label: "Social",
			items: [
				{
					label: "Discord",
					href: "https://discord.com",
					description: "Join our Discord community",
					icon: DiscordIcon,
				},
			],
		},
	],
};
