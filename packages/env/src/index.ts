import dotenv from "dotenv";
import { ensureSynchronous, parseWithDictionary, StandardSchemaDictionary, StandardSchemaV1 } from "./standard.ts";
import { ClientPrefix, DefaultCombinedSchema, Env, EnvOptions } from "./types.ts";
import path from "path";

export const createEnv = <
	Prefix extends ClientPrefix,
	Client extends StandardSchemaDictionary = NonNullable<unknown>,
	Server extends StandardSchemaDictionary = NonNullable<unknown>,
	Shared extends StandardSchemaDictionary = NonNullable<unknown>,
	Final extends StandardSchemaV1<{}, {}> = DefaultCombinedSchema<Client, Shared, Server>,
>(
	options: EnvOptions<Prefix, Client, Shared, Server, Final>,
): Env<Final> => {
	if (options.path) {
		dotenv.config({ path: path.resolve(options.path) });
	}

	const runtimeEnv = options.runtimeEnv ?? process.env;

	const _client = typeof options.client === "object" ? options.client : {};
	const _server = typeof options.server === "object" ? options.server : {};
	const _shared = typeof options.shared === "object" ? options.shared : {};
	const isServer = options.isServer ?? typeof window === "undefined";

	const finalSchema = {
		..._shared,
		..._client,
		...(isServer ? _server : {}),
	};

	const parsed =
		options.createFinalSchema?.(finalSchema as never, isServer)["~standard"].validate(runtimeEnv) ??
		parseWithDictionary(finalSchema, runtimeEnv); 

	ensureSynchronous(parsed, "Validation must be synchronous");

	const onValidationError =
		options.onValidationError ??
		((issues) => {
			console.error("❌ Invalid environment variables:", issues);
			throw new Error("Invalid environment variables");
		});

	const onInvalidAccess =
		options.onInvalidAccess ??
		(() => {
			throw new Error("❌ Attempted to access a server-side environment variable on the client");
		});

	if (parsed.issues) {
		return onValidationError(parsed.issues);
	}
	const isServerAccess = (prop: string) => {
		if (!options.prefix) return true;
		return !prop.startsWith(options.prefix) && !(prop in _shared);
	};
	const isValidServerAccess = (prop: string) => {
		return isServer || !isServerAccess(prop);
	};
	const ignoreProp = (prop: string) => {
		return prop === "__esModule" || prop === "$$typeof";
	};

	const env = new Proxy(parsed.value, {
		get(target, prop) {
			if (typeof prop !== "string") return undefined;
			if (ignoreProp(prop)) return undefined;
			if (!isValidServerAccess(prop)) return onInvalidAccess(prop);
			return Reflect.get(target, prop);
		},
	});

	return env as any;
};
