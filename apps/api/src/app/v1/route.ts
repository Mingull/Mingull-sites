import { withLogger } from "@/lib/middlewares/with-logger";
import { withRateLimit } from "@/lib/middlewares/with-ratelimit";
import { composeMiddlewares, createSuccessResponse } from "@mingull/api";
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
