type NodeLoader<T> = T | (() => T | Promise<T>);

type RegistryOptions<TName extends string> = {
	onError?: (name: TName | (string & {}), error: unknown) => void;
	isSSR?: boolean;
	ttl?: number; // in milliseconds
};

type CachedNode<TNode> = (
	| {
			promise: Promise<TNode>;
			value?: never;
	  }
	| {
			promise?: never;
			value: TNode;
	  }
) & {
	timestamp: number;
};

/**
 * Creates a library registry.
 * @param nodes A record of node names to their loaders.
 * @param options Optional registry options.
 * @returns The created registry.
 */
export function createLibraryRegistry<TName extends string, TNode>(
	nodes: Record<TName, NodeLoader<TNode>>,
	options?: RegistryOptions<TName>,
) {
	const cache = new Map<TName | (string & {}), CachedNode<TNode>>();
	const ttl = options?.ttl ?? 0;

	const isStale = (entry: CachedNode<TNode>) => ttl > 0 && Date.now() - entry.timestamp > ttl;

	const loadNode = async (name: TName | (string & {})): Promise<TNode> => {
		try {
			if (options?.isSSR) {
				throw new Error(`Dynamic import for "${name}" blocked in SSR mode.`);
			}
			if (!(name in nodes)) {
				throw new Error(`Node "${name}" is not a valid name.`);
			}

			const rawNode = nodes[name as TName];
			const loader = typeof rawNode === "function" ? (rawNode as () => TNode | Promise<TNode>)() : rawNode;

			const promise = Promise.resolve(loader) as Promise<TNode>;
			cache.set(name, { promise, timestamp: Date.now() });

			return await promise;
		} catch (err) {
			options?.onError?.(name, err);
			throw err;
		}
	};

	const get = (name: TName | (string & {})): Promise<TNode> => {
		if (!(name in nodes)) {
			const error = new Error(`Node "${name}" is not a valid name.`);
			options?.onError?.(name, error);
			return Promise.reject(error);
		}
		if (!nodes[name as TName]) {
			const error = new Error(`Node "${name}" not found in registry.`);
			options?.onError?.(name, error);
			return Promise.reject(error);
		}
		const entry = cache.get(name);
		if (!entry || isStale(entry) || typeof entry.value === "undefined") {
			cache.delete(name);
			return loadNode(name);
		}
		return entry.promise!;
	};

	const getSync = (name: TName | (string & {})): TNode | null => {
		if (!(name in nodes)) {
			const error = new Error(`Node "${name}" is not a valid name.`);
			options?.onError?.(name, error);
			return null;
		}
		if (!nodes[name as TName]) {
			const error = new Error(`Node "${name}" not found in registry.`);
			options?.onError?.(name, error);
			return null;
		}
		const entry = cache.get(name);
		if (!entry || isStale(entry) || typeof entry.value === "undefined") {
			return null;
		}
		return entry.value;
	};

	const preload = (name: TName | (string & {})) =>
		!cache.has(name) || isStale(cache.get(name)!) ? loadNode(name).catch(() => {}) : null;

	const preloadAll = () => {
		for (const name in nodes) preload(name);
	};

	const reset = (name?: TName) => (name ? cache.delete(name) : cache.clear());

	const isLoaded = (name: TName) => cache.has(name) && !isStale(cache.get(name)!);

	return {
		get,
		getSync,
		preload,
		preloadAll,
		reset,
		isLoaded,
		nodes,
	};
}
