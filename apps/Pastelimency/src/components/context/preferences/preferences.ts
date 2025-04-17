import { InitialPreference, Preference } from "./types";

// Function to create preferences from the initial structure
export const createPreference = <T extends string = string>(preference: InitialPreference<T>): Preference<T> =>
	({
		...preference,
		value: preference.defaultValue,
	}) as Preference<T>;

const pasteVisibility = createPreference({
	id: "default_paste_visibility",
	name: "Default Paste Visibility",
	type: "list",
	options: ["private", "unlisted", "public"],
	defaultValue: "private",
});
const pasteLanguage = createPreference({
	id: "default_paste_language",
	name: "Default Paste Language",
	type: "list",
	options: ["plaintext", "javascript", "python", "java", "csharp", "cpp"],
	defaultValue: "plaintext",
});
const showLineNumbers = createPreference({
	id: "show_line_numbers",
	name: "Show Line Numbers",
	type: "boolean",
	defaultValue: true,
});

export const defaultPreferences = [pasteVisibility, pasteLanguage, showLineNumbers] as const satisfies Preference[];
