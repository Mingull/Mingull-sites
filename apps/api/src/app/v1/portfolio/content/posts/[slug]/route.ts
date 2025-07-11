import { withRateLimit } from "@/lib/middlewares/with-ratelimit";
import { getPostBySlug } from "@/lib/posts";
import { createErrorResponse, createSuccessResponse, getHttpCode, getStatus } from "@mingull/api";
import { env } from "@mingull/env/next/server";
import { attempt } from "@mingull/exceptify";
import { NextResponse } from "next/server";

export const GET = withRateLimit<{ params: { slug: string }; searchParams: { locale?: string } }>(async (req, ctx) => {
	const { locale } = await ctx.searchParams;
	const { slug } = await ctx.params;

	const { data, error } = await attempt(() => getPostBySlug({ locale, slug }));

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
			data: {
				...data,
				metadata: {
					...data?.metadata,
					image: data?.metadata?.image ? `${env.BASE_API}${data.metadata.image}` : null,
				},
			},
		}),
		{
			status: getHttpCode("Ok"),
			statusText: getStatus("Ok"),
		},
	);
});
