import { MDXRemoteProps } from "next-mdx-remote";
import { attempt } from "@mingull/exceptify/attempt";
export const getMdxComponents = (components: Record<string, string>) => {
	const mdxComponents: { [x: string]: any } = {};
	// Convert the components object to a format that MDX can understand
	Object.entries(components).forEach(async ([key, value]) => {
		const { data, error } = await attempt(import(`@/components/${value}`).then((mod) => mod.default || mod[key]));
		mdxComponents[key] = !error ? data : null;
	});
	return mdxComponents satisfies MDXRemoteProps["components"];
};
