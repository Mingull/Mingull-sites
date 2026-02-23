import { withRateLimit } from "@/lib/middlewares/with-ratelimit";
import { createErrorResponse, createSuccessResponse, getHttpCode, getStatus } from "@mingull/api";
import { NextResponse } from "next/server";
import { enSkills } from "./en-skills";
import { nlSkills } from "./nl-skills";

export const GET = withRateLimit<{ searchParams: { locale: string } }>(async (req, ctx) => {
	const { locale } = await ctx.searchParams;
	if (locale === "en") {
		return NextResponse.json(
			createSuccessResponse({
				code: "Ok",
				message: "Skills fetched successfully",
				data: enSkills,
			}),
			{ status: getHttpCode("Ok"), statusText: getStatus("Ok") },
		);
	} else if (locale === "nl") {
		return NextResponse.json(
			createSuccessResponse({
				code: "Ok",
				message: "Skills fetched successfully",
				data: nlSkills,
			}),
			{ status: getHttpCode("Ok"), statusText: getStatus("Ok") },
		);
	} else {
		return NextResponse.json(
			createErrorResponse({
				code: "BadRequest",
				message: "Invalid locale",
				details: {
					locale,
				},
			}),
			{ status: getHttpCode("BadRequest"), statusText: getStatus("BadRequest") },
		);
	}
});

/**
 * calculates the years of experience based on the start date
 * @returns the years of experience as a number, rounded to one decimal place
 */
export function calculateYearsOfExperience(startDate: string): number {
	const start = new Date(startDate);
	const now = new Date();
	const diffInMs = now.getTime() - start.getTime();
	const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
	return Math.round(diffInYears * 10) / 10; // round to one decimal place
}
