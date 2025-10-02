import { db } from "@/db";
import { servers } from "@/db/schemas/(main)/servers";
import { withAuth } from "@/lib/middlewares/with-auth";
import { newServerSchema } from "@/lib/schemas/server";
import { createErrorResponse, createSuccessResponse } from "@mingull/api";
import { NextResponse } from "next/server";
import z from "zod";

/**
 * List servers owned by the authenticated user.
 */
export const GET = withAuth(async (req, ctx) => {
	const servers = await db.query.servers.findMany({
		where: (servers, { eq }) => eq(servers.ownerId, ctx.user.id),
	});
	return NextResponse.json(createSuccessResponse({ code: "Ok", message: "Hello, authenticated user!", data: servers }));
});

/**
 * Create a new server entry for the authenticated user. ()
 */
export const POST = withAuth(async (req, ctx) => {
	const { data, error } = await ctx.json(newServerSchema);
	if (error) {
		return NextResponse.json(createErrorResponse({ code: "BadRequest", message: "Invalid data", details: { error: error instanceof z.ZodError ? z.treeifyError(error) : [error] } }), {
			status: 400,
		});
	}
	const inserted = await db.insert(servers).values(data);
	return NextResponse.json(createSuccessResponse({ code: "Ok", message: "Hello, authenticated user!", data: inserted }));
});
