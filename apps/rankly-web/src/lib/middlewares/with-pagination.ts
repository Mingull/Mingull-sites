import { createMiddleware } from "@mingull/api";

/**
 * Middleware to extract pagination parameters from the request URL.
 * Adds `pagination` object to the context with `offset` and `limit` properties.
 * - `limit`: Number of items per page (default: 10)
 * - `offset`: Page number (default: 0)
 * - `sort`: Sorting criteria (optional)
 */
export const withPagination = createMiddleware<{ pagination: { offset: number; limit: number; sort?: Record<string, "asc" | "desc"> | null } }>((handler) => async (req, ctx) => {
	const { searchParams } = req.nextUrl;

	const limit = Number(searchParams.get("limit")) || 10;
	const offset = Number(searchParams.get("offset")) || 0;

	const sort: Record<string, "asc" | "desc"> = {};
	searchParams.get("sort")?.split(",")
		.forEach((field) => {
			const [key, direction] = field.split(":", 2);
			if (!key) return;
			if (direction !== "asc" && direction !== "desc") return;
			sort[key] = direction as "asc" | "desc";
		});

	ctx.pagination = { offset, limit, sort };

	return handler(req, ctx);
});
