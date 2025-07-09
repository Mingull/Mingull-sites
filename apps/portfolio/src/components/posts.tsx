"use client";
import { Link } from "@/i18n/navigation";
import { postMetadataSchema } from "@/schemas/posts";
import { useFormatDate } from "@/lib/utils";
import Image from "next/image";
import { z } from "zod";

type PostMetadata = z.infer<typeof postMetadataSchema>;

export default function Posts({ posts }: { posts?: PostMetadata[] }) {
	const formatDate = useFormatDate();
	return (
		<ul className="flex flex-col gap-8">
			{posts && posts.length > 0 ?
				posts.map((post) => (
					<li key={post.slug}>
						<Link
							href={`/posts/${post.slug}`}
							className="border-border hover:bg-accent/60 flex flex-col justify-between gap-x-4 gap-y-1 rounded border p-4 sm:flex-row"
						>
							<div className="flex max-w-lg gap-x-4">
								{post.image ?
									<div className="relative min-w-28 overflow-hidden rounded">
										<Image src={post.image} alt={post.title ?? ""} className="object-cover" fill />
									</div>
								:	null}
								<div>
									<p className="text-lg">{post.title}</p>
									<p className="text-muted-foreground mt-1 line-clamp-2 text-sm font-light">
										{post.summary}
									</p>
								</div>
							</div>

							{post.publishedAt ?
								<p className="mt-1 text-sm font-light">{formatDate(post.publishedAt)}</p>
							:	null}
						</Link>
					</li>
				))
			:	<li className="border-border flex flex-col justify-between gap-x-4 gap-y-1 rounded border p-4 sm:flex-row">
					<p className="text-muted-foreground">No posts found.</p>
				</li>
			}
		</ul>
	);
}
