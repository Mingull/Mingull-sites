import axios from "axios";
import { getStatus } from "@mingull/api";
import { ErrorResponse, SuccessResponse } from "@mingull/api/types";
import { PostMetadataSchema } from "../schemas";
import { z } from "zod";
import { getLocale } from "next-intl/server";

type PostMetadata = z.infer<typeof PostMetadataSchema>;

export const getPosts = async (limit?: number): Promise<PostMetadata[]> => {
	const locale = await getLocale();
	const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/content/posts`, {
		params: { limit, locale },
	});
	if (data.code !== getStatus("Ok")) {
		throw new Error(data.message || "Failed to fetch posts");
	}
	return data.data;
};
