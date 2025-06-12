import { Prettify } from "@mingull/lib";
import { StandardSchemaDictionary, StandardSchemaV1 } from "./standard.ts";

export type BaseEnv<Shared extends StandardSchemaDictionary> = {
	/**
	 * Shared variables, often those that are provided by build tools and is available to both client and server,
	 * but isn't prefixed and doesn't require to be manually supplied. For example `NODE_ENV`, `VERCEL_URL` etc.
	 */
	shared?: Shared;

	isServer?: boolean;
	/**
	 * Called when validation fails. By default the error is logged,
	 * and an error is thrown telling what environment variables are invalid.
	 */
	onValidationError?: (issues: readonly StandardSchemaV1.Issue[]) => never;
	/**
	 * Called when a server-side environment variable is accessed on the client.
	 * By default an error is thrown.
	 */
	onInvalidAccess?: (variable: string) => never;
} & (
	| {
			runtimeEnv?: never;
			path?: string;
	  }
	| { runtimeEnv?: Record<string, string | boolean | number | undefined>; path?: never }
);

export interface CreateSchemaOptions<
	Server extends StandardSchemaDictionary,
	Client extends StandardSchemaDictionary,
	Shared extends StandardSchemaDictionary,
	Final extends StandardSchemaV1<{}, {}>,
> {
	/**
	 * A custom function to combine the schemas.
	 * Can be used to add further refinement or transformation.
	 */
	createFinalSchema?: (shape: Server & Client & Shared, isServer: boolean) => Final;
}

export type EnvOptions<
	Prefix extends string | undefined,
	Client extends StandardSchemaDictionary,
	Shared extends StandardSchemaDictionary,
	Server extends StandardSchemaDictionary,
	Final extends StandardSchemaV1<{}, {}>,
> = BaseEnv<Shared> & ServerClientOptions<Prefix, Server, Client> & CreateSchemaOptions<Server, Client, Shared, Final>;

/** Checks if server, client and/or shared are present and merges them into a single zod object */
export type Env<TFinalSchema extends StandardSchemaV1<{}, {}>> = Readonly<
	Prettify<StandardSchemaV1.InferOutput<TFinalSchema>>
>;

export type ServerClientOptions<
	Prefix extends string | undefined,
	Server extends StandardSchemaDictionary,
	Client extends StandardSchemaDictionary,
> =
	| (ClientOptions<Client, Prefix> & ServerOptions<Server, Prefix>)
	| (ServerOptions<Server, Prefix> & Impossible<ClientOptions<never, never>>)
	| (ClientOptions<Client, Prefix> & Impossible<ServerOptions<never, never>>);

export type ClientPrefix = string | undefined;
export type ClientOptions<Client extends StandardSchemaDictionary, Prefix extends ClientPrefix> = {
	prefix: Prefix;
	client: Partial<{
		[Key in keyof Client]: Key extends `${Prefix}${string}` ? Client[Key]
		:	ErrorMessage<`${Key & string} should be prefixed with ${Prefix}.`>;
	}>;
};

/** If server options has a prefix return ErrorMessage else return options */
export type ServerOptions<Server extends StandardSchemaDictionary, Prefix extends string | undefined> = {
	server: Partial<{
		[Key in keyof Server]: Prefix extends undefined ? Server[Key]
		: Prefix extends "" ? Server[Key]
		: Key extends `${Prefix}${string}` ?
			ErrorMessage<`${Key extends `${Prefix}${string}` ? Key : never} should not prefixed with ${Prefix}.`>
		:	Server[Key];
	}>;
};
export type DefaultCombinedSchema<
	TClient extends StandardSchemaDictionary,
	TShared extends StandardSchemaDictionary,
	TServer extends StandardSchemaDictionary,
> = StandardSchemaV1<{}, UndefinedOptional<StandardSchemaDictionary.InferOutput<TClient & TShared & TServer>>>;

/**
 * Make the keys of the type possibly undefined
 * @internal
 */
type UndefinedOptional<T> = Partial<Pick<T, PossiblyUndefinedKeys<T>>> & Omit<T, PossiblyUndefinedKeys<T>>;
/**
 * Get the keys of the possibly undefined values
 * @internal
 */
type PossiblyUndefinedKeys<T> = {
	[K in keyof T]: undefined extends T[K] ? K : never;
}[keyof T];

/**
 * Make the keys of the type impossible
 * @internal
 */
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Impossible<T extends Record<string, any>> = Partial<Record<keyof T, never>>;

type ErrorMessage<T extends string> = T;
