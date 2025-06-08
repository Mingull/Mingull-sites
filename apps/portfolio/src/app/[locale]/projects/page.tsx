"use client";
import Projects from "@/components/projects";
import { getProjects } from "@/lib/actions/get-projects";
import { Skeleton } from "@mingull/ui/comps/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export default function ProjectsPage() {
	const locale = useLocale();
	const {
		data: projects,
		isLoading,
		isError,
	} = useQuery({ queryKey: ["projects", locale], queryFn: () => getProjects(locale) });

	return (
		<section className="py-24">
			<div className="container max-w-3xl xl:max-w-4xl">
				<h1 className="title mb-12">Projects</h1>

				{isLoading ?
					<ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
						{Array.from({ length: 4 }).map((_, i) => (
							<li key={i} className="group relative">
								<div className="bg-muted h-72 w-full overflow-hidden sm:h-60">
									<Skeleton className="rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105" />
								</div>

								<div className="bg-background/70 absolute inset-[1px] rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
								<div className="absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
									<Skeleton className="title line-clamp-1 text-xl no-underline" />
									<Skeleton className="to-muted-foreground line-clamp-1 text-sm" />
									<Skeleton className="text-muted-foreground text-xs font-light" />
								</div>
							</li>
						))}
					</ul>
				: isError ?
					<ul className="flex flex-col gap-8">
						<li className="border-border flex flex-col justify-between gap-x-4 gap-y-1 rounded border p-4 sm:flex-row">
							<p className="text-muted-foreground">An error occurred while fetching posts.</p>
						</li>
					</ul>
				:	<Projects projects={projects} />}
			</div>
		</section>
	);
}
