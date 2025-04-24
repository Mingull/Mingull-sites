import { createMiddleware } from "@mingull/middlewarity";

export const withBody = createMiddleware((handler) => async (req, ctx) => {
	return handler(req, ctx);
});
