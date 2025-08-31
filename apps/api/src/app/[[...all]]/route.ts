import { withCors } from "@/lib/middlewares/with-cors";
import { withRateLimit } from "@/lib/middlewares/with-ratelimit";
import { createErrorResponse, getHttpCode, getStatus, Handler } from "@mingull/api";
import { NextResponse } from "next/server";

const notFoundResponse = withCors(async (req, ctx) => {
	return NextResponse.json(
		createErrorResponse({
			code: "NotFound",
			message: "The requested resource was not found.",
			details: {
				path: req.nextUrl.pathname,
				method: req.method,
				timestamp: new Date().toISOString(),
			},
		}),
		{
			status: getHttpCode("NotFound"),
			statusText: getStatus("NotFound"),
		},
	);
});

export const GET = withRateLimit(notFoundResponse);
export const POST = withRateLimit(notFoundResponse);
export const PUT = withRateLimit(notFoundResponse);
export const DELETE = withRateLimit(notFoundResponse);
export const PATCH = withRateLimit(notFoundResponse);
export const OPTIONS = withRateLimit(notFoundResponse);
export const HEAD = withRateLimit(notFoundResponse);
