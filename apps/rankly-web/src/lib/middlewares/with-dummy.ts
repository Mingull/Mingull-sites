import { createMiddleware } from "@mingull/api";

export const withDummy = createMiddleware((handler) => async (req, ctx) => handler(req, ctx));
