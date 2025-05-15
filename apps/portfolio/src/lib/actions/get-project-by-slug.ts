"use server";
import { getStatus } from "@mingull/api";
import { attempt } from "@mingull/exceptify";
import axios from "axios";
import { getLocale } from "next-intl/server";
import { z } from "zod";
import { postMetadataSchema } from "../schemas";

type PostMetadata = z.infer<typeof postMetadataSchema>;

export const getProjectBySlug = async (slug: string): Promise<PostMetadata[]> => {
	console.log("getProjects called", slug);
	const locale = await getLocale();
	const { data, error } = await attempt(() =>
		axios.get(`${process.env.API_URL}/content/projects/${slug}`, {
			params: { locale },
		}),
	);
	if (error) {
		console.error("Error fetching projects:", error);
		return [];
	}
	if (data?.data?.code !== getStatus("Ok")) {
		throw new Error(data?.data?.message || "Failed to fetch projects");
	}

	return data.data?.data || [];
};
