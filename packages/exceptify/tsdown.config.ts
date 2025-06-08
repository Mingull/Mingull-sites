import { defineConfig } from "tsdown";

export default defineConfig({
	clean: true,
	dts: true,
	entry: ["./src/index.ts"],
	sourcemap: false,
	minify: false,
	outDir: "dist",
	treeshake: true,
	shims: true,
	unbundle: true, // 👈 disables bundling
	skipNodeModulesBundle: true, // 👈 disables chunking
});
