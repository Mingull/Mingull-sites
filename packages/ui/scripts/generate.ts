import fs from "fs";
import path from "path";

const __dirname = new URL("../", import.meta.url).pathname.replace("/", "");
const hooksDir = path.join(__dirname, "src", "hooks");
const componentsDir = path.join(__dirname, "src", "components");

const generateExports = (dir: string, outputFile: string) => {
	console.log({ dir, outputFile });
	const files = fs.readdirSync(dir);
	const exportLines: string[] = [];

	files.forEach((file) => {
		if ((file.endsWith(".ts") || file.endsWith(".tsx")) && !file.endsWith(".d.ts") && !file.startsWith("index.")) {
			exportLines.push(`export * from "./${file}";`);
		}
	});

	fs.writeFileSync(outputFile, exportLines.join("\n"), "utf-8");
};

const generate = () => {
	// Generate component exports
	generateExports(componentsDir, path.join(__dirname, "src", "components", "index.ts"));

	// Generate hook exports
	generateExports(hooksDir, path.join(__dirname, "src", "hooks", "index.ts"));

	console.log("Exports generated successfully!");
};

generate();
