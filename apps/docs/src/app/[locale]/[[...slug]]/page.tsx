import MDXContent from "@/components/mdx-content";
import { TocSidebar } from "@/components/toc";
import { getCategories, getDocBySlug, getDocs, getTableOfContents, TocItem } from "@/lib/docs";
import { formatTitle } from "@/lib/utils";
import { cn } from "@mingull/lib";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@mingull/ui/comps/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@mingull/ui/comps/card";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

// --- Metadata ---
export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
	const { slug } = await params;
	const doc = await getDocBySlug(slug);
	return {
		title: doc ? `${doc.metadata.title} - Mingull/docs` : "Docs - Mingull",
		description: doc?.metadata.summary,
	};
}

// --- Sidebar (Categories) ---
function CategorySidebar({ docs, categories }: { docs: Awaited<ReturnType<typeof getDocs>>; categories: string[] }) {
	return categories.map((category) => (
		<div className="pb-4" key={category}>
			<h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{formatTitle(category)}</h4>
			<div className="grid grid-flow-row auto-rows-max text-sm">
				{docs
					.filter((doc) => doc.category === category)
					.map((doc) => (
						<Link key={doc.slug} className="text-muted-foreground group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline" href={doc.href}>
							{doc.title}
						</Link>
					))}
			</div>
		</div>
	));
}

// --- Page ---
export default async function DocsPage({ params }: { params: Promise<{ slug?: string[] }> }) {
	const { slug } = await params;

	// parallel fetching
	const [doc, docs, categories] = await Promise.all([getDocBySlug(slug), getDocs(), getCategories()]);
	const toc = doc ? await getTableOfContents(doc) : [];

	return (
		<section className="flex items-center justify-center p-4 md:container md:px-8 md:py-12">
			<div className="flex flex-1 flex-col gap-6 md:flex-row lg:gap-10">
				{/* Left sidebar: categories */}
				<aside className="hidden w-40 shrink-0 overflow-y-auto md:block">
					<CategorySidebar docs={docs} categories={categories} />
				</aside>

				{/* Main content */}
				<div className="flex w-full flex-col items-center">
					<div>
						{/* Breadcrumb */}
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>Docs</BreadcrumbItem>
								<BreadcrumbSeparator />
								{doc?.metadata.category ?
									<>
										<BreadcrumbItem>{formatTitle(doc.metadata.category)}</BreadcrumbItem>
										<BreadcrumbSeparator />
									</>
								:	null}
								<BreadcrumbItem>{doc?.metadata.title}</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>

						{/* Content */}
						{doc ?
							<>
								<header className="space-y-2">
									<h1 className="scroll-m-20 text-3xl font-bold tracking-tight">{doc.metadata.title}</h1>
									<p className="text-muted-foreground text-base">{doc.metadata.summary}</p>
								</header>

								<article className="prose dark:prose-invert pb-12 pt-8">
									<MDXContent source={doc.content} />
								</article>
							</>
						:	null}
					</div>
				</div>

				{/* Right sidebar: table of contents */}
				<TocSidebar toc={toc} />
				{/* <SidebarTOC /> */}
			</div>
		</section>
	);
}
