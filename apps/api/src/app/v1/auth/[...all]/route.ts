import { withCors } from "@/lib/middlewares/with-cors";
import { auth } from "@mingull/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextResponse } from "next/server";

const handlers = toNextJsHandler(auth);

export const GET = withCors(handlers.GET);
export const POST = withCors(handlers.POST);

export const OPTIONS = withCors(async (req, ctx) => new NextResponse(null, { status: 204 }));
