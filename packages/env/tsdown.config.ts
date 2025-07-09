import { defineConfig } from "tsdown";

export default defineConfig({
	clean: false,
	dts: true,
	entry: ["./src/**/*.ts"],
	sourcemap: false,
	minify: false,
	outDir: "dist",
	treeshake: true,
	shims: true,
	unbundle: true, // 👈 disables bundling
	skipNodeModulesBundle: true, // 👈 disables chunking
	tsconfig: "tsconfig.json",
});
