import { getPackageManager } from "@/utils/get-package-manager.js";
import { logo } from "@/utils/logo.js";
import { selectInput, textInput } from "@/utils/prompts.js";
import { intro, log, outro, spinner } from "@clack/prompts";
import { Prettify } from "@mingull/lib";
import { Command } from "commander";
import fs from "fs/promises";
import path from "path";
import { z } from "zod";

export const initOptionsSchema = z.object({
	manager: z.enum(["npm", "yarn", "pnpm", "bun"]),
	cwd: z.string(),
	skipPrompts: z.boolean().optional(),
	force: z.boolean().optional(),
	name: z.string(),
});

export const init = new Command()
	.name("init")
	.description("Initialize a monorepo")
	.argument("[name]", "Name of the monorepo")
	.option("-m, --manager <manager>", "Package manager to use (npm, yarn, pnpm, bun)")
	.option("-c, --cwd <cwd>", "Working directory")
	.option("-y, --yes", "Skip prompts and use defaults", false)
	.option("-f, --force", "Force initialization even if directory is not empty", false)
	.action(async (args, opts: Prettify<Omit<z.infer<typeof initOptionsSchema>, "skipPrompts"> & { yes: boolean }>) => {
		intro("Monoger CLI - Initialize a monorepo");
		// log.message(await logo());

		let { manager, name, yes: skipPrompts, force } = opts;

		// Collect missing fields unless --yes
		if (!skipPrompts) {
			manager =
				manager ??
				(await selectInput({
					message: "Select a package manager",
					options: [
						{ value: "npm", label: "npm" },
						{ value: "yarn", label: "yarn" },
						{ value: "pnpm", label: "pnpm" },
						{ value: "bun", label: "bun" },
					],
					initialValue: await getPackageManager(path.resolve(opts.cwd ?? process.cwd())),
				}));
			name = name ?? (await textInput({ message: "Project name", defaultValue: "my-monorepo" }));
		}

		// Validate config
		const parsed = initOptionsSchema.safeParse({
			manager: manager?.toLowerCase(),
			cwd: path.resolve(opts.cwd ?? process.cwd()),
			name,
			skipPrompts,
			force,
		});

		if (!parsed.success) {
			for (const [field, messages] of Object.entries(parsed.error.flatten().fieldErrors)) {
				log.error(`${field}: ${messages?.join(", ")}`);
			}
			outro("Failed to initialize monorepo.");
			return;
		}

		const config = parsed.data;
		const configPath = path.join(config.cwd, "monoger.config.json");
		const s = spinner();

		s.start("Creating monorepo configuration...");

		try {
			await fs.mkdir(config.cwd, { recursive: true });
			await fs.writeFile(
				configPath,
				JSON.stringify(
					{
						$schema: "https://your-schema-host/schema/monoger.config.schema.json",
						name: config.name,
						manager: config.manager,
					},
					null,
					2,
				),
			);

			s.stop("Monorepo configuration created.");
			log.success(`Created monoger.config.json at ${configPath}`);
			outro("Monorepo initialized successfully!");
		} catch (err) {
			s.stop("Failed to create monorepo configuration.");
			log.error(`Error: ${(err as Error).message}`);
			outro("Failed to initialize monorepo.");
		}
	});
