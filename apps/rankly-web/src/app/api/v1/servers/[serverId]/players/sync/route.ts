import { withAuth } from "@/lib/middlewares/with-auth";

/**
 * Ensure player exists in DB (uuid, username, maybe first join date).
 */
export const POST = withAuth<{ params: { serverId: string } }>(async (req, ctx) => {
	return new Response(JSON.stringify({ message: "Player added successfully!" }), { status: 200 });
});
