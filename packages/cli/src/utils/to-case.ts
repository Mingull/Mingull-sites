export type PascalCase<S extends string> =
	S extends `${infer First}-${infer Rest}` ? `${Capitalize<First>}${PascalCase<Capitalize<Rest>>}` : Capitalize<S>;

export const toPascalCase = <S extends string>(str: S): PascalCase<S> =>
	str.replace(/(^\w|-\w)/g, (m) => m.replace(/-/, "").toUpperCase()) as PascalCase<S>;

export const toCamelCase = (str: string) =>
	str.replace(/(^\w|-\w)/g, (m) => m.replace(/-/, "").toUpperCase()).replace(/^\w/, (m) => m.toLowerCase());

export const toKebabCase = (str: string) =>
	str
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
		.replace(/[\s_]+/g, "-")
		.toLowerCase();
