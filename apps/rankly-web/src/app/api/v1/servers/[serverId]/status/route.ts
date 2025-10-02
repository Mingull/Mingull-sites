import { db } from "@/db";
import { withDummy } from "@/lib/middlewares/with-dummy";
import { createErrorResponse, createSuccessResponse, getHttpCode } from "@mingull/api";
import { NextResponse } from "next/server";

export const GET = withDummy<{ params: { serverId: string } }>(async (req, ctx) => {
	const { serverId } = await ctx.params;

	const server = await db.query.servers.findFirst({ where: ({ id }, { eq }) => eq(id, serverId) });
	if (!server) {
		return NextResponse.json(
			createErrorResponse({
				code: "NotFound",
				message: "Server not found",
			}),
			{ status: getHttpCode("NotFound") },
		);
	}
	const serverStatus = await db.query.serverStatus.findFirst({ where: ({ id }, { eq }) => eq(id, server.status) });
	return NextResponse.json(
		createSuccessResponse({
			code: "Ok",
			data: serverStatus,
		}),
		{ status: getHttpCode("Ok") },
	);
});
