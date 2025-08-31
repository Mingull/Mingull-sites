"use client";

import { createMultiForm, createStep } from "@mingull/ui/multi-form";
import { Locale } from "next-intl";
import { onboardingSchema, userGoalsSchema, userProfileSchema } from "./schemas";
import { StepComplete } from "./step-complete";
import { StepGoals } from "./step-goals";
import { StepInfo } from "./step-information";
import { StepOnboarding } from "./step-onboarding";

export const steps = () => [
	createStep({
		schema: ({ t }) => onboardingSchema(t),
		component: <StepOnboarding />,
		defaultValues: { name: "", username: "", birthday: undefined },
		stepper: ({ t }) => ({ title: t("onboarding.step-onboarding.title"), summary: t("onboarding.step-onboarding.summary"), description: t("onboarding.step-onboarding.description") }),
	}),
	createStep({
		schema: ({ t }) => userProfileSchema(t),
		component: <StepInfo />,
		defaultValues: ({ t, locale }) => ({
			gender: "male" as const,
			weight: 30,
			height: 100,
			...getDefaultUnits(locale),
		}),
		stepper: ({ t }) => ({ title: t("onboarding.step-profile.title"), summary: t("onboarding.step-profile.summary"), description: t("onboarding.step-profile.description") }),
	}),
	createStep({
		schema: ({ t }) => userGoalsSchema(t),
		component: <StepGoals />,
		defaultValues: { goal: "maintain", activityLevel: "none", bio: "" },
		stepper: ({ t }) => ({ title: t("onboarding.step-goals.title"), summary: t("onboarding.step-goals.summary"), description: t("onboarding.step-goals.description") }),
	}),
	createStep({
		component: <StepComplete />,
		stepper: ({ t }) => ({ title: t("onboarding.step-complete.title"), summary: t("onboarding.step-complete.summary"), description: t("onboarding.step-complete.description") }),
	}),
];

const getDefaultUnits = (locale: Locale) => {
	return locale === "en" ? ({ weightUnit: "lbs", heightUnit: "in" } as const) : ({ weightUnit: "kg", heightUnit: "cm" } as const);
};

export const { useMultiForm, MultiForm, FormStep, useMultiFormContext } = createMultiForm(steps());
