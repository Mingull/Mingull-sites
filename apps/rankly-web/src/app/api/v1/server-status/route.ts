import { db } from "@/db";
import { withDummy } from "@/lib/middlewares/with-dummy";
import { createSuccessResponse, getHttpCode } from "@mingull/api";
import { NextResponse } from "next/server";

export const GET = withDummy(async () => {
	const a = await db.query.serverStatus.findMany();
	return NextResponse.json(
		createSuccessResponse({
			code: "Ok",
			data: a,
		}),
		{ status: getHttpCode("Ok") },
	);
});
