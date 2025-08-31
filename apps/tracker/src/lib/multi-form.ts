"use client";
import { createStep, type DefineStep, type Step } from "@mingull/ui/multi-form";
import { NestedKeyOf } from "next-intl";
import z from "zod";
import messages from "../../messages/en.json";

type StepIntlOptions = { key: <NestedKey extends NestedKeyOf<typeof messages> = never>(key: NestedKey) => string };

export function createStepIntl<S extends DefineStep<z.ZodObject | undefined>>(step: ({ key }: StepIntlOptions) => S): Step<S["schema"] extends z.ZodObject ? S["schema"] : z.ZodObject> {
	const result = step({ key: (key) => key });

	return createStep(result as any);
}
