import { env } from "@/env";
import { withRateLimit } from "@/lib/middlewares/with-ratelimit";
import { getProjects } from "@/lib/projects";
import { createErrorResponse, createSuccessResponse, getHttpCode, getStatus } from "@mingull/api";
import { attempt } from "@mingull/exceptify";
import { NextResponse } from "next/server";

export const GET = withRateLimit<{ searchParams: { locale: string; limit?: string } }>(async (req, ctx) => {
	const { locale, limit } = await ctx.searchParams;
	const { data, error } = await attempt(() => getProjects({ locale, limit: limit ? parseInt(limit) : undefined }));

	if (error) {
		return NextResponse.json(
			createErrorResponse({
				code: "InternalServerError",
				message: "Failed to fetch projects",
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
			data: data?.map((project) => ({
				...project,
				image: project.image ? `${env.BASE_API}${project.image}` : null,
			})),
		}),
		{
			status: getHttpCode("Ok"),
			statusText: getStatus("Ok"),
		},
	);
});
