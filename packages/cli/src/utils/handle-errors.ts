import { highlighter } from "@/utils/highlighter.js";
import { log } from "@clack/prompts";
import { z } from "zod";

export function handleError(error: unknown): never {
	log.error(
		"Something went wrong. Please check the error below for more details.\nIf the problem persists, please open an issue on GitHub.",
	);

	if (typeof error === "string") {
		log.error(error);
	} else if (error instanceof z.ZodError) {
		log.error("Validation failed:");
		for (const [key, value] of Object.entries(error.flatten().fieldErrors)) {
			log.error(`- ${highlighter.info(key)}: ${value}`);
		}
	} else if (error instanceof Error) {
		log.error(error.message);
	} else {
		log.error(`Unknown error: ${JSON.stringify(error)}`);
	}

	process.exit(1);
}
