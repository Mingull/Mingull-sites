import { db } from "@/db";
import { servers } from "@/db/schemas/(main)/servers";
import { auth } from "@/lib/auth";
import { withAuth } from "@/lib/middlewares/with-auth";
import { newServerSchema } from "@/lib/schemas/server";
import { createErrorResponse, createSuccessResponse, getHttpCode, getStatus } from "@mingull/api";
import { NextResponse } from "next/server";
import z from "zod";

/**
 * List servers owned by the authenticated user.
 */
export const GET = withAuth(async (req, ctx) => {
	const servers = await db.query.servers.findMany({
		where: (servers, { eq, or }) => or(eq(servers.organizationId, ctx.session.activeOrganizationId!), eq(servers.ownerId, ctx.user.id)),
	});
	return NextResponse.json(createSuccessResponse({ code: "Ok", message: "Hello, authenticated user!", data: servers }));
});

/**
 * Create a new server entry for the authenticated user. ()
 */
export const POST = withAuth(async (req, ctx) => {
	const { data, error } = await ctx.json(newServerSchema);
	if (error) {
		return NextResponse.json(
			createErrorResponse({
				code: "BadRequest",
				message: "Invalid data",
				details: { error: error instanceof z.ZodError ? z.treeifyError(error) : [error] },
			}),
			{ status: 400 },
		);
	}

	if (!data.serverUuid && !data.setupToken) {
		const owner = ctx.session.activeOrganizationId ? { organizationId: ctx.session.activeOrganizationId } : { ownerId: ctx.user.id };
		try {
			await db.insert(servers).values({ ...data, ...owner });
		} catch (e) {
			return NextResponse.json(
				createErrorResponse({
					code: "Conflict",
					message: "Server already exists",
				}),
				{ status: getHttpCode("Conflict"), statusText: getStatus("Conflict") },
			);
		}

		const server = await db.query.servers.findFirst({
			where: (s, { eq }) => (ctx.session.activeOrganizationId ? eq(s.organizationId, ctx.session.activeOrganizationId) : eq(s.ownerId, ctx.user.id)),
		});

		return NextResponse.json(createSuccessResponse({ code: "Ok", message: "Hello, authenticated user!", data: server }));
	}

	try {
		await db.insert(servers).values(data);
	} catch (e) {
		return NextResponse.json(
			createErrorResponse({
				code: "Conflict",
				message: "Server already exists",
			}),
			{ status: getHttpCode("Conflict"), statusText: getStatus("Conflict") },
		);
	}

	const server = await db.query.servers.findFirst({
		where: (s, { eq }) => eq(s.serverUuid, data.serverUuid!),
	});

	return NextResponse.json(createSuccessResponse({ code: "Ok", message: "Hello, authenticated user!", data: server }));
});
