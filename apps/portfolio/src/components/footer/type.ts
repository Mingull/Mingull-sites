import { Icon } from "@mingull/ui/comps/icons/icon";
import { LucideIcon } from "lucide-react";

export type Navigation = {
	/**
	 * A list of navigation groups to be displayed, typically organized by category.
	 */
	groups?: NavigationGroup[];
};

export type NavigationGroup = {
	/**
	 * The display label for the group (e.g., "Explore").
	 */
	label: string;
	/**
	 * Optional icon to represent the group, from the Lucide icon set.
	 */
	icon?: LucideIcon | Icon;
	/**
	 * List of navigation items within this group.
	 */
	items: NavigationItem[];
};

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
	 * Optional badge label to highlight the item (e.g., "New", "Beta").
	 */
	badge?: string;
	/**
	 * Whether the navigation item is disabled.
	 * Disabled items are typically styled differently and not clickable.
	 */
	disabled?: boolean;
};
