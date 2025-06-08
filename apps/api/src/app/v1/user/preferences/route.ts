import { createErrorResponse, createSuccessResponse, getHttpCode, getStatus } from "@mingull/api";
import { withAuth } from "@/lib/middlewares/with-auth";
import { db, eq } from "@mingull/lib/db";
import { preferences, sites, userPreferences } from "@mingull/lib/db/schemas/index";
import { NextResponse } from "next/server";
import { z } from "zod";

export const GET = withAuth<{ searchParams: { limit?: string } }>(async (req, ctx) => {
	const limit = (await ctx.searchParams).limit ?? "10";
	const userPrefs = await db
		.select()
		.from(preferences)
		.leftJoin(userPreferences, eq(userPreferences.preferenceId, preferences.id))
		.leftJoin(sites, eq(sites.id, preferences.site))
		.where(eq(userPreferences.userId, ctx.user.id))
		.limit(Number(limit));

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

const postPreferencesSchema = z
	.object({
		preference_id: z.string(),
		value: z.string(),
	})
	.required()
	.strict();

export const POST = withAuth(async (req, ctx) => {
	const { data, error } = await ctx.json(postPreferencesSchema);

	if (error) {
		return NextResponse.json(createErrorResponse({ code: "BadRequest", message: error.message }), {
			status: getHttpCode("BadRequest"),
			statusText: getStatus("BadRequest"),
		});
	}

	const preference = await db.select().from(preferences).where(eq(preferences.id, data.preference_id)).limit(1);
	if (!preference.length) {
		return NextResponse.json(createErrorResponse({ code: "NotFound", message: "Preference not found" }), {
			status: getHttpCode("NotFound"),
			statusText: getStatus("NotFound"),
		});
	}

	await db
		.insert(userPreferences)
		.values({
			userId: ctx.user.id,
			preferenceId: data.preference_id,
			value: data.value,
		})
		.onDuplicateKeyUpdate({
			set: {
				value: data.value,
			},
		});

	// await emailQueue.addJob({
	// 	name: "update-user-preferences",
	// 	data: {
	// 		 userId: ctx.user.id,
	// 		email: ctx.user.email,
	// 		 preference: data.preference_id,
	// 		value: data.value,
	// 	},
	// });

	return NextResponse.json(createSuccessResponse({ code: "Ok", message: "User preferences updated", data }), {
		status: getHttpCode("Ok"),
		statusText: getStatus("Ok"),
	});
});
