"use server";
import { ApiResponse, getHttpCode, getStatus } from "@mingull/api";
import { attempt } from "@mingull/exceptify";
import { Locale } from "next-intl";
import { z } from "zod";
import { projectSchema } from "../schemas";

type Project = z.infer<typeof projectSchema>;

export const getProjectBySlug = async (locale: Locale, slug: string): Promise<Project | null> => {
	const { data: result, error } = await attempt(() =>
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/content/projects/${slug}?locale=${locale}`).then(
			(res) => res.json() as Promise<ApiResponse<Project>>,
		),
	);
	if (error) {
		console.error("Error fetching projects:", error);
		return null;
	}
	if (result?.status !== getHttpCode("Ok") || result?.code !== getStatus("Ok")) {
		console.log("Error fetching projects:", result?.message);
		return null;
	}
	const parsed = projectSchema.safeParse(result?.data);

	if (!parsed.success) {
		console.error("Invalid project metadata received:", parsed.error);
		return null;
	}

	return parsed.data;
};
