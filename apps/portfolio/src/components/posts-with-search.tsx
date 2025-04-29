"use client";

import { PostMetadata } from "@/lib/posts";
import { useState } from "react";
import { Input } from "@mingull/ui/components/input";
import { Button } from "@mingull/ui/components/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import Posts from "./posts";

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
	const [query, setQuery] = useState("");
	const filtered = posts
		.filter((post) => post.title?.toLowerCase().includes(query.toLowerCase()))
		.filter((post) => post.publishedAt && new Date(post.publishedAt).getTime() <= Date.now());

	const isFiltered = query.length > 0;
	function resetFilter() {
		setQuery("");
	}
	return (
		<div>
			<div className="mb-12 flex items-center gap-3">
				<Input
					type="text"
					placeholder="Search Posts..."
					className="h-9 w-full sm:w-1/2"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				{isFiltered && (
					<Button size={"sm"} variant={"secondary"} onClick={resetFilter} className="h-8 px-2 lg:px-3">
						Reset
						<Cross2Icon className="ml-2 size-4" />
					</Button>
				)}
			</div>
			<Posts posts={filtered} />
		</div>
	);
}
