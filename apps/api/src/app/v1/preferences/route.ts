import { withRateLimit } from "@/lib/middlewares/with-ratelimit";
import { createSuccessResponse } from "@mingull/api";
import { db, eq } from "@mingull/lib/db/index";
import { preferences, sites } from "@mingull/lib/db/schemas/index";
import { NextResponse } from "next/server";

export const GET = withRateLimit(async () => {
	const defaultPrefs = await db.select().from(preferences).leftJoin(sites, eq(sites.id, preferences.site));
	return NextResponse.json(
		createSuccessResponse({
			code: "Ok",
			message: "Successful",
			data: defaultPrefs.map((pref) => ({
				...pref.preferences,
				site: {
					...pref.sites,
					keywords: typeof pref.sites?.keywords === "string" ? JSON.parse(pref.sites.keywords) : undefined,
				},
				options:
					typeof pref.preferences.options === "string" ? JSON.parse(pref.preferences.options) : undefined,
			})),
			meta: {
				timestamp: new Date().toISOString(),
			},
		}),
	);
});
