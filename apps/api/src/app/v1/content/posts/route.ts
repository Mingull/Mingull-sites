import { createErrorResponse, createSuccessResponse, getHttpCode, getStatus } from "@mingull/api";
import { withRateLimit } from "@/lib/middlewares/with-ratelimit";
import { getPosts } from "@/lib/posts";
import { attempt } from "@mingull/exceptify";
import { NextResponse } from "next/server";

export const GET = withRateLimit<{ searchParams: { locale?: string; limit?: string } }>(async (req, ctx) => {
	const { locale, limit } = await ctx.searchParams;

	const { data, error } = await attempt(() => getPosts({ locale, limit: limit ? parseInt(limit) : undefined }));

	if (error) {
		return NextResponse.json(
			createErrorResponse({
				code: "InternalServerError",
				message: "Failed to fetch posts",
				details: { error },
			}),
			{
				status: getHttpCode("InternalServerError"),
				statusText: getStatus("InternalServerError"),
			},
		);
	}

	return NextResponse.json(
		createSuccessResponse({
			code: "Ok",
			message: "Posts fetched successfully",
			data,
		}),
		{
			status: getHttpCode("Ok"),
			statusText: getStatus("Ok"),
		},
	);
});
