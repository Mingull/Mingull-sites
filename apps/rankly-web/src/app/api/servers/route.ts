import { withAuth } from "@/lib/middlewares/with-auth";
import { createSuccessResponse } from "@mingull/api";
import { NextResponse } from "next/server";

/**
 * List servers owned by the authenticated user.
 */
export const GET = withAuth(async (req, ctx) => {
	return NextResponse.json(createSuccessResponse({ code: "Ok", message: "Hello, authenticated user!" }));
});

/**
 * Create a new server entry for the authenticated user. ()
 */
export const POST = withAuth(async (req, ctx) => {
	return NextResponse.json(createSuccessResponse({ code: "Ok", message: "Server created successfully!" }));
});
