import { createMiddleware } from "../../../../../packages/library/src/middleware";

export const withBody = createMiddleware((handler) => async (req, ctx) => {
	return handler(req, ctx);
});
