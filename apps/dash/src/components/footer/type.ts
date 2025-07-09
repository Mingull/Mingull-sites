import { type Icon } from "@mingull/icons";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type Navigation = {
	/**
	 * A list of navigation groups to be displayed, typically organized by category.
	 */
	groups?: NavigationGroup[];
	/**
	 * Optional main title for the navigation section.
	 * Is mostly the main heading or title of the website.
	 */
	title?: string;
	/**
	 * Optional icon to represent the navigation section, from the Lucide icon set.
	 */
	icon?: LucideIcon | Icon;
	/**
	 * The orientation of the navigation.
	 * Determines whether items are displayed horizontally or vertically.
	 * @default "vertical"
	 */
	orientation: "horizontal" | "vertical";
};

export type NavigationGroup = {
	/**
	 * Optional icon to represent the group, from the Lucide icon set.
	 */
	icon?: LucideIcon | Icon;
	/**
	 * The orientation of the navigation group.
	 * Determines whether items are displayed horizontally or vertically.
	 * @default "vertical"
	 */
	orientation: "horizontal" | "vertical";
	/**
	 * List of navigation items within this group.
	 */
	items: NavigationItem[];
	/**
	 * Whether the group is visually muted (e.g., less prominent).
	 */
	muted?: boolean;
} & (
	| {
			/**
			 * The display label for the group (e.g., "Explore").
			 * This is used to categorize navigation items.
			 * It can be used to group related items together for better organization.
			 */
			label: string;
			header?: never;
			footer?: never;
	  }
	| {
			label?: never;
			/**
			 * A header component to display above the group items if orientation is vertical,
			 * else it will be placed horizontal before the group items.
			 *
			 * @note This will override the label if provided.
			 */
			header: ReactNode | (<T>(props?: T) => ReactNode);
			/**
			 * A footer component to display below the group items if orientation is vertical,
			 * else it will be placed horizontal after the group items.
			 */
			footer: ReactNode | (<T>(props?: T) => ReactNode);
	  }
);

export type NavigationItem = {
	/**
	 * The display label of the navigation item.
	 */
	label: string;
	/**
	 * The URL to navigate to when the item is clicked.
	 */
	href: string;
	/**
	 * Optional description for the navigation item.
	 * Used for accessibility, screen readers, or tooltips.
	 */
	description?: string;
	/**
	 * Indicates whether the link is external.
	 * If true, the link should open in a new tab (e.g., target="_blank").
	 */
	external?: boolean;
	/**
	 * Optional icon to display next to the item, from the Lucide icon set.
	 */
	icon?: LucideIcon | Icon;
	/**
	 * Whether the item is displayed as an icon only, without text.
	 * Useful for compact navigation designs.
	 */
	iconOnly?: boolean;
	/**
	 * Optional badge label to highlight the item (e.g., "New", "Beta").
	 */
	badge?: string;
	/**
	 * Whether the navigation item is disabled.
	 * Disabled items are typically styled differently and not clickable.
	 */
	disabled?: boolean;
};
