"use client";

import { Button } from "@mingull/ui/comps/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@mingull/ui/comps/card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@mingull/ui/comps/form";
import { Input } from "@mingull/ui/comps/input";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { onboardingSchema } from "./schemas";
import { FormStep } from "./steps";
import { DateInput } from "@mingull/ui/comps/datetime-picker";
import { DateTimeInput } from "@mingull/ui/comps/datetime-input";
import { CalendarIcon } from "lucide-react";
import { Calendar, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@mingull/ui/comps";

export const StepOnboarding = () => {
	const locale = useLocale();
	const { dateTime } = useFormatter();
	const t = useTranslations("onboarding.step-onboarding");

	return (
		<FormStep
			className="col-span-2"
			schema={({ t }) => onboardingSchema(t)}
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
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="name">{t("name")}</FormLabel>
										<FormControl>
											<Input placeholder="Clark Kent" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="username">{t("username")}</FormLabel>
										<FormControl>
											<Input placeholder="Superman" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="birthday"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="birthday" className="font-semibold">
											{t("birthday")}
										</FormLabel>
										<FormControl>
											<DateInput
												value={field.value}
												onChange={field.onChange}
												format="dd/mm/yyyy"
												calendar={{
													position: "end",
													render: ({ onChange, value, focused, format }) => {
														console.log({ onChange, value, focused, format });
														return (
															<Popover>
																<PopoverTrigger asChild>
																	<CalendarIcon
																		size={16}
																		className="text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors"
																		aria-hidden="true"
																	/>
																</PopoverTrigger>
																<PopoverContent className="w-auto p-2" align="start">
																	<Calendar
																		mode="single"
																		captionLayout="dropdown"
																		today={new Date()}
																		onSelect={field.onChange}
																		selected={field.value ? new Date(field.value) : new Date()}
																		defaultMonth={field.value ? new Date(field.value) : new Date()}
																		disabled={(date) => date > new Date()}
																		components={{
																			DropdownNav: (props) => {
																				return <div className="flex w-full items-center gap-2">{props.children}</div>;
																			},
																			Dropdown: (props) => {
																				const handleCalendarChange = (_value: string | number, _e: React.ChangeEventHandler<HTMLSelectElement>) => {
																					const _event = {
																						target: {
																							value: String(_value),
																						},
																					} as React.ChangeEvent<HTMLSelectElement>;
																					_e(_event);
																				};
																				return (
																					<Select
																						value={String(props.value)}
																						onValueChange={(value) => {
																							if (props.onChange) {
																								handleCalendarChange(value, props.onChange);
																							}
																						}}
																					>
																						<SelectTrigger className="h-8 w-fit font-medium first:grow">
																							<SelectValue />
																						</SelectTrigger>
																						<SelectContent className="max-h-[min(26rem,var(--radix-select-content-available-height))]">
																							{props.options?.map((option) => (
																								<SelectItem key={option.value} value={String(option.value)} disabled={option.disabled}>
																									{option.label}
																								</SelectItem>
																							))}
																						</SelectContent>
																					</Select>
																				);
																			},
																		}}
																	/>
																</PopoverContent>
															</Popover>
														);
													},
												}}
											/>
										</FormControl>
										<FormMessage />
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
