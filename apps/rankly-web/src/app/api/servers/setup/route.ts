import { withDummy } from "@/lib/middlewares/with-dummy";
import { createSuccessResponse } from "@mingull/api";
import { NextResponse } from "next/server";

export const POST = withDummy(async (req, ctx) => {
	const body = await req.json();
	const serverUuid = body.serverUuid;
	return NextResponse.json(createSuccessResponse({ code: "Ok" }));
});
