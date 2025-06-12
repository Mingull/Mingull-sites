"use server";
import { getHttpCode, getStatus } from "@mingull/api";
import { type ApiResponse } from "@mingull/api/types";
import { attempt } from "@mingull/exceptify";
import { Locale } from "next-intl";
import { z } from "zod";
import { postMetadataSchema } from "../schemas";
import { env } from "@/env";

export type PostMetadata = z.infer<typeof postMetadataSchema>;

export const getPosts = async (locale: Locale, limit?: number): Promise<PostMetadata[]> => {
	const { data: result, error } = await attempt(() =>
		fetch(`${env.API_URL}/content/posts?limit=${limit ?? 10}&locale=${locale}`).then(
			(res) => res.json() as Promise<ApiResponse<PostMetadata[]>>,
		),
	);
	if (error) {
		console.error("Error fetching posts:", error);
		return [];
	}
	if (result?.status !== getHttpCode("Ok") || result?.code !== getStatus("Ok")) {
		console.log("Error fetching posts:", result?.message);
		return [];
	}
	const parsed = postMetadataSchema.array().safeParse(result?.data);

	if (!parsed.success) {
		console.error("Invalid post metadata received:", parsed.error);
		return [];
	}

	return parsed.data;
};
