"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { BetterOmit, cn } from "@mingull/lib";
import { useLocale, useTranslations } from "next-intl";
import { createContext, useContext, useState } from "react";
import { DefaultValues, Resolver, SubmitHandler, useForm, UseFormProps, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Form } from "../components/form.tsx";
import type { InferSchemas, Step, StepComplete, Stepper } from "./types.ts";

export type MultiFormStepProps<S extends Step[]> = {
	onSubmit: SubmitHandler<InferSchemas<S>["output"]>;
	hookProps?: BetterOmit<UseFormProps<InferSchemas<S>["input"], any, InferSchemas<S>["output"]>, "resolver" | "defaultValues">;
};

type FormStepRenderProps<T extends z.ZodObject> = {
	form: UseFormReturn<z.input<T>, any, z.infer<T>>;
	step: StepComplete<T>["stepper"];
	isFirstStep: boolean;
	isLastStep: boolean;
	back: () => void;
	next: () => void;
	submit: () => void;
	goTo: (index: number) => void;
};

/**
 * Core props for the FormStep component, which renders a single step in the multi-step form.
 */
type FormStepCoreProps<T extends z.ZodObject> = {
	schema?: T | Promise<T> | (({ t }: { t: ReturnType<typeof useTranslations<never>> }) => T | Promise<T>);
	render: (props: FormStepRenderProps<T>) => React.ReactNode;
} & BetterOmit<React.HTMLAttributes<HTMLFormElement>, "onSubmit" | "children">;

export function createMultiForm<const A extends Step<z.ZodObject>[]>(steps: A) {
	const useMultiForm = (props: MultiFormStepProps<A>) => {
		const { onSubmit } = props;
		const t = useTranslations();
		const locale = useLocale();
		const [currentIndex, setIndex] = useState(0);

		const mergedSchema = steps.reduce(
			(acc, { schema }) => {
				if (schema && schema instanceof z.ZodObject) return acc.extend(schema.shape);
				if (schema && typeof schema === "function") {
					const schemaResult = schema({ t });
					if (schemaResult instanceof z.ZodObject) return acc.extend(schemaResult.shape);
					return acc;
				}
				return acc;
			},
			z.object({}) as z.ZodObject,
		) as z.ZodObject<InferSchemas<A>["input"]>;

		const defaultValues = steps.reduce(
			(acc, { defaultValues }) => ({ ...acc, ...(typeof defaultValues === "function" ? defaultValues({ t, locale }) : defaultValues) }),
			{} as DefaultValues<InferSchemas<A>["input"]>,
		);

		const currentStep = {
			...steps[currentIndex]!,
			stepper: {
				index: currentIndex + 1,
				...(typeof steps[currentIndex]?.stepper === "function" ? steps[currentIndex].stepper({ t }) : steps[currentIndex]?.stepper),
			} as Stepper,
		};

		const form = useForm<InferSchemas<A>["input"], any, InferSchemas<A>["output"]>({
			...props.hookProps,
			resolver: zodResolver(mergedSchema) as unknown as Resolver<InferSchemas<A>["input"], any, InferSchemas<A>["output"]>,
			defaultValues,
		});

		const currentSchema =
			steps[currentIndex] ?
				typeof steps[currentIndex]?.schema === "function" ?
					steps[currentIndex]?.schema({ t })
				:	steps[currentIndex]?.schema
			:	undefined;

		const isFirstStep = currentIndex === 0;
		const isLastStep = currentIndex === steps.length - 1;
		const currentFields = currentSchema ? Object.keys(currentSchema.shape) : [];

		const next = async () => {
			let valid;
			if (currentFields.length === 0) valid = true;
			else valid = await form.trigger(currentFields as unknown as never[]);
			if (!valid) return;
			if (isLastStep) return;
			setIndex((i) => i + 1);
			form.clearErrors();
		};

		const back = () => setIndex((i) => Math.max(i - 1, 0));
		const goTo = (index: number) => setIndex(index);

		return {
			form,
			steps: steps.map((step, index) => {
				return {
					...step,
					stepper: {
						index: index + 1,
						...(typeof step.stepper === "function" ? step.stepper({ t }) : step.stepper),
					},
				};
			}),
			stepper: steps.map((step, index) => ({
				index: index + 1,
				...(typeof step.stepper === "function" ? step.stepper({ t }) : step.stepper),
			})) as Stepper[],
			currentIndex,
			currentStep,
			schema: currentSchema,
			isFirstStep,
			isLastStep,
			submit: () => form.handleSubmit(onSubmit)(),
			next,
			back,
			goTo,
		};
	};

	const MultiFormContext = createContext<ReturnType<typeof useMultiForm> | null>(null);

	function useMultiFormContext<T extends z.ZodObject>() {
		const ctx = useContext(MultiFormContext);
		if (!ctx) throw new Error("useMultiFormContext must be used inside a <MultiFormProvider>");
		return ctx as ReturnType<typeof useMultiForm> & { form: UseFormReturn<z.input<T>, any, z.infer<T>> };
	}

	type MultiFormProviderProps = {
		value: ReturnType<typeof useMultiForm>;
		children: React.ReactNode;
	};

	function MultiForm({ value, children }: MultiFormProviderProps) {
		return <MultiFormContext.Provider value={value}>{children}</MultiFormContext.Provider>;
	}

	function FormStep<T extends z.ZodObject>({ render, schema, className, ...formProps }: FormStepCoreProps<T>) {
		const { form, isFirstStep, isLastStep, currentStep, back, goTo, next, submit } = useMultiFormContext<T>();

		return (
			<Form {...form}>
				<form onSubmit={form.handleSubmit(() => next())} className={cn("space-y-6", className)} noValidate {...formProps}>
					{render({ form, step: currentStep["stepper"], isFirstStep, isLastStep, next, back, goTo, submit })}
				</form>
			</Form>
		);
	}

	return {
		useMultiForm,
		MultiForm,
		useMultiFormContext,
		FormStep,
	};
}

export { createStep } from "./helper.ts";
export type { DefineStep, InferSchemas, Step, StepComplete, Stepper } from "./types.ts";
