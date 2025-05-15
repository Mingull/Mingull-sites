import { createMiddleware } from "@mingull/api";
import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export const withRateLimit = createMiddleware<{ ratelimit: boolean }>((handler) => {
	return async (req, ctx) => {
		const forwarded = req.headers.get("x-forwarded-for") ?? "";
		const ip = forwarded.split(",")[0]?.trim() || "unknown";
		const userAgent = req.headers.get("user-agent") || "unknown";
		const windowSeconds = 60; // 1 minute
		const maxRequests = 100;

		const key = `ratelimit:${ip}`;
		const tx = redis.multi();

		tx.incr(key);
		tx.ttl(key);

		const res = await tx.exec();

		// Ensure the transaction succeeded and returned expected results
		if (!res || res.length < 2 || !res[0] || !res[1]) {
			return new NextResponse("Rate limit check failed", { status: 500 });
		}

		const [incrResult, ttlResult] = res;
		const count = (incrResult?.[1] ?? 0) as number;
		let ttl = (ttlResult?.[1] ?? -1) as number;

		if (ttl === -1) {
			await redis.expire(key, windowSeconds);
			ttl = windowSeconds;
		}

		if (count > maxRequests) {
			return new NextResponse("Too Many Requests", {
				status: 429,
				headers: {
					"Retry-After": `${ttl}`,
					"X-RateLimit-Limit": `${maxRequests}`,
					"X-RateLimit-Remaining": `0`,
					"X-RateLimit-Reset": `${ttl}`,
				},
			});
		}

		// Optional: expose info to context
		ctx.ratelimit = true;
		return handler(req, ctx);
	};
});
