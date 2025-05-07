import { attempt } from "@mingull/exceptify/attempt";
import { withFallback } from "@mingull/exceptify/fallback";
import { ClientUI } from "./client-ui";
import { MDXRemoteProps } from "next-mdx-remote";
import dynamic from "next/dynamic";
import React from "react";

// Fallback component to display when a component fails to load
const MissingComponent = ({ children }: { children?: React.ReactNode }) => (
	<div className="text-red-500">
		⚠ Missing MDX component
		{children && <div>{children}</div>}
	</div>
);

export const getMdxComponents = async (components: Record<string, string>): Promise<MDXRemoteProps["components"]> => {
	const entries = await Promise.all(
		Object.entries(components).map(async ([key, value]) => {
			const path = value.replace(/^@\/components\//, "");

			const logMissing = () => {
				const message = `❌ Failed to dynamically import MDX component "${key}" from "${value}"`;
				if (process.env.NODE_ENV === "development") {
					console.warn(message);
				} else {
					console.error(message);
				}
			};

			const component = withFallback(
				attempt(() =>
					dynamic(() => import(`@/components/${path}`), {
						loading: () => <div>Loading {key}...</div>,
					}),
				),
				() => {
					logMissing();
					return (
						<MissingComponent>
							<span>
								Component failed to load: <code>{value}</code>
							</span>
						</MissingComponent>
					);
				},
			);

			return [key, component] as const;
		}),
		// load all @mingull/ui components except Icons and useFormField
	);

	// Return the resolved components
	return {
		...Object.fromEntries(entries),
	} as MDXRemoteProps["components"];
};
