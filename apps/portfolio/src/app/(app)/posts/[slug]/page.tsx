import MDXContent from "@/components/mdx-content";
import { getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { getMdxComponents } from "@/lib/get-components";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// export async function generateStaticParams() {
// 	const posts = await getPosts();
// 	const slugs = posts.map((post) => ({ slug: post.slug }));
// 	return slugs.flatMap((slug) => routing.locales.map((locale) => ({ ...slug, locale })));
// }

export default async function Post(props: { params: Promise<{ slug: string; locale: string }> }) {
	const params = await props.params;

	const { slug } = params;

	const post = await getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	const { metadata, content } = post;
	const { title, image, author, publishedAt, components } = metadata;

	console.log({ components });

	if (!publishedAt || new Date(publishedAt).getTime() > Date.now())
		return (
			<section className="pt-32 pb-24">
				<div className="container max-w-3xl xl:max-w-4xl">
					<Link
						href="/posts"
						className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors"
					>
						<ArrowLeftIcon className="size-5" />
						<span>Back to posts</span>
					</Link>
					<main className="prose dark:prose-invert mt-8 w-full max-w-full">
						<h1 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
							This post is not yet published.
						</h1>
					</main>
				</div>
			</section>
		);
	return (
		<section className="pt-32 pb-24">
			<div className="container max-w-3xl xl:max-w-4xl">
				<Link
					href="/posts"
					className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors"
				>
					<ArrowLeftIcon className="size-5" />
					<span>Back to posts</span>
				</Link>

				{image ?
					<div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
						<Image src={image} alt={title || ""} className="object-cover" fill />
					</div>
				:	null}
				<header>
					<h1 className="decoration-border/75 font-serif text-3xl font-bold underline decoration-2 underline-offset-8">
						{title}
					</h1>
					<p className="text-muted-foreground mt-3 text-xs">
						{author} / {formatDate(publishedAt ?? "")}
					</p>
				</header>

				<main className="prose dark:prose-invert mt-8 w-full max-w-full">
					<MDXContent source={content} components={getMdxComponents({ ...(components || {}) })} />
				</main>

				{/* <footer className="mt-16">
					<NewsletterForm />
				</footer> */}
			</div>
		</section>
	);
}
