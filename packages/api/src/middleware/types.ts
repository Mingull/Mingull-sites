import { NextRequest } from "next/server.js";
import { z } from "zod";
import { json } from "./json.js";

export type Params = Record<string, string | string[] | undefined> | undefined;
export type SearchParams = Record<string, string | string[] | undefined> | undefined;

export type MiddlewareParams = {
	params?: Params;
	searchParams?: SearchParams;
};

export type BaseContext<P extends MiddlewareParams> = ((P["params"] extends Params ? { params: Promise<P["params"]> }
:	{ params?: undefined }) &
	(P["searchParams"] extends SearchParams ? { searchParams: Promise<P["searchParams"]> }
	:	{ searchParams?: undefined })) & {
	json: <T extends z.ZodType<any, any, any>>() => ReturnType<typeof json<z.infer<T>>>;
};

export type Context<T = {}, P extends MiddlewareParams = MiddlewareParams> = BaseContext<P> & T;

export type Handler<C = {}, P extends MiddlewareParams = MiddlewareParams> = (
	req: NextRequest,
	context: Context<C, P>,
) => Promise<Response>;

export type Middleware<C = {}> = <P extends MiddlewareParams = MiddlewareParams>(
	handler: Handler<C, P>,
) => Handler<C, P>;

type ExtractContext<M> = M extends Middleware<infer CTX> ? CTX : never;
export type MergeContexts<M extends Middleware<any>[]> =
	M extends [infer First, ...infer Rest] ? ExtractContext<First> & MergeContexts<Extract<Rest, Middleware<any>[]>>
	:	{};
