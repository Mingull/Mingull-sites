"use server";
import { getHttpCode, getStatus } from "@mingull/api";
import { ApiResponse } from "@mingull/api/types";
import { attempt } from "@mingull/exceptify";
import { Locale } from "next-intl";
import { z } from "zod";
import { skillSchema } from "@/schemas/skills";
import { env } from "@/env/server";

type Skill = z.infer<typeof skillSchema>;

export const getSkills = async (locale: Locale): Promise<Skill[]> => {
	const { data: result, error } = await attempt(() =>
		fetch(`${env.API_URL}/portfolio/skills?locale=${locale}`).then(
			(res) => res.json() as Promise<ApiResponse<Skill[]>>,
		),
	);
	if (error) {
		console.error("Error fetching skills:", error);
		return [];
	}
	if (result?.status !== getHttpCode("Ok") || result?.code !== getStatus("Ok")) {
		console.log("Error fetching skills:", result?.message);
		return [];
	}
	const parsed = skillSchema.array().safeParse(result?.data);

	if (!parsed.success) {
		console.error("Invalid skill metadata received:", parsed.error);
		return [];
	}

	return parsed.data;
};
