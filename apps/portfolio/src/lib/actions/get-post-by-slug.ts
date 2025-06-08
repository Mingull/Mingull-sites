"use server";
import { getHttpCode, getStatus } from "@mingull/api";
import { ApiResponse } from "@mingull/api/types";
import { attempt } from "@mingull/exceptify";
import { Locale } from "next-intl";
import { z } from "zod";
import { postSchema } from "../schemas";

type Post = z.infer<typeof postSchema>;

export const getPostBySlug = async (locale: Locale, slug: string): Promise<Post | null> => {
	const { data: result, error } = await attempt(() =>
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/content/posts/${slug}?locale=${locale}`).then(
			(res) => res.json() as Promise<ApiResponse<Post>>,
		),
	);
	if (error) {
		console.error("Error fetching posts:", error);
		return null;
	}
	if (result?.status !== getHttpCode("Ok") || result?.code !== getStatus("Ok")) {
		console.log("Error fetching posts:", result?.message);
		return null;
	}
	const parsed = postSchema.safeParse(result?.data);

	if (!parsed.success) {
		console.error("Invalid post metadata received:", parsed.error);
		return null;
	}

	return parsed.data;
};
