import { z } from "zod";
import { DefaultValues } from "react-hook-form";
import { DefineStep, Step } from "./types.ts";

/**
 * Creates a step object for the multi-step form.
 */
export function createStep<const T extends z.ZodObject | undefined>(step: DefineStep<T>): Step<T extends z.ZodObject ? T : z.ZodObject> {
	const schema = step.schema ?? z.object({});

	const defaultValues = step.defaultValues ?? {};

	return {
		component: step.component,
		schema: schema as T extends z.ZodObject ? T : z.ZodObject,
		defaultValues: defaultValues as DefaultValues<z.infer<T extends z.ZodObject ? T : z.ZodObject>>,
		stepper: step.stepper,
	};
}
