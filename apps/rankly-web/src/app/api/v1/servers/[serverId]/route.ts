import { withAuth } from "@/lib/middlewares/with-auth";
import { createSuccessResponse, getHttpCode, getStatus } from "@mingull/api";
import { NextResponse } from "next/server";

/**
 * Get details of a specific server owned by the authenticated user.
 */
export const GET = withAuth<{ params: { serverId: string } }>(async (req, ctx) => {
	return NextResponse.json(createSuccessResponse({ code: "Ok", message: "Server details fetched successfully!" }), { status: getHttpCode("Ok"), statusText: getStatus("Ok") });
});

/**
 * Update settings (e.g. visibility, name)  of a specific server owned by the authenticated user.
 */
export const PATCH = withAuth<{ params: { serverId: string } }>(async (req, ctx) => {
	return NextResponse.json(createSuccessResponse({ code: "Ok", message: "Server updated successfully!" }), { status: getHttpCode("Ok"), statusText: getStatus("Ok") });
});

/**
 * Delete a specific server owned by the authenticated user.
 */
export const DELETE = withAuth<{ params: { serverId: string } }>(async (req, ctx) => {
	return NextResponse.json(createSuccessResponse({ code: "Ok", message: "Server deleted successfully!" }), { status: getHttpCode("Ok"), statusText: getStatus("Ok") });
});
