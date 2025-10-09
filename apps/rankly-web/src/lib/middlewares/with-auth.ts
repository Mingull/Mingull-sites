import { createErrorResponse, createMiddleware, getHttpCode, getStatus } from "@mingull/api";
import { auth, type Session, type User } from "@/lib/auth";
import { NextResponse } from "next/server";

export const withAuth = createMiddleware<{ session: Session; user: User }>((handler) => async (req, ctx) => {
	const session = await auth.api.getSession({ headers: req.headers });

	if (!session) {
		return NextResponse.json(
			createErrorResponse({
				code: "Unauthorized",
				message: "You must be logged in to access this resource.",
				details: {},
			}),
			{ status: getHttpCode("Unauthorized"), statusText: getStatus("Unauthorized") },
		);
	}

	ctx.session = session.session;
	ctx.user = session.user;

	return handler(req, ctx);
});
