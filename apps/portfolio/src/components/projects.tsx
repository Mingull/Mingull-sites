"use client";
import { Link } from "@/i18n/navigation";
import { useFormatDate } from "@/lib/utils";
import { projectMetadataSchema } from "@/schemas/projects";
import { AspectRatio } from "@mingull/ui/comps/aspect-ratio";
import { Badge } from "@mingull/ui/comps/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@mingull/ui/comps/card";
import Image from "next/image";
import { z } from "zod";

type ProjectMetadata = z.infer<typeof projectMetadataSchema>;

export default function Projects({ projects }: { projects?: ProjectMetadata[] }) {
	const formatDate = useFormatDate();

	if (!projects || projects.length === 0) {
		return (
			<div className="text-muted-foreground mt-8 flex flex-col items-center justify-center text-center">
				<p>No projects available</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
			{projects.map((project) => (
				<Link
					key={project.slug}
					href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
					className="group"
					aria-label={`View project: ${project.title}`}
				>
					<Card className="relative overflow-hidden pt-0">
						{project.image ?
							<div className="relative mb-6 h-60">
								<AspectRatio ratio={16 / 9} className="overflow-hidden">
									<Image
										src={project.image}
										alt={project.title || ""}
										fill
										className="rounded-t-xl object-cover object-center transition-transform duration-500 group-hover:scale-105"
										loading="lazy"
									/>
								</AspectRatio>
							</div>
						:	null}
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription>{formatDate(project.publishedAt ?? "")}</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground line-clamp-2 text-sm">{project.summary}</p>
						</CardContent>
						<CardFooter className="flex flex-wrap gap-1">
							{project.tags?.map((tag) => (
								<Badge key={tag} variant="outline" className="text-xs">
									{tag}
								</Badge>
							))}
						</CardFooter>
					</Card>
				</Link>
			))}
		</div>
	);
}
