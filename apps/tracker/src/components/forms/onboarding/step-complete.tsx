"use client";

import { Button } from "@mingull/ui/comps/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@mingull/ui/comps/card";
import { FormStep } from "./steps";

export const StepComplete = () => {
	return (
		<FormStep
			className="col-span-2 w-full"
			render={({ step, back, submit, isFirstStep, isLastStep }) => (
				<>
					<Card className="min-h-80">
						<CardHeader>
							<CardTitle className="text-3xl font-extrabold tracking-tight">{step?.title}</CardTitle>
							<CardDescription>{step?.description}</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4"></CardContent>
					</Card>
					<div className="flex w-full max-w-2xl justify-between">
						<Button type="button" onClick={back} disabled={isFirstStep}>
							Back
						</Button>
						<Button type="button" onClick={submit} disabled={isLastStep}>
							Next
						</Button>
					</div>
				</>
			)}
		/>
	);
};
