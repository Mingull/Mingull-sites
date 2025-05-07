import MDXContent from "@/components/mdx-content";
import { getProjectBySlug } from "@/lib/projects";
import { formatDate } from "@/lib/utils.server";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// export async function generateStaticParams() {
// 	const projects = await getProjects();
// 	const slugs = projects.map((project) => ({ slug: project.slug }));
// 	return slugs.flatMap((slug) => routing.locales.map((locale) => ({ ...slug, locale })));
// }

export default async function Project(props: { params: Promise<{ slug: string; locale: string }> }) {
	const params = await props.params;
	const { slug } = params;
	const project = await getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	const { metadata, content } = project;
	const { title, image, author, publishedAt } = metadata;

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
