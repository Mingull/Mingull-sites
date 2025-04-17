import { createMiddleware } from ".";

export const withLogger = createMiddleware((handler) => {
	return async (req, ctx) => {
		console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
		return handler(req, ctx);
	};
});
