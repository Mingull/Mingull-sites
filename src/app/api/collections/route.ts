import { db } from "@/lib/db";
import { collections } from "@/lib/db/schemas";
import { getUser } from "@/lib/server";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const collectionSchema = z.object({
	name: z.string().min(3, "Collection name must be at least 3 characters"),
	description: z.string().optional(),
	userId: z.string().uuid(),
});

export async function POST(req: NextRequest) {
	try {
		const user = await getUser();
		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}
		const json = await req.json();
		const validatedData = collectionSchema.safeParse(json);

		if (!validatedData.success) {
			return NextResponse.json({ error: validatedData.error.format() }, { status: 400 });
		}

		const { name, description, userId } = validatedData.data;
		const id = nanoid(10);

		await db.insert(collections).values({ id, name, description, userId });

		return NextResponse.json({ id }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error: "Failed to create collection" }, { status: 500 });
	}
}

export async function GET(req: NextRequest) {
	try {
		const user = await getUser();
		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const userCollections = await db.select().from(collections).where(eq(collections.userId, user.id));
		return NextResponse.json(userCollections);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch collections" }, { status: 500 });
	}
}
