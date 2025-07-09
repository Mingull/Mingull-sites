import { defineConfig } from "tsdown";

export default defineConfig({
	clean: true,
	dts: false,
	entry: ["./src/index.ts"],
	sourcemap: false,
	minify: true,
	target: "esnext",
	outDir: "dist",
	treeshake: true,
	shims: true,
	skipNodeModulesBundle: true, // 👈 disables chunking
});
