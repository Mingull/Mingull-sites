import { BetterOmit } from "@mingull/lib";
import { Locale, useTranslations } from "next-intl";
import { ReactNode } from "react";
import type { DefaultValues, Mode } from "react-hook-form";
import z from "zod";

export type Stepper = {
	/**
	 * The index of the step in the multi-step form.
	 */
	index: number;
	/**
	 * The title of the step.
	 */
	title: string;
	/**
	 * A short summary of the step.
	 */
	summary?: string;
	/**
	 * A detailed description of the step.
	 */
	description?: string;
};

/**
 * Represents a step in the multi-step form.
 * Each step has a schema, a component to render, optional default values,
 * and optional stepper metadata for display in the stepper.
 */
export type DefineStep<T extends z.ZodObject | undefined = undefined> = {
	component: ReactNode;
	stepper: BetterOmit<Stepper, "index"> | (({ t }: { t: ReturnType<typeof useTranslations<never>> }) => BetterOmit<Stepper, "index">);
	schema?: T | (({ t, locale }: { t: ReturnType<typeof useTranslations<never>>; locale: Locale }) => T);
	defaultValues?: T extends z.ZodObject ? Partial<z.infer<T>> | (({ t, locale }: { t: ReturnType<typeof useTranslations<never>>; locale: Locale }) => Partial<z.infer<T>>) : never;
};

export type Step<T extends z.ZodObject = z.ZodObject> = {
	component: ReactNode;
	schema: T | (({ t }: { t: ReturnType<typeof useTranslations<never>> }) => T);
	defaultValues: DefaultValues<z.infer<T>> | (({ t, locale }: { t: ReturnType<typeof useTranslations<never>>; locale: Locale }) => DefaultValues<z.infer<T>>);
	stepper: BetterOmit<Stepper, "index"> | (({ t }: { t: ReturnType<typeof useTranslations<never>> }) => BetterOmit<Stepper, "index">);
};

export type StepComplete<T extends z.ZodObject = z.ZodObject> = {
	component: ReactNode;
	schema: T;
	defaultValues: DefaultValues<z.infer<T>>;
	stepper: BetterOmit<Stepper, "index">;
};

export type InferSchemas<T extends readonly Step[]> = {
	input: T extends readonly [infer First extends Step, ...infer Rest extends Step[]] ? z.input<First["schema"]> & InferSchemas<Rest>["input"]
	: T extends readonly [infer Only extends Step] ? z.input<Only["schema"]>
	: {};
	output: T extends readonly [infer First extends Step, ...infer Rest extends Step[]] ? z.infer<First["schema"]> & InferSchemas<Rest>["output"]
	: T extends readonly [infer Only extends Step] ? z.infer<Only["schema"]>
	: {};
};
