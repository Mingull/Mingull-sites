import { createSuccessResponse } from "@mingull/api";
import { withAuth } from "@/lib/middlewares/with-auth";
import { and, db, eq } from "@mingull/lib/db/index";
import { preferences, sites, userPreferences } from "@mingull/lib/db/schemas/index";
import { NextRequest, NextResponse } from "next/server";

export const GET = withAuth<{ params: { pref: string } }>(async (req, ctx) => {
	const userPrefs = await db
		.select()
		.from(preferences)
		.leftJoin(userPreferences, eq(userPreferences.preferenceId, preferences.id))
		.leftJoin(sites, eq(sites.id, preferences.site))
		.where(and(eq(userPreferences.preferenceId, (await ctx.params).pref), eq(userPreferences.userId, ctx.user.id)));

	if (userPrefs.length === 0) {
		const defaultPrefs = await db
			.select()
			.from(preferences)
			.leftJoin(sites, eq(sites.id, preferences.site))
			.where(eq(preferences.id, (await ctx.params).pref));
		return NextResponse.json(
			createSuccessResponse({
				code: "Ok",
				message: "Default preference",
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

export async function POST(req: NextRequest, { params }: { params: { pref: string } }) {
	const { pref } = await params;
	if (!pref) return NextResponse.json({ error: "Preference ID is required" }, { status: 400 });

	const body = await req.json(); // Use .json() to parse the request body
	if (!body.value) return NextResponse.json({ error: "Value is required" }, { status: 400 });

	// Save user preference logic here...

	return NextResponse.json({ message: "User preference saved", pref, data: body });
}
