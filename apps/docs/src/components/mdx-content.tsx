import Link from "next/link";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { JSX } from "react";
import rehypeSlug from "rehype-slug";
import { highlight } from "sugar-high";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@mingull/ui/comps/accordion";
import { CodeBlock, CodeBlockContent, CodeBlockHeader } from "./code-block";

const Code = ({ children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
	const codeHTMl = highlight(children as string);
	return <code dangerouslySetInnerHTML={{ __html: codeHTMl }} {...props} />;
};

const Heading = (as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
	return function _heading({ id, ...rest }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
		const Comp = as;
		if (id) {
			return (
				<Link href={`#${id}`}>
					<Comp {...rest} id={id} />
				</Link>
			);
		}

		return <Comp {...rest} />;
	};
};

const components = {
	CodeBlock,
	CodeBlockHeader,
	CodeBlockContent,
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	h1: Heading("h1"),
	h2: Heading("h2"),
	h3: Heading("h3"),
	h4: Heading("h4"),
	h5: Heading("h5"),
	h6: Heading("h6"),
};

export default function MDXContent(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
			options={{
				mdxOptions: {
					rehypePlugins: [{ plugins: [rehypeSlug] }],
				},
			}}
		/>
	);
}
