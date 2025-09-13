import { zodResolver } from "@hookform/resolvers/zod";
import { BetterOmit, cn, Prettify } from "@mingull/lib";
import { Form } from "@mingull/ui/comps/form";
import { createFlexibleContext } from "@mingull/ui/contexts";
import { ReactNode, useEffect, useState } from "react";
import { DefaultValues, useForm, UseFormReturn, SubmitHandler } from "react-hook-form";
import { z } from "zod";

export type StepperReturn = {
	index: number;
	title: string;
	description: string;
};
export type Stepper = Omit<StepperReturn, "index">;

export type MultiFormProviderProps<T extends z.ZodObject = z.ZodObject> = {
	steps: ReactNode[];
	children: ReactNode;
	stepper?: Stepper[];
	schema?: readonly T[];
	onSubmit?: SubmitHandler<FlatSchema<T>>;
};

export type FlatSchema<T> =
	T extends z.ZodObject[] ?
		T extends readonly [infer S, ...infer Rest extends readonly z.ZodObject[]] ?
			Prettify<z.infer<S> & FlatSchema<Rest>>
		:	Prettify<z.infer<T>>
	: T extends z.ZodObject ? Prettify<z.infer<T>>
	: never;

export type FormStepRenderProps<T extends z.ZodObject> = {
	form: UseFormReturn<z.input<T>, any, z.infer<T>>;
	stepper?: StepperReturn;
	currentIndex: number;
	isFirstStep: boolean;
	isLastStep: boolean;
	back: () => void;
	next: () => void;
	goTo: (index: number) => void;
};

export type FormStepProps<T extends z.ZodObject> = {
	schema: T;
	defaultValues?: DefaultValues<z.input<T>>;
	onSubmit?: SubmitHandler<z.infer<T>>;
	render: (props: FormStepRenderProps<T>) => React.ReactNode;
} & BetterOmit<React.HTMLAttributes<HTMLFormElement>, "onSubmit" | "children" | "defaultValue">;

type SchemaType = z.ZodObject;
type SchemaArray = readonly SchemaType[];

const { Provider, useFlexibleContext } = createFlexibleContext<{
	steps: ReactNode[];
	stepper?: StepperReturn[];
	currentStepIndex: number;
	step: ReactNode;
	isFirstStep: boolean;
	isLastStep: boolean;
	schema: SchemaArray;
	setSchemas: React.Dispatch<React.SetStateAction<SchemaArray>>;
	goTo: (index: number) => void;
	next: () => void;
	back: () => void;
}>();

export const MultiFormProvider = <T extends SchemaType>({ steps, stepper, children, schema: schemas = [], onSubmit }: MultiFormProviderProps<T>) => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [allSchemas, setSchemas] = useState<SchemaArray>(schemas);

	const next = () => setCurrentStepIndex((i) => Math.min(i + 1, steps.length - 1));
	const back = () => setCurrentStepIndex((i) => Math.max(i - 1, 0));
	const goTo = (index: number) => setCurrentStepIndex(index);

	const handleFinalSubmit = async () => {
		let isValid = true;
		for (const schema of schemas) {
			const currentForm = useForm({ resolver: zodResolver(schema) });
			const valid = await currentForm.trigger();
			if (!valid) {
				isValid = false;
				break;
			}
		}

		// if (isValid && onSubmit) {
		// 	const allValues = Object.assign({}, ...schemas.map((s) => form.getValues()));
		// 	onSubmit(allValues as FlatSchema<T>);
		// }
	};

	return (
		<Provider
			value={{
				steps,
				stepper: stepper?.map((step, index) => ({ ...step, index: index + 1 })),
				currentStepIndex,
				step: steps[currentStepIndex],
				isFirstStep: currentStepIndex === 0,
				isLastStep: currentStepIndex === steps.length - 1,
				schema: allSchemas,
				setSchemas,
				goTo,
				next,
				back,
			}}
		>
			{children}
		</Provider>
	);
};

export const useMultiStepForm = () =>
	useFlexibleContext({
		errorMessage: "useMultiStepForm must be used within a MultiFormProvider",
	});

export const FormStep = <S extends SchemaType>({ schema, defaultValues, render, onSubmit, className, ...formProps }: FormStepProps<S>) => {
	const { stepper, currentStepIndex, isFirstStep, isLastStep, next: nextCore, back, goTo } = useMultiStepForm();

	const form = useForm<z.input<S>, any, z.infer<S>>({
		resolver: zodResolver(schema),
		defaultValues,
	});

	const next = async () => {
		const isValid = await form.trigger();
		if (!isValid) return;
		if (onSubmit) await form.handleSubmit(onSubmit)();
		nextCore();
	};

	return (
		<Form {...form}>
			<form onSubmit={onSubmit ? form.handleSubmit(onSubmit) : (e) => e.preventDefault()} className={cn("space-y-6", className)} noValidate {...formProps}>
				{render({
					form,
					stepper: stepper?.[currentStepIndex],
					currentIndex: currentStepIndex,
					isFirstStep,
					isLastStep,
					back,
					next,
					goTo,
				})}
			</form>
		</Form>
	);
};
