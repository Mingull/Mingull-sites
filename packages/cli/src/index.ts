#!/usr/bin/env node
import { Command } from "commander";
import packageJson from "../package.json" with { type: "json" };
import { init } from "./commands/init.js";
import { generate } from "./commands/generate/index.js";

async function main() {
	const program = new Command()
		.name("Minager")
		.description("A cli for managing monorepos with packages and apps created with @Mingull")
		.version(packageJson.version || "1.0.0", "-v, --version", "display the version number");

	program.addCommand(init).addCommand(generate);
	// .addCommand(add).addCommand(diff).addCommand(migrate).addCommand(info).addCommand(build);

	program.parse();
}

main();
