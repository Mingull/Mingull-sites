"use client";
import { Stepper, StepperDescription, StepperIndicator, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from "@mingull/ui/comps/stepper";
import { useTranslations } from "next-intl";
import Balancer from "react-wrap-balancer";
import { MultiForm, useMultiForm } from "./steps";
import { useIsMobile } from "@mingull/ui/hooks/use-mobile";
import { cn } from "@mingull/lib";

export const OnboardingForm = () => {
	const isMobile = useIsMobile();
	const t = useTranslations();

	const { stepper, currentIndex, currentStep, form, ...rest } = useMultiForm({
		onSubmit: (data) => {
			console.log("Submitted data:", data); // data should contain all steps' data
			// maybe redirect or mutate user profile
		},
		hookProps: { mode: "onSubmit" },
	});
	t("onboarding.description");
	return (
		<div className="flex w-full flex-col items-end gap-6">
			<div className="flex w-full flex-col gap-4 md:grid md:grid-cols-3">
				<Stepper orientation={isMobile ? "horizontal" : "vertical"} value={currentIndex + 1}>
					{stepper?.map(({ index, summary, title }) => (
						<StepperItem key={title} step={index} className="md:not-last:flex-1 flex-col! relative flex-1 md:flex-row md:items-start">
							<StepperTrigger className="flex-col gap-3 rounded md:flex-row md:items-start md:pb-12 md:last:pb-0">
								<StepperIndicator />
								<div className="space-y-0.5 px-2 md:mt-0.5 md:text-left">
									<StepperTitle>{title}</StepperTitle>
									{!isMobile ?
										<StepperDescription>{summary}</StepperDescription>
									:	null}
								</div>
							</StepperTrigger>
							{index < stepper.length && (
								<StepperSeparator
									className={cn({
										"absolute inset-y-0 left-3 top-[calc(1.5rem+0.125rem)] -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none":
											!isMobile,
										"absolute inset-x-0 left-[calc(50%+0.75rem+0.125rem)] top-3 -order-1 m-0 -translate-y-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none":
											isMobile,
									})}
								/>
							)}
						</StepperItem>
					))}
				</Stepper>
				<MultiForm value={{ stepper, currentIndex, currentStep, form, ...rest }}>{currentStep.component}</MultiForm>
			</div>
		</div>
	);
};
