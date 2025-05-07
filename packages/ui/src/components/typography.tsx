import { cn } from "@mingull/lib/utils";

export const Typography = {
	H1: ({ children, className, ...props }: React.ComponentProps<"h1">) => (
		<h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props}>
			{children}
		</h1>
	),
	H2: ({ children, className, ...props }: React.ComponentProps<"h2">) => (
		<h2
			className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}
			{...props}
		>
			{children}
		</h2>
	),
	H3: ({ children, className, ...props }: React.ComponentProps<"h3">) => (
		<h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props}>
			{children}
		</h3>
	),
	H4: ({ children, className, ...props }: React.ComponentProps<"h4">) => (
		<h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props}>
			{children}
		</h4>
	),
	P: ({ children, className, ...props }: React.ComponentProps<"p">) => (
		<p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props}>
			{children}
		</p>
	),
	Blockquote: ({ children, className, ...props }: React.ComponentProps<"blockquote">) => (
		<blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props}>
			{children}
		</blockquote>
	),
	List: ({ children, className, ...props }: React.ComponentProps<"ul">) => (
		<ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
			{children}
		</ul>
	),
	InlineCode: ({ children, className, ...props }: React.ComponentProps<"code">) => (
		<code
			className={cn(
				"bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
				className,
			)}
			{...props}
		>
			{children}
		</code>
	),
	Lead: ({ children, className, ...props }: React.ComponentProps<"p">) => (
		<p className={cn("text-muted-foreground text-xl", className)} {...props}>
			{children}
		</p>
	),
	Large: ({ children, className, ...props }: React.ComponentProps<"div">) => (
		<div className={cn("text-lg font-semibold", className)} {...props}>
			{children}
		</div>
	),
	Small: ({ children, className, ...props }: React.ComponentProps<"small">) => (
		<small className={cn("text-sm leading-none font-medium", className)} {...props}>
			{children}
		</small>
	),
	Muted: ({ children, className, ...props }: React.ComponentProps<"p">) => (
		<p className={cn("text-muted-foreground text-sm", className)} {...props}>
			{children}
		</p>
	),
};
export const { H1, H2, H3, H4, P, Blockquote, List, InlineCode, Lead, Large, Small, Muted } = Typography;
export default Typography;
