import { NextRequest } from "next/server.js";
import { z } from "zod";

type Success<T> = {
	data: T;
	error: null;
};

type Failure<E> = {
	data: null;
	error: E;
};

type Result<T, E = Error> = Success<T> | Failure<E>;

export const json = async <T, E = Error>(schema: z.Schema<T>, req: NextRequest): Promise<Result<T, E>> => {
	const contentType = req.headers.get("content-type") || "application/json";
	if (!contentType.includes("application/json")) {
		return { data: null, error: new Error("Invalid content type") as E };
	}
	const body = await req.json();
	if (!body) return { data: null, error: new Error("Invalid body") as E };

	const parsed = schema.safeParse(body);
	if (parsed.success) {
		return { data: parsed.data, error: null };
	} else {
		return { data: null, error: parsed.error as E };
	}
};
