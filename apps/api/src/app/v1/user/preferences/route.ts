import { createSuccessResponse } from "@/lib/api";
import { withAuth } from "@/lib/middlewares/with-auth";
import { db, eq } from "@mingull/lib/db/index";
import { preferences, sites, userPreferences } from "@mingull/lib/db/schemas/index";
import { NextResponse } from "next/server";

export const GET = withAuth(async (req, ctx) => {
	console.log({ ctx });
	const userPrefs = await db
		.select()
		.from(preferences)
		.leftJoin(userPreferences, eq(userPreferences.preferenceId, preferences.id))
		.leftJoin(sites, eq(sites.id, preferences.site))
		.where(eq(userPreferences.userId, ctx.user.id));

	if (userPrefs.length === 0) {
		const defaultPrefs = await db.select().from(preferences).leftJoin(sites, eq(sites.id, preferences.site));
		return NextResponse.json(
			createSuccessResponse({
				code: "Ok",
				message: "Default preferences",
				data: defaultPrefs.map((pref) => ({
					...pref.preferences,
					site: {
						...pref.sites,
						keywords:
							typeof pref.sites?.keywords === "string" ? JSON.parse(pref.sites.keywords) : undefined,
					},
					options:
						typeof pref.preferences.options === "string" ? JSON.parse(pref.preferences.options) : undefined,
				})),
				meta: {
					timestamp: new Date().toISOString(),
				},
			}),
		);
	}

	return NextResponse.json(
		createSuccessResponse({
			code: "Ok",
			message: "User preferences found",
			data: userPrefs.map((pref) => {
				return {
					...pref.preferences,
					site: {
						...pref.sites,
						keywords:
							typeof pref.sites?.keywords === "string" ? JSON.parse(pref.sites.keywords) : undefined,
					},
					value: pref.user_preferences?.value,
					options:
						typeof pref.preferences.options === "string" ? JSON.parse(pref.preferences.options) : undefined,
				};
			}),
		}),
	);
});

export const POST = withAuth(async (req, ctx) => {
	const body = await req.json();
	return NextResponse.json({ message: "User preferences saved", data: body });
});
