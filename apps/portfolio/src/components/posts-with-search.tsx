"use client";

import { PostMetadata } from "@/lib/posts";
import { Button } from "@mingull/ui/button";
import { Input } from "@mingull/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useMemo, useState } from "react";
import Posts from "./posts";

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
	const [query, setQuery] = useState("");

	const filteredPosts = useMemo(() => {
		if (!posts) return [];
		return posts
			.filter((post) => post.title?.toLowerCase().includes(query.toLowerCase()))
			.filter((post) => post.publishedAt && new Date(post.publishedAt).getTime() <= Date.now());
	}, [posts, query]);

	const isFiltered = query.length > 0;

	const resetFilter = () => setQuery("");

	return (
		<>
			<div className="mb-12 flex items-center gap-3">
				<Input
					type="text"
					placeholder="Search Posts..."
					className="h-9 w-full sm:w-1/2"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				{isFiltered && (
					<Button size="sm" variant="secondary" onClick={resetFilter} className="h-8 px-2 lg:px-3">
						Reset
						<Cross2Icon className="ml-2 size-4" />
					</Button>
				)}
			</div>

			{/* {loading ?
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
			: error ?
				<p className="text-red-500">Error loading posts</p>
			:	}*/}
			<Posts posts={filteredPosts} />
		</>
	);
}
