import { z } from "zod";
import { type SchemaType } from "./internal/types.ts";

type StatefulSchemaReturn<T extends Input, S extends SchemaType> =
	T extends readonly string[] ?
		z.ZodObject<
			{
				type: z.ZodEnum<{ readonly [K in T[number]]: K }>;
			} & S extends z.ZodObject<infer O> ?
				O
			: S extends Record<infer K, infer C> ? { [key in K]: C }
			: never
		>
	: T extends readonly [infer H, infer V][] ?
		H extends string ?
			V extends string[] ?
				z.ZodObject<
					{
						type: z.ZodEnum<{ readonly [K in `${H}:${V[number]}`]: K }>;
					} & S extends z.ZodObject<infer O> ?
						O
					: S extends Record<infer K, infer C> ? { [key in K]: C }
					: never
				>
			:	never
		:	never
	:	never;
    
// all possible input types
// 1. readonly [string, ...string[]] - simple array of strings (at least one string)
// 2. readonly [string, string[]][] - array of tuples with a string and an array of strings
// 3. a mix of both(placement does not matter), e.g. readonly [string, string[]][] | readonly [string, ...string[]] - it will be a recursive type
type Input = readonly [string, ...string[]] | readonly [string, string[]][];

export const StatefulSchema = <const T extends Input, const S extends SchemaType>(keys: T, schema: S): StatefulSchemaReturn<T, S> => {
	if (Array.isArray(keys) && typeof keys[0] === "string") {
		// case: ["auth", "profile", "dashboard"]
		return z.object({
			...schema,
			type: z.enum(keys),
		}) as StatefulSchemaReturn<T, S>;
	} else if (Array.isArray(keys) && Array.isArray(keys[0]) && typeof keys[0][0] === "string" && Array.isArray(keys[0][1])) {
		// case: [["auth", ["sign-in", "sign-up"]]]
		const [key, values] = keys[0];
		const enumValues = values.map((val) => `${key}:${val}`) as [`${string}:${string}`, ...`${string}:${string}`[]];

		return z.object({
			...schema,
			type: z.enum(enumValues),
		}) as StatefulSchemaReturn<T, S>;
	}

	// fallback
	return z.object({
		...schema,
		type: z.string(),
	}) as StatefulSchemaReturn<T, S>;
};
