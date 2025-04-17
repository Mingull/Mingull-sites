import { Prettify } from "@mingull/lib";
import { Context, MergeContexts, Middleware } from "./types";

/**
 * @param middleware - The middleware function to be created.
 * @returns A middleware function that takes a handler and returns a new handler.
 */
export const createMiddleware = <T = {}>(middleware: Middleware<T>) => middleware;

/**
 * @param middlewares - The middleware functions to be composed.
 * @returns A middleware function that takes a handler and returns a new handler.
 */
export const composeMiddlewares =
	<M extends Middleware<any>[]>(...middlewares: M): Middleware<Prettify<MergeContexts<M>>> =>
	(handler) =>
		middlewares.reduceRight((h, mw) => mw(h), handler);
