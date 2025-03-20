import { db } from "@/lib/db";
import { pastes } from "@/lib/db/schemas";
import { getUser } from "@/lib/server";
import { eq, or } from "drizzle-orm";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const pasteSchema = z.object({
	title: z.string().min(3, "Title must be at least 3 characters long"),
	content: z.string().min(1, "Content cannot be empty"),
	syntax: z.string().optional().default("plaintext"),
	isPublic: z.boolean().default(false),
});

export async function POST(req: NextRequest) {
	try {
		const user = await getUser();
		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}
		const json = await req.json();
		const validatedData = pasteSchema.safeParse(json);

		if (!validatedData.success) {
			return NextResponse.json({ error: validatedData.error.format() }, { status: 400 });
		}

		const { title, content, syntax, isPublic } = validatedData.data;

		const id = nanoid(10);
		await db.insert(pastes).values({ id, title, content, syntax, isPublic });

		return NextResponse.json({ id }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error: "Failed to create paste" }, { status: 500 });
	}
}

export async function GET(req: NextRequest) {
	try {
		const user = await getUser();
		const isAuthenticated = Boolean(user);

		// Fetch pastes: Show only public pastes or user's own pastes if logged in
		const userPastes = await db
			.select()
			.from(pastes)
			.where((paste) => {
				if (isAuthenticated && user) {
					return or(eq(paste.userId, user.id), eq(paste.isPublic, true));
				} else {
					return eq(paste.isPublic, true);
				}
			});

		return NextResponse.json(userPastes);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch pastes" }, { status: 500 });
	}
}
