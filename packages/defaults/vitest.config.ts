import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["tests/**/*.test.{tsx,ts}"],
		environment: "jsdom", // <-- crucial for React testing
		globals: true, // optional, if you want vitest globals like 'describe' etc.
		typecheck: {
			tsconfig: "./tsconfig.json", // Ensure this points to your tsconfig
		},
	},
	plugins: [react()],
});
