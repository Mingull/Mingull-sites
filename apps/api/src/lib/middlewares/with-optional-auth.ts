import { auth } from "@mingull/lib/auth/server";
import { Session, User } from "better-auth";
import { createMiddleware } from "../../../../../packages/library/src/middleware";

export const withOptionalAuth = createMiddleware<{ session: Session | null; user: User | null }>(
	(handler) => async (req, ctx) => {
		const session = await auth.api.getSession({ headers: req.headers });

		ctx.session = session?.session ?? null;
		ctx.user = session?.user ?? null;

		return handler(req, ctx);
	},
);
