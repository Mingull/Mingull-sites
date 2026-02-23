import { db } from "@/db";
import { servers } from "@/db/schemas/(main)/servers";
import { withAuth } from "@/lib/middlewares/with-auth";
import { withPagination } from "@/lib/middlewares/with-pagination";
import { newServerSchema } from "@/lib/schemas/server";
import { createErrorResponse, createSuccessResponse, getHttpCode, getStatus, composeMiddlewares } from "@mingull/api";
import { NextResponse } from "next/server";
import z from "zod";

const withAuthedPagination = composeMiddlewares(withAuth, withPagination);

/**
 * List servers owned by the authenticated user.
 */
export const GET = withAuthedPagination(async (req, ctx) => {
	console.log({ pagination: ctx.pagination });
	const servers = await db.query.servers.findMany({
		where: (servers, { eq, or }) => or(eq(servers.organizationId, ctx.session.activeOrganizationId!), eq(servers.ownerId, ctx.user.id)),
		limit: ctx.pagination.limit,
		offset: ctx.pagination.offset,
		orderBy: (fields, { asc, desc }) => {
			if (ctx.pagination.sort) {
				return Object.entries(ctx.pagination.sort)
					.filter(([field]) => field in fields)
					.map(([field, dir]) => (dir === "asc" ? asc(fields[field as keyof typeof fields]) : desc(fields[field as keyof typeof fields])));
			}
			return [desc(fields.createdAt)];
		},
	});
	return NextResponse.json(createSuccessResponse({ code: "Ok", message: "Hello, authenticated user!", data: servers }));
});

/**
 * Create a new server entry for the authenticated user.
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
			{ status: getHttpCode("BadRequest"), statusText: getStatus("BadRequest") },
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
