import MDXContent from "@/components/mdx-content";
import { getDocBySlug, getDocCategories, getDocs } from "@/lib/docs";
import { formatTitle } from "@/lib/utils";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@mingull/ui/comps/breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
	const params = await props.params;
	const doc = await getDocBySlug(params.slug);
	return {
		title: `${doc?.metadata.title} - Mingull/docs`,
		description: doc?.metadata.summary,
	};
}

export default async function DocsPage(props: { params: Promise<{ slug?: string[] }> }) {
	// const { data: session } = await authClient.getSession();
	// if (!session) redirect("/sign-in");

	const params = await props.params;
	const doc = await getDocBySlug(params.slug);
	const docs = await getDocs();
	const docCategories = await getDocCategories();
	return (
		<section className="py-24">
			<div className="container flex-1 items-start md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-10">
				<div className="h-full w-full overflow-x-hidden overflow-y-scroll">
					{docCategories.map((category) => (
						<div className="pb-4" key={category}>
							<h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{formatTitle(category)}</h4>
							<div className="grid grid-flow-row auto-rows-max text-sm">
								{docs ?
									docs
										.filter((doc) => doc.category === category)
										.map((doc) => (
											<Link
												key={doc.slug}
												className="text-muted-foreground group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline"
												href={`${doc.href}`}
											>
												{doc.title}
											</Link>
										))
								:	null}
							</div>
						</div>
					))}
				</div>
				<div className="relative lg:gap-10 xl:grid xl:grid-cols-[1fr_300px]">
					<div className="max-w-4xl">
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>Docs</BreadcrumbItem>
								<BreadcrumbSeparator />
								{/* {doc?.metadata.category ?
									<>
										<BreadcrumbItem>{formatTitle(doc.metadata.category)}</BreadcrumbItem>
										<BreadcrumbSeparator />
										<BreadcrumbItem>{doc?.metadata.title}</BreadcrumbItem>
									</>
								:	<BreadcrumbItem>{doc?.metadata.title}</BreadcrumbItem>} */}
								<BreadcrumbItem>{doc?.metadata.title}</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
						{doc ?
							<>
								<div className="space-y-2">
									<h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
										{doc.metadata.title}
									</h1>
									<p className="text-muted-foreground text-base">{doc.metadata.summary}</p>
								</div>
								<div className="prose dark:prose-invert pt-8 pb-12">
									<MDXContent source={doc.content} />
								</div>
							</>
						:	null}
					</div>
				</div>
			</div>
		</section>
	);
}
