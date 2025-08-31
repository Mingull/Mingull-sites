"use client";
import { useTranslations } from "next-intl";
import { z } from "zod/v4";

export const onboardingSchema = (t: ReturnType<typeof useTranslations<never>>) => {
	return z.object({
		name: z.string().min(2, { error: t("onboarding.errors.name-too-short", { min: 2 }) }),
		username: z.string().min(3, { error: t("onboarding.errors.username-too-short", { min: 3 }) }),
		birthday: z.date({ error: t("onboarding.errors.invalid-birthdate") }).max(new Date(), { error: t("onboarding.errors.invalid-birthdate-future") }),
	});
};
export const userProfileSchema = (t: ReturnType<typeof useTranslations<never>>) => {
	return z.object({
		gender: z.enum(["male", "female", "other"], { error: t("onboarding.errors.gender-required") }),
		weight: z.coerce
			.number()
			.min(30, { error: t("onboarding.errors.weight-too-low", { min: 30, unit: "kg" }) })
			.max(500, { error: t("onboarding.errors.weight-too-high", { max: 500, unit: "kg" }) }),
		weightUnit: z.enum(["kg", "lbs"], { error: t("onboarding.errors.weight-unit-invalid") }),
		height: z.coerce
			.number()
			.min(100, { error: t("onboarding.errors.height-too-low", { min: 100, unit: "cm" }) })
			.max(250, { error: t("onboarding.errors.height-too-high", { max: 250, unit: "cm" }) }),
		heightUnit: z.enum(["cm", "in"], { error: t("onboarding.errors.height-unit-invalid") }),
	});
};
export const userGoalsSchema = (t: ReturnType<typeof useTranslations<never>>) => {
	return z.object({
		goal: z.enum(["gain", "lose", "maintain"], { error: t("onboarding.errors.goal-invalid") }),
		activityLevel: z.enum(["none", "very_low", "low", "medium", "high", "very_high"], { error: t("onboarding.errors.activity-level-invalid") }),
		bio: z
			.string()
			.max(300, { error: t("onboarding.errors.bio-too-long", { max: 300 }) })
			.optional(),
	});
};

const convertKgToLbs = (kg: number) => kg / 0.453592;
const convertCmToIn = (cm: number) => cm / 2.54;
