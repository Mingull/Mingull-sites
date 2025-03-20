import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./src/lib/db/migrations",
	schema: "./src/lib/db/schemas",
	dialect: "mysql",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});
