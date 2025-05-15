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
				<ul className="flex flex-col gap-8">
					{Array.from({ length: 4 }).map((_, i) => (
						<li
							key={i}
							className="border-border flex flex-col justify-between gap-x-4 gap-y-1 rounded border p-4 sm:flex-row"
						>
							<div className="flex w-full max-w-lg gap-x-4">
								<div className="bg-muted relative h-[72px] min-w-28 overflow-hidden rounded">
									<Skeleton className="absolute inset-0" />
								</div>

								<div className="flex flex-1 flex-col">
									<Skeleton className="h-5 w-3/4" />
									<Skeleton className="mt-2 h-4 w-full" />
									<Skeleton className="mt-1 h-4 w-5/6" />
								</div>
							</div>

							<div className="mt-2 flex-shrink-0 sm:mt-0 sm:ml-4">
								<Skeleton className="h-3.5 w-20" />
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
