"use client";

import { FormStep } from "./steps";
import { Button } from "@mingull/ui/comps/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@mingull/ui/comps/card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@mingull/ui/comps/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@mingull/ui/comps/select";
import { Textarea } from "@mingull/ui/comps/textarea";
import { userGoalsSchema } from "./schemas";

export const StepGoals = () => {
	return (
		<FormStep
			className="col-span-2 w-full"
			schema={({ t }) => userGoalsSchema(t)}
			render={({ form, step, back, next, isFirstStep, isLastStep }) => (
				<>
					<Card className="min-h-80">
						<CardHeader>
							<CardTitle className="text-3xl font-extrabold tracking-tight">{step?.title}</CardTitle>
							<CardDescription>{step?.description}</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<FormField
								control={form.control}
								name="activityLevel"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-semibold">Activity Level</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl className="w-full">
												<SelectTrigger>
													<SelectValue placeholder="Select your activity level" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="none">None</SelectItem>
												<SelectItem value="very_low">Very Low</SelectItem>
												<SelectItem value="low">Low</SelectItem>
												<SelectItem value="medium">Medium</SelectItem>
												<SelectItem value="high">High</SelectItem>
												<SelectItem value="very_high">Very High</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage className="mt-1 text-red-600" />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="goal"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-semibold">Fitness Goal</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl className="w-full">
												<SelectTrigger>
													<SelectValue placeholder="Select your activity level" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="maintain">Maintain Weight</SelectItem>
												<SelectItem value="gain">Gain Muscle</SelectItem>
												<SelectItem value="loss">Lose Weight</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage className="mt-1 text-red-600" />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="bio"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-semibold">Bio</FormLabel>
										<FormControl>
											<Textarea placeholder="Tell us about yourself" {...field} />
										</FormControl>
										<FormMessage className="mt-1 text-red-600" />
									</FormItem>
								)}
							/>
						</CardContent>
					</Card>
					<div className="flex w-full max-w-2xl justify-between">
						<Button type="button" onClick={back} disabled={isFirstStep}>
							Back
						</Button>
						<Button type="button" onClick={next} disabled={isLastStep}>
							Next
						</Button>
					</div>
				</>
			)}
		/>
	);
};
