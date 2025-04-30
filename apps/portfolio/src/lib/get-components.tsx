import { attempt } from "@mingull/exceptify/attempt";
import { withFallback } from "@mingull/exceptify/fallback";
import { MDXRemoteProps } from "next-mdx-remote";

const MissingComponent = ({ children }: { children?: React.ReactNode }) => (
	<div className="text-red-500">
		⚠ Missing MDX component
		{children && <div>{children}</div>}
	</div>
);

export const getMdxComponents = async (components: Record<string, string>): Promise<MDXRemoteProps["components"]> => {
	console.log({ components });
	const entries = await Promise.all(
		Object.entries(components).map(async ([key, value]) => {
			const Component = await withFallback(
				attempt(() => import(value).then((mod) => mod.default || mod)),
				MissingComponent,
			);
			return [key, Component] as const;
		}),
	);
	console.log({ entries: Object.fromEntries(entries) });
	return Object.fromEntries(entries);
};
