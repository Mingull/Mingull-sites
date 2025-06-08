"use client";
import { Link } from "@/i18n/navigation";
import { getProjects } from "@/lib/actions/get-projects";
import { Skeleton } from "@mingull/ui/comps";
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
		<section className="pb-24">
			<h2 className="title mb-12">Recent Projects</h2>
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
				<p className="text-red-500">Error loading projects</p>
			:	<Projects projects={projects} />}

			<Link
				href="/projects"
				className="text-muted-foreground hover:text-foreground mt-8 inline-flex items-center gap-2 underline decoration-1 underline-offset-2 transition-colors"
			>
				<span>All projects</span>
			</Link>
		</section>
	);
}
