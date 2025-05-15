import { withRateLimit } from "@/lib/middlewares/with-ratelimit";
import { getProjectBySlug } from "@/lib/projects";
import { createErrorResponse, createSuccessResponse, getHttpCode, getStatus } from "@mingull/api";
import { attempt } from "@mingull/exceptify";
import { NextResponse } from "next/server";

export const GET = withRateLimit<{ params: { slug: string }; searchParams: { locale?: string } }>(async (req, ctx) => {
    const { locale } = await ctx.searchParams;
    const { slug } = await ctx.params;

    const { data, error } = await attempt(() => getProjectBySlug({ locale, slug }));
    
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
