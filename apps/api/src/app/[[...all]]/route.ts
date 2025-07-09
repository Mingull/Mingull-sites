import { withRateLimit } from "@/lib/middlewares/with-ratelimit";
import { createErrorResponse, getHttpCode, getStatus } from "@mingull/api";
import { NextRequest, NextResponse } from "next/server";

async function notFoundResponse(req: NextRequest) {
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
			headers: {
				"Content-Type": "application/json",
				"X-Status": getStatus("NotFound"),
				"Cache-Control": "no-store",
			},
		},
	);
}

export const GET = withRateLimit(notFoundResponse);
export const POST = withRateLimit(notFoundResponse);
export const PUT = withRateLimit(notFoundResponse);
export const DELETE = withRateLimit(notFoundResponse);
export const PATCH = withRateLimit(notFoundResponse);
export const OPTIONS = withRateLimit(notFoundResponse);
export const HEAD = withRateLimit(notFoundResponse);
