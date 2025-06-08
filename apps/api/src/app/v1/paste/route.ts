import { withAuth } from "@/lib/middlewares/with-auth";
import { db, eq, or } from "@mingull/lib/db";
import { pastes } from "@mingull/lib/db/schemas/index";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { z } from "zod";

const pasteSchema = z.object({
	title: z.string().min(3, "Title must be at least 3 characters long"),
	content: z.string().min(1, "Content cannot be empty"),
	syntax: z.string().optional().default("plaintext"),
	isPublic: z.boolean().default(false),
});

export const POST = withAuth(async (req, ctx) => {
	try {
		if (!ctx.user) {
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
		console.error("Error creating paste:", error);
		return NextResponse.json({ error: "Failed to create paste" }, { status: 500 });
	}
});

export const GET = withAuth(async (req, ctx) => {
	try {
		const user = ctx.user;
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
		console.error("Error fetching pastes:", error);
		return NextResponse.json({ error: "Failed to fetch pastes" }, { status: 500 });
	}
});
