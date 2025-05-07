import { withRateLimit } from "@/lib/middlewares/with-ratelimit";

export const GET = withRateLimit(async (req, ctx) => {
	return new Response("Hello World", { status: 200 });
});
