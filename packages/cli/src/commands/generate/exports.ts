import { handleError } from "@/utils/handle-errors.js";
import { intro, log, outro, spinner, tasks } from "@clack/prompts";
import { Command } from "commander";
import fg from "fast-glob";
import fs from "fs/promises";
import micromatch from "micromatch";
import path from "path";
import prettier from "prettier";
import { z } from "zod";

export const generateExportsSchema = z.object({
	cwd: z.string(),
	dir: z.string(),
	output: z.string(),
	extension: z.enum(["none", "ts", "js", "tsx", "jsx"]),
	dry: z.boolean(),
	recursive: z.boolean(),
	format: z.enum(["star", "named", "default"]),
	prettify: z.boolean(),
	ignore: z.array(z.string()),
});

export const exports = new Command()
	.name("exports")
	.description("Generate an index file that bundles all file exports in the current directory")
	.alias("e")
	.option("-c, --cwd <cwd>", "Working directory")
	.option("-d, --dir <dir>", "Directory to scan for files, defaults to current directory", ".")
	.option("-o, --output <output>", "Output file", "index.ts")
	.option("-e, --extension <extension>", "File extension to include in the export", "none")
	.option("-D, --dry", "Print exports to console without writing", false)
	.option("-r, --recursive", "Include subdirectories", false)
	.option("-f, --format <format>", "Export format: 'star', 'named' or 'default'", "star")
	.option("-p, --prettify", "Run Prettier on the output file", false)
	.option("-i, --ignore <patterns...>", "Glob or folder patterns to ignore (e.g. node_modules __tests__ mocks)", [])
	.action(async (opts: z.infer<typeof generateExportsSchema>) => {
		intro("Minager - Generate exports");
		const s = spinner();
		s.start("Validating options...");
		const parsed = generateExportsSchema.safeParse({
			cwd: path.resolve(opts.cwd ?? process.cwd()),
			dir: sanitizePath(opts.dir),
			output: sanitizePath(opts.output),
			extension: opts.extension,
			dry: opts.dry,
			recursive: opts.recursive,
			format: opts.format,
			prettify: opts.prettify,
			ignore: opts.ignore,
		});

		if (!parsed.success) {
			handleError(parsed.error);
		}

		const { cwd, dir, output, extension, dry, recursive, format, prettify, ignore } = parsed.data;
		s.stop("Options validated successfully");

		await tasks([
			{
				title: `Generating exports in ${output}`,
				task: async () => {
					await generateExports({ cwd, dir, output, extension, dry, recursive, format, prettify, ignore });

					return dry ? "Exports printed to console." : `Exports generated in ${output}`;
				},
			},
		]);

		outro(dry ? "Dry run complete." : `Exports written to ${output}`);
	});

type GenerateOptions = z.infer<typeof generateExportsSchema>;

const sanitizePath = (input: string) => input.replace(/^\.?[\\/]+/, "").replace(/\\/g, "/");

const generateExports = async ({
	cwd,
	dir,
	output,
	extension,
	dry,
	recursive,
	format,
	prettify,
	ignore,
}: GenerateOptions): Promise<string[]> => {
	try {
		const supportedExts = ["ts", "tsx", "js", "jsx"];

		const normalizedIgnore = ignore.map((p) => p.replace(/\\/g, "/"));

		// Normalize cwd and dir once at the start
		const absCwd = path.resolve(cwd);
		const sanitizedDir = sanitizePath(dir);

		// Find all directories matching `dir` pattern relative to cwd
		const matchedDirs = await fg(sanitizedDir, {
			cwd: absCwd,
			onlyDirectories: true,
			absolute: true,
			unique: true,
			dot: false,
		});

		if (matchedDirs.length === 0) {
			log.message(`No directories matched by pattern: ${dir}`);
			return [];
		}

		const shouldIgnore = (filePath: string) => {
			// micromatch expects forward slashes
			const normalized = filePath.replace(/\\/g, "/");
			return micromatch.isMatch(normalized, normalizedIgnore);
		};

		const isValidExtension = (fileName: string) => {
			const ext = path.extname(fileName).slice(1);
			return extension === "none" ? supportedExts.includes(ext) : ext === extension;
		};

		const allGeneratedFiles: string[] = [];

		// Compute absolute output path *outside* the loop for performance & clarity
		const outputFileName = path.basename(output);
		const outputIsGlob = output.includes("*");

		for (const dirPath of matchedDirs) {
			const files: string[] = [];

			const walk = async (folder: string) => {
				const entries = await fs.readdir(folder, { withFileTypes: true });
				for (const entry of entries) {
					const fullPath = path.join(folder, entry.name);
					const relPath = path.relative(dirPath, fullPath).replace(/\\/g, "/");

					if (shouldIgnore(relPath)) continue;

					if (entry.isDirectory()) {
						if (recursive) await walk(fullPath);
					} else if (
						entry.isFile() &&
						isValidExtension(entry.name) &&
						!entry.name.endsWith(".d.ts") &&
						!entry.name.startsWith("index.")
					) {
						files.push(relPath);
					}
				}
			};

			await walk(dirPath);

			if (files.length === 0) {
				log.message(`No files found to export in folder: ${path.relative(absCwd, dirPath)}`);
				continue;
			}

			const getExportName = (file: string) => {
				const noExt = file.slice(0, -path.extname(file).length);
				const parts = noExt.split("/").filter(Boolean);
				return parts.join("_");
			};

			const exportLines = files.map((file) => {
				const withoutExt = file.slice(0, -path.extname(file).length);
				const importPath = extension === "none" ? withoutExt : file;
				const name = getExportName(file);

				if (format === "default") {
					return `export { default as ${name} } from "./${importPath}";`;
				}
				if (format === "named") {
					return `export { ${name} } from "./${importPath}";`;
				}
				// default to 'star'
				return `export * from "./${importPath}";`;
			});

			const outputPath = outputIsGlob ? path.join(dirPath, outputFileName) : path.join(absCwd, output);

			if (dry) {
				log.message(`Exports for folder: ${outputPath}`);
				exportLines.slice(0, 15).forEach((line, i) => log.message(`${i + 1}. ${line}`));
				if (exportLines.length > 15) {
					log.message(`... and ${exportLines.length - 15} more`);
				}
			} else {
				const content = exportLines.join("\n") + "\n";

				const formatted =
					prettify ?
						await prettier.format(content, {
							filepath: outputPath,
							semi: true,
							singleQuote: true,
							trailingComma: "all",
							arrowParens: "avoid",
						})
					:	content;

				await fs.mkdir(path.dirname(outputPath), { recursive: true });
				await fs.writeFile(outputPath, formatted, "utf-8");
			}

			allGeneratedFiles.push(outputPath);
		}

		return allGeneratedFiles;
	} catch (error) {
		handleError(error);
	}
};
