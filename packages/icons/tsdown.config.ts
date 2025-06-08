import { defineConfig } from "tsdown";

export default defineConfig({
	clean: true,
	dts: true,
	entry: ["./src/**/*.ts"],
	sourcemap: false,
	minify: false,
	target: "esnext",
	outDir: "dist",
	treeshake: true,
	shims: true,
	unbundle: true,
	skipNodeModulesBundle: true, // 👈 disables chunking
});
