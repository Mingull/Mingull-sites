import { Prettify } from "@mingull/lib";
import { NextRequest } from "next/server";

type Params = Record<string, string | string[] | undefined>;

export type BaseContext<P extends Params> =
	P extends Params ?
		{
			params: Promise<P>;
			searchParams?: URLSearchParams;
		}
	:	{
			params?: undefined;
			searchParams?: URLSearchParams;
		};

export type Context<T = {}, P extends Params = Params> = BaseContext<P> & T;
// export type InferredContext<T> = T extends Middleware<infer C>[] ? Prettify<MergeContexts<T>> : never;

export type Handler<C = {}, P extends Params = Params> = (req: NextRequest, context: Context<C, P>) => Promise<Response>;

export type Middleware<C = {}> = <P extends Params = Params>(handler: Handler<C, P>) => Handler<C, P>;

type ExtractContext<M> = M extends Middleware<infer CTX> ? CTX : never;
export type MergeContexts<M extends Middleware<any>[]> =
	M extends [infer First, ...infer Rest] ? ExtractContext<First> & MergeContexts<Extract<Rest, Middleware<any>[]>>
	:	{};
