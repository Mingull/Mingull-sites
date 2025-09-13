import { defineConfig } from "tsdown";

export default defineConfig({
	clean: true,
	dts: true,
	entry: ["./src/components/*.{ts,tsx}", "./src/hooks/*.ts", "./src/contexts/*.ts"],
	sourcemap: false,
	watch: true,
	minify: false,
	target: "esnext",
	outDir: "dist",
	treeshake: true,
	shims: true,
	// attw: true,
	unbundle: true, // 👈 disables bundling
	skipNodeModulesBundle: true, // 👈 disables chunking
	external: ["@mingull/lib"],
});
