import { createMiddleware } from "@mingull/api";
import { auth } from "@mingull/auth";
import { NextResponse } from "next/server";

export const withCors = createMiddleware((handler) => async (req, ctx) => {
	const origin = req.headers.get("origin") || "";
	const isPreflight = req.method === "OPTIONS";

	// Resolve trusted origins
	const trusted = auth.options.trustedOrigins;
	const allowedOrigins =
		Array.isArray(trusted) ? trusted
		: typeof trusted === "function" ? await trusted(req)
		: [];

	const isAllowedOrigin = allowedOrigins.includes(origin);

	const allowHeaders = {
		"Access-Control-Allow-Origin": origin,
		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type, Authorization",
		"Access-Control-Allow-Credentials": "true",
	};

	// Handle preflight
	if (isPreflight) {
		return new NextResponse(null, {
			status: 204,
			headers: isAllowedOrigin ? allowHeaders : {},
		});
	}

	const res = await handler(req, ctx);

	// Only set CORS headers if origin is allowed
	if (isAllowedOrigin) {
		for (const [key, value] of Object.entries(allowHeaders)) {
			res.headers.set(key, value);
		}
	}

	return res;
});
