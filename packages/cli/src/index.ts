#!/usr/bin/env node
import { Command } from "commander";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const packageJson = require("../package.json");
import { init } from "./commands/init.js";

async function main() {
	const program = new Command()
		.name("monoger")
		.description("A cli for managing monorepos with packages and apps")
		.version(packageJson.version || "1.0.0", "-v, --version", "display the version number");

	program.addCommand(init);
	// .addCommand(add).addCommand(diff).addCommand(migrate).addCommand(info).addCommand(build);

	program.parse();
}

main();
