import { defineConfig } from "tsdown";

export default defineConfig({
	clean: true,
	dts: true,
	entry: ["./src/react/index.{ts,tsx}"],
	sourcemap: false,
	minify: false,
	outDir: "dist",
	treeshake: true,
	shims: true,
	unbundle: true, // 👈 disables bundling
	skipNodeModulesBundle: true, // 👈 disables chunking
	tsconfig: "tsconfig.json",
	external: ["@mingull/ui", "@mingull/ui/contexts"],
});
