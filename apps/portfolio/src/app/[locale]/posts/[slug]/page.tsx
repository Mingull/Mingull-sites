import MDXContent from "@/components/mdx-content";
import { getMdxComponents } from "@/lib/get-components";
import { getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils.server";
import { Button } from "@mingull/ui/button";
import { Separator } from "@mingull/ui/separator";
import { Typography } from "@mingull/ui/typography";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";

// export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
// const { locale } = await params;
// const t = await getTranslations({ locale, namespace: "Metadata" });

// return {
// 	title: t("title"),
// };
// }

export default async function Post({ params }: { params: Promise<{ slug: string; locale: string }> }) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);
	if (!post) notFound();

	const { metadata, content } = post;
	const { title, image, author, publishedAt, components = {} } = metadata;

	const isScheduled = !publishedAt || new Date(publishedAt).getTime() > Date.now();

	if (isScheduled) {
		return (
			<section className="container max-w-3xl px-4 pt-24 pb-16 md:px-6 md:pt-32 md:pb-24">
				<BackLink />
				<div className="mt-8 space-y-4">
					<Typography.H1>
						<Balancer>
							{publishedAt && isScheduled ?
								"This post is scheduled for publication."
							:	"This post has not been published."}
						</Balancer>
					</Typography.H1>
					<Typography.Lead>
						{publishedAt && isScheduled ?
							`${author} / ${formatDate(publishedAt)}`
						:	"Please check back later."}
					</Typography.Lead>
				</div>
			</section>
		);
	}

	const mdxComponents = await getMdxComponents(components);

	return (
		<section className="container max-w-3xl px-4 pt-20 pb-16 md:px-6 md:pt-24 md:pb-24 xl:max-w-6xl">
			<BackLink />
			{image && (
				<div className="relative mb-6 aspect-square h-96 w-full overflow-hidden rounded-2xl shadow-md xl:aspect-[16/9] xl:h-auto">
					<Image
						src={image}
						alt={title || ""}
						className="object-cover"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						priority
					/>
				</div>
			)}
			<header className="mb-8 space-y-3">
				<Typography.H1>
					<Balancer>{title}</Balancer>
				</Typography.H1>
				<Typography.Lead>
					{author} / {formatDate(publishedAt)}
				</Typography.Lead>
				<Separator />
			</header>
			<main className="prose prose-neutral dark:prose-invert prose-sm sm:prose-base max-w-none">
				<MDXContent source={content} components={mdxComponents} />
			</main>
			{/* <footer className="mt-16"><NewsletterForm /></footer> */}
		</section>
	);
}

function BackLink() {
	return (
		<Link href="/posts" passHref>
			<Button variant="ghost" size="sm" className="mb-6">
				<ArrowLeftIcon className="mr-2 size-4" />
				Back to posts
			</Button>
		</Link>
	);
}
