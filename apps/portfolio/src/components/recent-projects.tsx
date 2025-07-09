"use client";
import { Link } from "@/i18n/navigation";
import { getProjects } from "@/data/projects/get-projects";
import { Skeleton } from "@mingull/ui/comps/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Projects from "./projects";

export default function RecentProjects() {
	const locale = useLocale();
	const {
		data: projects,
		isLoading,
		isError,
	} = useQuery({ queryKey: ["projects", locale], queryFn: () => getProjects(locale, 4) });

	return (
		<section className="pb-24" id="projects">
			<h2 className="title mb-10 text-center text-3xl font-bold sm:text-4xl md:text-start">Recent Projects</h2>

			{isLoading ?
				<ul className="grid grid-cols-1 gap-10 sm:grid-cols-2">
					{Array.from({ length: 4 }).map((_, i) => (
						<li key={i} className="group relative">
							<div className="bg-muted relative h-64 w-full overflow-hidden rounded-lg sm:h-60">
								<Skeleton className="h-full w-full object-cover object-center" />
							</div>

							<div className="absolute inset-x-0 bottom-0 translate-y-2 px-6 py-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
								<Skeleton className="mb-2 h-6 w-2/3" />
								<Skeleton className="mb-1 h-4 w-full" />
								<Skeleton className="h-3 w-1/4" />
							</div>
						</li>
					))}
				</ul>
			: isError ?
				<p className="text-center text-red-500">Error loading projects</p>
			:	<Projects projects={projects} />}

			<div className="mt-10 text-center">
				<Link
					href="/projects"
					className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-4 transition-colors"
				>
					<span>
						Bekijk alle projecten <span aria-hidden="true">→</span>
					</span>
				</Link>
			</div>
		</section>
	);
}
