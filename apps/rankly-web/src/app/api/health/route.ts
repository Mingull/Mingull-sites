import { withDummy } from "@/lib/middlewares/with-dummy";
import { createSuccessResponse } from "@mingull/api";
import { NextResponse } from "next/server";

export const GET = withDummy(async (req, ctx) => {
	return NextResponse.json(createSuccessResponse({ code: "Ok", message: "OK" }));
});
