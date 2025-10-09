import { auth, type Session, type User } from "@/lib/auth";
import { createMiddleware } from "@mingull/api";

export const withOptionalAuth = createMiddleware<{ session: Session | null; user: User | null }>((handler) => async (req, ctx) => {
	const session = await auth.api.getSession({ headers: req.headers });

	ctx.session = session?.session ?? null;
	ctx.user = session?.user ?? null;

	return handler(req, ctx);
});
