import { createMiddleware } from "@mingull/middlewarity";

export const withRateLimit = createMiddleware<{ ratelimit: number }>((handler) => {
	return async (req, ctx) => {
		ctx.ratelimit = 100;
		return handler(req, ctx);
	};
});
