import { withAuth } from "@/lib/middlewares/with-auth";

export const POST = withAuth(async (req, ctx) => {
    return new Response(JSON.stringify({ message: "Player added successfully!" }), { status: 200 });
});