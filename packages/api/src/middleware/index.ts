import { Prettify } from "@mingull/lib";
import { json } from "./json.ts";
import { Handler, MergeContexts, Middleware, MiddlewareParams, SearchParams } from "./types.ts";
/**
 * @param middleware - The middleware function to be created.
 * @returns A middleware function that takes a handler and returns a new handler.
 */
export const createMiddleware =
	<T = object>(middleware: Middleware<T>): Middleware<T> =>
	<P extends MiddlewareParams>(handler: Handler<T, P>): Handler<T, P> =>
	(req, ctx) => {
		const searchParams: SearchParams = {};
		req.nextUrl.searchParams.forEach((value, key) => {
			searchParams[key] = value;
		});

		return middleware(handler)(req, {
			...ctx,
			json: json,
			searchParams: searchParams,
			params: ctx.params,
		});
	};

// export const createMiddleware = <T = {}>(middleware: Middleware<T>) => middleware;

/**
 * @param middlewares - The middleware functions to be composed.
 * @returns A middleware function that takes a handler and returns a new handler.
 */
export const composeMiddlewares =
	<M extends Middleware<any>[]>(...middlewares: M): Middleware<Prettify<MergeContexts<M>>> =>
	(handler) =>
		middlewares.reduceRight((h, mw) => mw(h), handler);
