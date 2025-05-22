"use client";
import Posts from "@/components/posts";
import { getPosts } from "@/lib/actions/get-posts";
import { Button, Input, Skeleton } from "@mingull/ui/comps";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { useMemo, useState } from "react";

export default function PostsPage() {
	const locale = useLocale();
	const {
		data: posts,
		isLoading,
		isError,
	} = useQuery({ queryKey: ["posts", locale], queryFn: () => getPosts(locale) });	

	const [query, setQuery] = useState("");
	const isFiltered = query.length > 0;

	const filteredPosts = useMemo(() => {
		if (isLoading || isError) return [];
		return (posts ?? [])
			.filter((post) => post.title?.toLowerCase().includes(query.toLowerCase()))
			.filter((post) => post.publishedAt && new Date(post.publishedAt).getTime() <= Date.now());
	}, [posts, query, isLoading, isError]);
	
	return (
		<section className="py-24">
			<div className="container max-w-3xl xl:max-w-4xl">
				<h1 className="title mb-12">Posts</h1>
				<div className="mb-12 flex items-center gap-3">
					<Input
						type="text"
						placeholder="Search Posts..."
						className="h-9 w-full sm:w-1/2"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					{isFiltered && (
						<Button size="sm" variant="secondary" onClick={() => setQuery("")} className="h-8 px-2 lg:px-3">
							Reset
							<Cross2Icon className="ml-2 size-4" />
						</Button>
					)}
				</div>
				{isLoading ?
					<ul className="flex flex-col gap-8">
						{[1, 2, 3, 4].map((_, i) => (
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
					<ul className="flex flex-col gap-8">
						<li className="border-border flex flex-col justify-between gap-x-4 gap-y-1 rounded border p-4 sm:flex-row">
							<p className="text-muted-foreground">An error occurred while fetching posts.</p>
						</li>
					</ul>
				:	<Posts posts={filteredPosts} />}
			</div>
		</section>
	);
}
