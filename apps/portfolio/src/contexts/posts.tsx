import { createFlexibleContext } from "./flexibleContext";
import { postSchema } from "@/lib/schemas";
import { useState } from "react";
import { z } from "zod";

type Post = z.infer<typeof postSchema>;
type PostsContext = {
	posts: Post[];
	setPosts: (posts: Post[]) => void;
};
const { Provider, useFlexibleContext: usePosts } = createFlexibleContext<PostsContext>({
	errorMessage: "usePosts must be used within a PostsProvider",
});

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
	const [posts, setPosts] = useState<Post[]>([]);
	return <Provider value={{ posts, setPosts }}>{children}</Provider>;
};
export { usePosts };
