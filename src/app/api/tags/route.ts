import { db } from "@/lib/db";
import { tags } from "@/lib/db/schemas";
import { getUser } from "@/lib/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const user = await getUser();
		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}
		const allTags = await db.select().from(tags);
		return NextResponse.json(allTags);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch tags" }, { status: 500 });
	}
}
