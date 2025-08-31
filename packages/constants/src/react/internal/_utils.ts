import z from "zod";
import { LocaleMap, Locales, MergeShared, NoOverlap, SchemaType, SharedValues, ValuesUnion } from "./types.ts";
import { ConstantsError } from "~/exceptions/constants-error.ts";

export function isZodObject(value: unknown): value is z.ZodObject<any> {
	return typeof value === "object" && value !== null && "safeParse" in value && "parse" in value;
}

export function isSchemaRecord(value: unknown): value is Record<string, z.ZodTypeAny> {
	return typeof value === "object" && value !== null && !("shape" in value) && !isZodObject(value);
}
export function getSchemaForLocale<T extends SchemaType>(schema: T, shared?: unknown): T {
	if (!shared) return schema;

	if (isZodObject(schema)) {
		return schema.partial() as unknown as T; // Make all fields optional
	} else if (isSchemaRecord(schema)) {
		const partial: Record<string, z.ZodTypeAny> = {};
		for (const key in schema) {
			const validator = schema[key];
			if (validator) {
				partial[key] = validator.optional();
			} else {
				partial[key] = z.any().optional();
			}
		}
		return partial as T;
	}

	throw new ConstantsError("Invalid schema type", "unknown");
}

export function mergeLocaleDataWithShared<TLocales extends Locales, TSchema extends SchemaType, TShared extends unknown>(
	localeData: LocaleMap<TLocales, TSchema, TShared>,
	shared?: NoOverlap<SharedValues<TShared>, ValuesUnion<TLocales, LocaleMap<TLocales, TSchema, TShared>>>,
): Record<TLocales[number], MergeShared<TSchema, TShared>> {
	const merged = {} as Record<TLocales[number], MergeShared<TSchema, TShared>>;

	for (const locale of Object.keys(localeData) as Array<TLocales[number]>) {
		merged[locale] = {
			...localeData[locale as keyof typeof localeData],
			...(shared || {}),
		} as unknown as MergeShared<TSchema, TShared>;
	}

	return merged;
}

export function getSharedSchema<T extends SchemaType>(schema: T, sharedKeys: string[]): T {
	if (isZodObject(schema)) {
		const shape = schema.shape;
		const filteredShape = Object.fromEntries(Object.entries(shape).filter(([key]) => sharedKeys.includes(key)));
		return z.object(filteredShape) as unknown as T;
	}

	if (isSchemaRecord(schema)) {
		const filteredShape = Object.fromEntries(Object.entries(schema).filter(([key]) => sharedKeys.includes(key)));
		return filteredShape as T;
	}

	throw new ConstantsError("Invalid schema type for shared", "unknown");
}
