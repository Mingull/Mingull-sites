"use client";
import { Link } from "@/i18n/navigation";
import { useFormatDate } from "@/lib/utils";
import { postMetadataSchema } from "@/schemas/posts";
import { AspectRatio } from "@mingull/ui/comps/aspect-ratio";
import { Badge } from "@mingull/ui/comps/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@mingull/ui/comps/card";
import Image from "next/image";
import { z } from "zod";

type PostMetadata = z.infer<typeof postMetadataSchema>;

export default function Posts({ posts }: { posts?: PostMetadata[] }) {
	const formatDate = useFormatDate();

	if (!posts || posts.length === 0) {
		return (
			<div className="text-muted-foreground mt-8 flex flex-col items-center justify-center text-center">
				<p>No posts found.</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
			{posts.map((post) => (
				<Link
					key={post.slug}
					href={{ pathname: "/posts/[slug]", params: { slug: post.slug } }}
					className="group"
					aria-label={`View post: ${post.title}`}
				>
					<Card className="relative overflow-hidden pt-0">
						{post.image ?
							<div className="relative mb-6 h-60">
								<AspectRatio ratio={16 / 9} className="overflow-hidden rounded-t-xl">
									<Image
										src={post.image}
										alt={post.title ?? ""}
										className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
										fill
										loading="lazy"
									/>
								</AspectRatio>
							</div>
						:	null}

						<CardHeader>
							<CardTitle>{post.title}</CardTitle>
							<CardDescription>{post.publishedAt ? formatDate(post.publishedAt) : null}</CardDescription>
						</CardHeader>

						<CardContent>
							<p className="text-muted-foreground line-clamp-2 text-sm">{post.summary}</p>
						</CardContent>

						{/* Optional footer, e.g. tags or read time if you want */}
						<CardFooter className="flex flex-wrap gap-1">
							<Badge variant="outline" className="text-xs">
								Example
							</Badge>
						</CardFooter>
					</Card>
				</Link>
			))}
		</div>
	);
}
