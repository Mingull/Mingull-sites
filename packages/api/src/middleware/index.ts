import { Prettify } from "@mingull/lib";
import { json } from "./json.ts";
import { Handler, MergeContexts, Middleware, MiddlewareParams, SearchParams } from "./types.ts";
import z from "zod";
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
			json: <T extends z.ZodType>(schema: T) => json(schema, req),
			params: Promise.resolve(ctx.params ?? {}),
			searchParams: Promise.resolve(searchParams),
		});
	};

/**
 * @param middlewares - The middleware functions to be composed.
 * @returns A middleware function that takes a handler and returns a new handler.
 */
export const composeMiddlewares =
	<M extends Middleware<any>[]>(...middlewares: M): Middleware<Prettify<MergeContexts<M>>> =>
	(handler) =>
		middlewares.reduceRight((h, mw) => mw(h), handler);
