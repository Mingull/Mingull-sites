import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
config({ path: "../../.env" });

export default defineConfig({
	out: "./src/db/migrations",
	schema: "./src/db/schemas",
	dialect: "mysql",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});
