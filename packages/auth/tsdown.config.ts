import { defineConfig } from "tsdown";

export default defineConfig({
	clean: true,
	dts: false,
	entry: ["./src/**/*.ts"],
	sourcemap: false,
	minify: false,
	target: "esnext",
	outDir: "dist",
	treeshake: true,
	shims: true,
	// attw: true,
	unbundle: true, // 👈 disables bundling
	skipNodeModulesBundle: false, // 👈 disables chunking
});
