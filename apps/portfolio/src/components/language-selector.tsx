"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@mingull/ui/comps/button";
import { useLocale } from "next-intl";
import { usePathname as useNextPathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSelector({ size }: { size?: "default" | "sm" }) {
	const locale = useLocale();
	const pathname = usePathname();
	const nextPathname = useNextPathname();
	const searchParams = useSearchParams();

	function extractParams<T extends string>(dynamicPath: T, actualPath: string): Record<ExtractParams<T>, string> {
		const dynamicSegments = dynamicPath.split("/").filter(Boolean);
		const actualSegments = actualPath
			.replace(/\/(nl|en)/, "")
			.split("/")
			.filter(Boolean);

		const params: Record<string, string> = {};

		dynamicSegments.forEach((segment, i) => {
			if (segment.startsWith("[") && segment.endsWith("]")) {
				const key = segment.slice(1, -1) as ExtractParams<T>;
				params[key] = actualSegments[i] ?? "";
			}
		});

		return params;
	}

	const isDynamicRoute = pathname.includes("[") && pathname.includes("]");
	const params = isDynamicRoute ? extractParams(pathname, nextPathname) : undefined;
	const query = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);

	const href =
		params ?
			{ pathname: pathname as ExtractDynamicPath<typeof pathname>, params, query }
		:	{ pathname: pathname as ExtractStaticPath<typeof pathname>, query };

	return (
		<Button size={size ?? "sm"} variant="ghost" aria-label="Switch language">
			<Link href={href} locale={locale === "en" ? "nl" : "en"}>
				<ReactCountryFlag
					countryCode={locale === "en" ? "GB" : "NL"}
					className="h-6 w-6 md:h-4 md:w-4"
					svg
					style={{ width: size === "sm" ? "1rem" : "1.5rem", height: size === "sm" ? "1rem" : "1.5rem" }}
				/>
			</Link>
		</Button>
	);
}

type DynamicPath<T extends string> =
	T extends `[...${infer Param}]` ? Param
	: T extends `[[...${infer Param}]]` ? Param
	: T extends `[${infer Param}]` ? Param
	: never;

type ExtractParams<T extends string> =
	T extends `${infer Head}/${infer Tail}` ? DynamicPath<Head> | ExtractParams<Tail> : DynamicPath<T>;

type ExtractDynamicPath<T extends string> =
	T extends `${string}[...${string}]${string}` ? T
	: T extends `${string}[[...${string}]]${string}` ? T
	: T extends `${string}[${string}]${string}` ? T
	: never;

type ExtractStaticPath<T extends string> =
	T extends string ?
		T extends `${string}[${string}]${string}` ?
			never
		:	T
	:	never;

// // Empty path
// type dynamicPath1 = ""; // ❌
// type test1 = ExtractDynamicPath<dynamicPath1>;
// //   ^? > never

// // Standard dynamic segment
// type dynamicPath2 = "/posts/[slug]"; // ✅
// type test2 = ExtractDynamicPath<dynamicPath2>;
// //   ^? >"/posts/[slug]"

// // Dynamic segment not at the start
// type dynamicPath3 = "/posts/comments/[slug]"; // ✅
// type test3 = ExtractDynamicPath<dynamicPath3>;
// //   ^? > "/posts/comments/[slug]"

// // Static path
// type dynamicPath4 = "/posts/comments/slug"; // ❌
// type test4 = ExtractDynamicPath<dynamicPath4>;
// //   ^? > never

// // Multiple dynamic segments
// type dynamicPath5 = "/posts/[slug]/comments/[commentId]"; // ✅
// type test5 = ExtractDynamicPath<dynamicPath5>;
// //   ^? > "/posts/[slug]/comments/[commentId]"

// // Invalid syntax (missing brackets)
// type dynamicPath6 = "/posts/[slug/comments/[commentId"; // ❌
// type test6 = ExtractDynamicPath<dynamicPath6>;
// //   ^? > never

// // Catch-all segment
// type dynamicPath7 = "/docs/[...slug]"; // ✅
// type test7 = ExtractDynamicPath<dynamicPath7>;
// //   ^? > "/docs/[...slug]"

// // Optional catch-all
// type dynamicPath8 = "/docs/[[...slug]]"; // ✅
// type test8 = ExtractDynamicPath<dynamicPath8>;
// //   ^? > "/docs/[[...slug]]"

// // Catch-all with static prefix
// type dynamicPath9 = "/pages/[lang]/[...slug]"; // ✅
// type test9 = ExtractDynamicPath<dynamicPath9>;
// //   ^? > "/pages/[lang]/[...slug]"

// // Optional catch-all with static prefix
// type dynamicPath10 = "/pages/[[...slug]]/comments"; // ✅
// type test10 = ExtractDynamicPath<dynamicPath10>;
// //   ^? > "/pages/[[...slug]]/comments"
