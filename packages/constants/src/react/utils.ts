import { z } from "zod";
import { type SchemaType } from "./internal/types.ts";

type FlattenKeys<T extends Input> =
	T extends readonly [infer Head, ...infer Tail] ?
		Head extends string ? Head | FlattenKeys<Tail extends Input ? Tail : []>
		: Head extends [infer H, infer V] ?
			H extends string ?
				V extends readonly string[] ?
					`${H}:${V[number]}` | FlattenKeys<Tail extends Input ? Tail : []>
				:	never
			:	never
		:	never
	:	never;

type EnumShape<T extends string> = { [K in T]: K };

type UnionToEnumObject<U extends string> = {
	[K in U]: K;
};

type StatefulSchemaReturn<T extends Input, S extends SchemaType> = z.ZodObject<
	{
		type: z.ZodEnum<EnumShape<FlattenKeys<T>>>;
	} & (S extends z.ZodObject<infer O> ? O
	: S extends Record<string, z.ZodTypeAny> ? S
	: never)
>;

// all possible input types
// 1. readonly [string, ...string[]] - simple array of strings (at least one string)
type SimpleInput = readonly [string, ...string[]];
// 2. readonly [[string, string[]]] - array of tuples with a string and an array of strings
type TupleInput = readonly [string, string[]][];
// 3. a mix of both(placement does not matter), e.g. readonly [string, string[]][] | readonly [string, ...string[]] - it will be a recursive type
type MixedInput = readonly (string | [string, string[]])[];
type Input = SimpleInput | TupleInput | MixedInput;

/**
 * Creates a state schema with the given keys and schema.
 * @param keys The keys for the state schema.
 * @param schema The schema for the state.
 * @returns A Zod object schema that represents the state with the given keys and schema.
 */
export const StatefulSchema = <
	const T extends Input,
	const S extends SchemaType,
	const FlatKeys extends FlattenKeys<T> = FlattenKeys<T>,
	const EnumShape extends Record<FlatKeys, FlatKeys> = UnionToEnumObject<FlatKeys>,
>(
	keys: T,
	schema: S,
) => {
	const flat: string[] = [];

	for (const entry of keys as MixedInput) {
		if (typeof entry === "string") {
			flat.push(entry);
		} else {
			const [group, values] = entry;
			for (const value of values) {
				flat.push(`${group}:${value}`);
			}
		}
	}

	const enumObject = Object.fromEntries(flat.map((val) => [val, val])) as { readonly [K in FlatKeys]: K };

	return z.object({
		...schema,
		type: z.enum(enumObject),
	});
};

export type InferUnionType<T extends z.ZodObject<any>> = "type" extends keyof z.infer<T> ? z.infer<T>["type"] : never;
