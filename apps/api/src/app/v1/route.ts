import { createSuccessResponse } from "@/lib/api";
import { composeMiddlewares } from "@/lib/middlewares";
import { withLogger } from "@/lib/middlewares/with-logger";
import { withRateLimit } from "@/lib/middlewares/with-ratelimit";
import { NextResponse } from "next/server";

const withComposition = composeMiddlewares(withRateLimit, withLogger);

export const GET = withComposition(async (req, ctx) => {
	return NextResponse.json(
		createSuccessResponse({
			code: "Ok",
			message: "Successful",
			meta: {
				timestamp: new Date().toISOString(),
			},
		}),
	);
});
