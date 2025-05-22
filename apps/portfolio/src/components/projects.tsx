"use client";
import { Link } from "@/i18n/navigation";
import { projectMetadataSchema } from "@/lib/schemas";
import { useFormatDate } from "@/lib/utils";
import Image from "next/image";
import { z } from "zod";

type ProjectMetadata = z.infer<typeof projectMetadataSchema>;

export default function Projects({ projects }: { projects?: ProjectMetadata[] }) {
	const formatDate = useFormatDate();
	return (
		<ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
			{projects && projects.length > 0 ?
				projects.map((project) => (
					<li key={project.slug} className="group relative">
						<Link href={`/projects/${project.slug}`}>
							{project.image ?
								<div className="bg-muted h-72 w-full overflow-hidden sm:h-60">
									<Image
										src={project.image}
										alt={project.title || ""}
										fill
										className="rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105"
										loading="lazy"
									/>
								</div>
							:	null}

							<div className="bg-background/70 absolute inset-[1px] rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
							<div className="absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
								<h2 className="title line-clamp-1 text-xl no-underline">{project.title}</h2>
								<p className="to-muted-foreground line-clamp-1 text-sm">{project.summary}</p>
								<p className="text-muted-foreground text-xs font-light">
									{formatDate(project.publishedAt ?? "")}
								</p>
							</div>
						</Link>
					</li>
				))
			:	<li className="border-border flex flex-col justify-between gap-x-4 gap-y-1 rounded border p-4 sm:flex-row">
					{/* not project available */}
					<div className="flex w-full max-w-lg gap-x-4">No projects available</div>
				</li>
			}
		</ul>
	);
}
