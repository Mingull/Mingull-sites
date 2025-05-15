import { defineConfig } from "tsup";

export default defineConfig({
	clean: true,
	dts: true,
	entry: ["src/**/*.ts"],
	format: ["esm"],
	sourcemap: false,
	minify: false,
	target: "esnext",
	outDir: "dist",
	treeshake: true,
	splitting: false,
});
