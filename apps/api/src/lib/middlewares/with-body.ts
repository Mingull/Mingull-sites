import { createMiddleware } from "@mingull/api";

export const withBody = createMiddleware((handler) => async (req, ctx) => {
	return handler(req, ctx);
});
