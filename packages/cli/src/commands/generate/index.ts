import { Command } from "commander";
import { exports } from "./exports.js";
import { registry } from "./registry.js";

export const generate = new Command()
	.name("generate")
	.alias("g")
	.alias("gen")
	.description("Generate code, files, or configurations")
	.addCommand(exports)
	.addCommand(registry);
