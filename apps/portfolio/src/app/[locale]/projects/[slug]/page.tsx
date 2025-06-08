// export async function generateStaticParams() {
// 	const projects = await getProjects();
// 	const slugs = projects.map((project) => ({ slug: project.slug }));
// 	return slugs.flatMap((slug) => routing.locales.map((locale) => ({ ...slug, locale })));
// }

import MDXContent from "@/components/mdx-content";
import { Link } from "@/i18n/navigation";
import { getProjectBySlug } from "@/lib/actions/get-project-by-slug";
import { formatDate } from "@/lib/utils.server";
import { Button, Typography } from "@mingull/ui/comps";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";

export default async function Project({ params }: { params: Promise<{ slug: string; locale: string }> }) {
	const { slug, locale } = await params;
	const project = await getProjectBySlug(locale, slug);

	if (!project) notFound();

	const { metadata, content } = project;
	const { title, image, author, publishedAt } = metadata;

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
	return (
		<section className="py-24">
			<div className="container max-w-3xl xl:max-w-4xl">
				<Link
					href="/projects"
					className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors"
				>
					<ArrowLeftIcon className="size-5" />
					<span>Back to projects</span>
				</Link>

				{image ?
					<div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
						<Image src={image} alt={title || ""} className="object-cover" fill />
					</div>
				:	null}
				<header>
					<h1 className="title">{title}</h1>
					<p className="text-muted-foreground mt-3 text-xs">
						{author} / {formatDate(publishedAt ?? "")}
					</p>
				</header>

				<main className="prose dark:prose-invert mt-16">
					<MDXContent source={content} />
				</main>

				{/* <footer className="mt-16">
					<NewsletterForm />
				</footer> */}
			</div>
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
