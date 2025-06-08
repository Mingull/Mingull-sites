import { withAuth } from "@/lib/middlewares/with-auth";
import { db } from "@mingull/lib/db";
import { tags } from "@mingull/lib/db/schemas/index";
import { NextResponse } from "next/server";

export const GET = withAuth(async () => {
	try {
		const allTags = await db.select().from(tags);
		return NextResponse.json(allTags);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch tags", rawError: error }, { status: 500 });
	}
});
