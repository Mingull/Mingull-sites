import { withAuth } from "@/lib/middlewares/with-auth";
import { db, eq } from "@mingull/lib/db";
import { collections } from "@mingull/lib/db/schemas/index";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { z } from "zod";

const collectionSchema = z.object({
	name: z.string().min(3, "Collection name must be at least 3 characters"),
	description: z.string().optional(),
	userId: z.string().uuid(),
});

export const POST = withAuth(async (req, ctx) => {
	try {
		const validatedData = await ctx.json(collectionSchema);

		if (!validatedData.data) {
			return NextResponse.json({ error: validatedData.error }, { status: 400 });
		}

		const { name, description, userId } = validatedData.data;
		const id = nanoid(10);

		await db.insert(collections).values({ id, name, description, userId });

		return NextResponse.json({ id }, { status: 201 });
	} catch (error) {
		console.error("Error creating collection:", error);
		return NextResponse.json({ error: "Failed to create collection" }, { status: 500 });
	}
});
export const GET = withAuth(async (req, ctx) => {
	try {
		const userCollections = await db.select().from(collections).where(eq(collections.userId, ctx.user.id));
		return NextResponse.json(userCollections);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch collections", rawError: error }, { status: 500 });
	}
});
