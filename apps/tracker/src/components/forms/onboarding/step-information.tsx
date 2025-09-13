"use client";

import { Button } from "@mingull/ui/comps/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@mingull/ui/comps/card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@mingull/ui/comps/form";
import { Input } from "@mingull/ui/comps/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@mingull/ui/comps/select";
import { FormStep } from "./steps";
import { userProfileSchema } from "./schemas";
import { useTranslations } from "next-intl";

export const StepInfo = () => {
	const t = useTranslations("onboarding.step-profile");
	return (
		<FormStep
			className="col-span-2"
			schema={({ t }) => userProfileSchema(t)}
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
								name="gender"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="gender" className="font-semibold">
											{t("gender.title")}
										</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl className="w-full">
												<SelectTrigger>
													<SelectValue placeholder="Select your gender" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="male">{t("gender.options.male")}</SelectItem>
												<SelectItem value="female">{t("gender.options.female")}</SelectItem>
												<SelectItem value="other">{t("gender.options.other")}</SelectItem>
												<SelectItem value="prefer-not-to-say">{t("gender.options.prefer-not-to-say")}</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage className="mt-1 text-red-600" />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="weight"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="weight" className="font-semibold">
											{t("weight.title")}
										</FormLabel>
										<FormControl>
											<div className="shadow-xs flex rounded-md">
												<Input
													placeholder="Your weight"
													{...field}
													value={typeof field.value === "string" || typeof field.value === "number" ? field.value : ""}
													className="-me-px rounded-e-none shadow-none focus-visible:z-10"
												/>
												<FormField
													control={form.control}
													name="weightUnit"
													render={({ field }) => (
														<Select onValueChange={field.onChange} defaultValue={field.value}>
															<SelectTrigger>
																<SelectValue placeholder="Unit" />
															</SelectTrigger>
															<SelectContent>
																<SelectItem value="kg">kg</SelectItem>
																<SelectItem value="lbs">lbs</SelectItem>
															</SelectContent>
														</Select>
													)}
												/>
											</div>
										</FormControl>
										<FormMessage className="mt-1 text-red-600" />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="height"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-semibold">{t("height.title")}</FormLabel>
										<FormControl>
											<div className="shadow-xs flex rounded-md">
												<Input placeholder="Your height" {...field} value={typeof field.value === "string" || typeof field.value === "number" ? field.value : ""} />
												<FormField
													control={form.control}
													name="heightUnit"
													render={({ field }) => (
														<Select onValueChange={field.onChange} defaultValue={field.value}>
															<SelectTrigger>
																<SelectValue placeholder="Unit" />
															</SelectTrigger>
															<SelectContent>
																<SelectItem value="cm">cm</SelectItem>
																<SelectItem value="in">inches</SelectItem>
															</SelectContent>
														</Select>
													)}
												/>
											</div>
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
						<Button type="submit" onClick={next} disabled={isLastStep}>
							Next
						</Button>
					</div>
				</>
			)}
		/>
	);
};
