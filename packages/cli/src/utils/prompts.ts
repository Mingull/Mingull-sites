import { cancel, isCancel, select, SelectOptions, text, TextOptions } from "@clack/prompts";

export const textInput = async (opts: TextOptions): Promise<string> => {
	const result = await text({ ...opts });
	if (isCancel(result)) {
		cancel("Operation cancelled.");
		process.exit(0);
	}
	return result;
};

export const selectInput = async <T = unknown>(opts: SelectOptions<T>): Promise<T> => {
	const result = await select({ ...opts });
	if (isCancel(result)) {
		cancel("Operation cancelled.");
		process.exit(0);
	}
	return result;
};
