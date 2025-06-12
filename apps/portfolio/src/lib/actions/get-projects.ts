import { getHttpCode, getStatus } from "@mingull/api";
import { ApiResponse } from "@mingull/api/types";
import { attempt } from "@mingull/exceptify";
import { Locale } from "next-intl";
import { z } from "zod";
import { projectMetadataSchema } from "../schemas";
import { env } from "@/env";

type ProjectMetadata = z.infer<typeof projectMetadataSchema>;

export const getProjects = async (locale: Locale, limit?: number): Promise<ProjectMetadata[]> => {
	const { data: result, error } = await attempt(() =>
		fetch(`${env.API_URL}/content/projects?limit=${limit ?? 10}&locale=${locale}`).then(
			(res) => res.json() as Promise<ApiResponse<ProjectMetadata[]>>,
		),
	);
	if (error) {
		console.error("Error fetching projects:", error);
		return [];
	}
	if (result?.status !== getHttpCode("Ok") || result?.code !== getStatus("Ok")) {
		console.log("Error fetching projects:", result?.message);
		return [];
	}
	const parsed = projectMetadataSchema.array().safeParse(result?.data);

	if (!parsed.success) {
		console.error("Invalid project metadata received:", parsed.error);
		return [];
	}

	return parsed.data;
};
