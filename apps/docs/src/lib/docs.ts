import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import slugify from "slugify";
import { BetterOmit } from "@mingull/lib";

const configFilePath = path.join(process.cwd(), "docs.config.json");

/**
 * User-provided configuration for docs.
 * Allows specifying category order and per-category doc order.
 */
type UserConfig = Partial<BetterOmit<DocsConfig, "order" | "hrefResolver" | "slugifyFn" | "rootDir">> & {
	/**
	 * Explicit order of categories.
	 */
	categories: string[];
	/**
	 * Ordering of docs inside each category.
	 * Can be an array of slugs, or `"asc"`/`"desc"` for alphabetical ordering.
	 */
	order?: Record<string, string[] | "asc" | "desc">;
};

/**
 * Frontmatter metadata for each document.
 */
type Frontmatter = {
	title?: string;
	summary?: string;
	image?: string;
	author?: string;
	publishedAt?: string;
	hidden?: boolean;
	order?: number;
	[key: string]: any;
};

/**
 * Load the user configuration from `docs.config.json`.
 * Returns an empty object if file doesn't exist or is invalid.
 */
async function loadUserConfig(): Promise<Partial<UserConfig>> {
	try {
		await fs.stat(configFilePath);
		const raw = await fs.readFile(configFilePath, "utf-8");
		return JSON.parse(raw);
	} catch (error) {
		return {};
	}
}

/** ----------------------------
 * Configurable Docs Options
 * ---------------------------- */

/**
 * Full docs configuration including paths, extensions, ordering, and slug/href logic.
 */
export type DocsConfig = {
	/** Root folder where the docs are stored */
	rootDir: string;
	/** Allowed file extensions */
	extensions?: string[];
	/** Default category for ungrouped docs */
	defaultCategory?: string;
	/** Optional slugify override function */
	slugifyFn?: (title: string) => string;
	/** Optional href resolver to generate URLs */
	hrefResolver?: (meta: { category: string; slug: string; isIndex: boolean; parts: string[] }) => string;
	/** Optional ordering for categories and docs */
	order?: {
		categories?: string[];
		docs?: Record<string, string[] | "asc" | "desc">;
	};
};

export const defaultDocsConfig: DocsConfig = {
	rootDir: path.join(process.cwd(), "src/content/docs"),
	extensions: [".mdx"],
	defaultCategory: "getting-started",
	slugifyFn: (title) => slugify(title, { lower: true }),
	hrefResolver: ({ category, slug, isIndex, parts }) => {
		if (isIndex) {
			return parts.length > 1 ? `/${category}` : "/";
		}
		return parts.length > 1 ? `/${category}/${slug}` : `/${slug}`;
	},
};

async function loadConfig(): Promise<DocsConfig> {
	const userConfig = await loadUserConfig();
	return {
		...defaultDocsConfig,
		...userConfig,
		order: {
			categories: userConfig.categories ?? defaultDocsConfig.order?.categories ?? [],
			docs: userConfig.order ?? defaultDocsConfig.order?.docs ?? {},
		},
	};
}

/** ----------------------------
 * Types
 * ---------------------------- */

/**
 * Represents a single documentation file with metadata and content.
 */
export type Doc = {
	metadata: DocMetadata;
	content: string;
};

/**
 * Metadata for a documentation file derived from frontmatter and config.
 */
export type DocMetadata = {
	/** Title of the doc */
	title: string;
	/** Optional short summary */
	summary?: string;
	/** Optional image URL */
	image?: string;
	/** Optional author name */
	author?: string;
	/** Optional publication date */
	publishedAt?: string;
	/** URL for the doc */
	href: string;
	/** Category the doc belongs to */
	category: string;
	/** Slugified version of the title */
	slug: string;
	/** Hide from sidebar if true */
	hidden?: boolean;
	/** Manual order specified in frontmatter */
	order?: number;
};

/** ----------------------------
 * Helpers
 * ---------------------------- */

/**
 * Derive `DocMetadata` from a file path, frontmatter, and docs configuration.
 */
function deriveDocMetadata(filepath: string, frontmatter: Frontmatter, config: DocsConfig): DocMetadata {
	const relative = path.relative(config.rootDir, filepath);
	const parts = relative.split(path.sep);

	const isIndex = path.basename(filepath).startsWith("index.");
	const category = parts.length > 1 ? parts[0]! : (config.defaultCategory ?? "general");

	const title = frontmatter.title ?? path.basename(filepath, path.extname(filepath));
	const slug = config.slugifyFn!(title);

	const href = config.hrefResolver!({ category, slug, isIndex, parts });

	return {
		...frontmatter,
		title,
		category,
		slug,
		href,
		hidden: frontmatter.hidden ?? false,
		order: frontmatter.order ?? undefined,
	};
}
/**
 * Sort docs by category order and then by per-category doc order / frontmatter / fallback alphabetical.
 */
function sortDocs(docs: DocMetadata[], config?: DocsConfig) {
	const catOrder = config?.order?.categories ?? [];

	const grouped: Record<string, DocMetadata[]> = {};
	for (const doc of docs) {
		if (!doc.hidden) {
			grouped[doc.category] ??= [];
			grouped[doc.category]?.push(doc);
		}
	}

	for (const category in grouped) {
		const docOrder = config?.order?.docs?.[category];
		grouped[category]?.sort((a, b) => {
			if (Array.isArray(docOrder)) {
				const aIndex = docOrder.indexOf(a.slug);
				const bIndex = docOrder.indexOf(b.slug);
				if (aIndex !== -1 || bIndex !== -1) {
					if (aIndex === -1) return 1;
					if (bIndex === -1) return -1;
					return aIndex - bIndex;
				}
			} else if (docOrder === "asc") return a.title.localeCompare(b.title);
			else if (docOrder === "desc") return b.title.localeCompare(a.title);

			if (a.order != null || b.order != null) {
				if (a.order == null) return 1;
				if (b.order == null) return -1;
				if (a.order !== b.order) return a.order - b.order;
			}

			return a.title.localeCompare(b.title);
		});
	}

	const categoriesSorted = Object.keys(grouped).sort((a, b) => {
		const aIndex = catOrder.indexOf(a);
		const bIndex = catOrder.indexOf(b);
		if (aIndex !== -1 || bIndex !== -1) {
			if (aIndex === -1) return 1;
			if (bIndex === -1) return -1;
			return aIndex - bIndex;
		}
		return 0;
	});

	const result: DocMetadata[] = [];
	for (const cat of categoriesSorted) {
		result.push(...(grouped[cat] ?? []));
	}

	return result;
}

/** ----------------------------
 * API
 * ---------------------------- */

/**
 * Get a single doc by its slug array.
 */
export async function getDocBySlug(slug?: string[], config?: DocsConfig): Promise<Doc | null> {
	const finalConfig = config ?? (await loadConfig());
	try {
		if (slug?.length === 1 && slug[0]!.includes(".")) return null;

		let filepath: string;
		if (!slug || slug.length === 0) {
			filepath = path.join(finalConfig.rootDir, "index.mdx");
		} else if (slug.length === 1) {
			filepath = path.join(finalConfig.rootDir, slug[0]!, "index.mdx");
		} else {
			filepath = path.join(finalConfig.rootDir, slug[0]!, `${slug[1]}.mdx`);
		}

		const fileContent = await fs.readFile(filepath, "utf-8");
		const { data, content } = matter(fileContent);
		const metadata = deriveDocMetadata(filepath, data, finalConfig);

		return { metadata, content };
	} catch {
		return null;
	}
}

/**
 * Get all docs, optionally limited, sorted according to config.
 */
export async function getDocs(limit?: number, config?: DocsConfig) {
	const finalConfig = config ?? (await loadConfig());
	const filePaths = await fs.readdir(finalConfig.rootDir, { recursive: true });

	let docs = await Promise.all(
		filePaths
			.filter((file) => finalConfig.extensions!.some((ext) => file.endsWith(ext)))
			.map(async (relative) => {
				const filepath = path.join(finalConfig.rootDir, relative);
				const fileContent = await fs.readFile(filepath, "utf-8");
				const { data } = matter(fileContent);
				return deriveDocMetadata(filepath, data, finalConfig);
			}),
	);

	docs = sortDocs(docs, config);

	return limit ? docs.slice(0, limit) : docs;
}

/**
 * Return a list of all categories from the docs.
 */
export async function getCategories(config: DocsConfig = defaultDocsConfig) {
	const finalConfig = config ?? (await loadConfig());
	const docs = await getDocs(undefined, finalConfig);
	return Array.from(new Set(docs.map((doc) => doc.category)));
}

/**
 * Table of contents item representing a heading in a doc.
 */
export type TocItem = {
	/** Text of the heading */
	text: string;
	/** Slugified heading for anchors */
	slug: string;
	/** Heading level (1-6) */
	depth: number;
	/** Nested child headings */
	children: TocItem[];
};

/**
 * Parse a doc content and generate a table of contents (TOC).
 */
export async function getTableOfContents(doc: Doc, config: DocsConfig = defaultDocsConfig): Promise<TocItem[]> {
	const tocIgnoreRE = /^\{\s*\/\*\s*(?:<!--\s*)?@toc-(ignore|break)\s*(?:-->)?\s*\*\/\s*\}$/;

	const lines = doc.content.split("\n");

	type FlatItem = { depth: number; text: string; slug: string };
	const flat: FlatItem[] = [];

	let skipNext = false;
	for (const line of lines) {
		const trimmed = line.trim();

		if (tocIgnoreRE.test(trimmed)) {
			skipNext = true;
			continue;
		}

		const match = /^(#{1,6})\s+(.*)/.exec(trimmed);
		if (!match) continue;

		if (skipNext) {
			skipNext = false;
			continue;
		}

		const depth = skipNext ? match[1]!.length - 1 : match[1]!.length;
		const text = match[2]!.trim();
		const slug = config.slugifyFn ? config.slugifyFn(text) : slugify(text, { lower: true });

		flat.push({ depth, text, slug });
	}

	const root: TocItem[] = [];
	const stack: { depth: number; item: TocItem }[] = [];

	for (const { depth, text, slug } of flat) {
		const item: TocItem = { text, slug, depth, children: [] };
		while (stack.length > 0 && stack[stack.length - 1]!.depth >= depth) {
			stack.pop();
		}

		if (stack.length === 0) {
			root.push(item);
		} else {
			stack[stack.length - 1]!.item.children.push(item);
		}

		stack.push({ depth, item });
	}

	return root;
}
