"use client";
import { defaults } from "@/app/defaults";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@mingull/lib";
import { authClient } from "@mingull/lib/auth/client";
import { Button } from "@mingull/ui/components/button";
import { Calendar } from "@mingull/ui/components/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@mingull/ui/components/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@mingull/ui/components/form";
import { Input } from "@mingull/ui/components/input";
import { PasswordInput } from "@mingull/ui/components/password-input";
import { Popover, PopoverContent, PopoverTrigger } from "@mingull/ui/components/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Validation Schema
const signUpSchema = z.object({
	firstName: z.string().min(2, "First name must be at least 2 characters"),
	lastName: z.string().min(2, "Last name must be at least 2 characters"),
	username: z.string().min(3, "Username must be at least 3 characters"),
	email: z.string().email("Invalid email format"),
	password: z.string().min(8, "Password must be at least 8 characters"),
	birthday: z.date().refine((date) => date <= new Date(), {
		message: "Birthday must be in the past",
	}),
});

export default function SignUpPage() {
	const [step, setStep] = useState(0);
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(signUpSchema),
		defaultValues: { firstName: "", lastName: "", username: "", email: "", password: "" },
		mode: "all", // Ensures validation updates immediately
	});

	const { handleSubmit, control, trigger, getValues, formState, watch } = form;

	const stepTitles = ["Account Information", "Security Details"];

	// Watching fields for the current step
	const isStepValid = () => {
		if (step === 0) {
			return watch("firstName").length >= 2 && watch("lastName").length >= 2 && watch("username").length >= 3;
		} else if (step === 1) {
			return watch("email")?.includes("@") && watch("password")?.length >= 8;
		}
		return true;
	};

	const nextStep = async () => {
		const fields = step === 0 ? (["firstName", "lastName"] as const) : (["username", "email", "password"] as const);
		if (await trigger(fields)) setStep((prev) => prev + 1);
	};

	const handleBack = () => setStep((prev) => Math.max(0, prev - 1));

	const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
		const { data, error } = await authClient.signUp.email({
			email: values.email,
			password: values.password,
			name: values.firstName + " " + values.lastName,
			username: values.username,
			birthday: values.birthday,
		});
		if (error) {
			toast.error("Failed to sign up. Please try again.");
			return;
		}
		toast.success("Account created successfully. Please sign in.");
		router.push("/signin");
	};

	return (
		<div className="flex h-screen items-center justify-center overflow-hidden">
			<div className="flex h-full w-full flex-col items-center space-y-4 px-2">
				<header className="xl:p-18 flex w-full justify-center p-8 pb-12 xl:pb-48">
					<Link href="/" className="text-primary text-4xl font-bold transition hover:opacity-80">
						{defaults.TITLE}
					</Link>
				</header>
				<h2 className="text-xl font-semibold">{stepTitles[step]}</h2>
				<div className="flex items-center justify-center">
					{Array.from({ length: stepTitles.length }).map((_, index) => (
						<div key={index} className="flex items-center">
							<div className={cn("h-4 w-4 rounded-full", index <= step ? "bg-primary" : "bg-primary/30")}>
								{index === step && <span className="sr-only">Current Step</span>}
							</div>
							{index < stepTitles.length - 1 && (
								<div className={cn("h-0.5 w-8", index < step ? "bg-primary" : "bg-primary/30")} />
							)}
						</div>
					))}
				</div>
				<Card className="w-full max-w-md shadow-sm">
					<CardHeader>
						<CardTitle className="text-2xl">Sign Up</CardTitle>
						<CardDescription>
							{step === 0 ?
								"Create your account by providing your name and username."
							: step === 1 ?
								"Add your email and password to secure your account."
							:	"Confirm your details before creating your account."}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
								{step === 0 && (
									<>
										<FormField
											control={control}
											name="firstName"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Name</FormLabel>
													<FormControl>
														<Input {...field} placeholder="First Name" />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name="lastName"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Name</FormLabel>
													<FormControl>
														<Input {...field} placeholder="Last Name" />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name="birthday"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Birthday</FormLabel>
													<FormControl>
														<Popover>
															<PopoverTrigger asChild>
																<Button
																	variant={"outline"}
																	className={cn(
																		"justify-start text-left font-normal",
																		!field.value && "text-muted-foreground",
																	)}
																>
																	<CalendarIcon className="mr-2 h-4 w-4" />
																	{field.value ?
																		format(field.value, "PPP")
																	:	"Select a date"}
																</Button>
															</PopoverTrigger>
															<PopoverContent className="w-auto p-0">
																<Calendar
																	mode="single"
																	selected={field.value}
																	onSelect={field.onChange}
																	disabled={(date) =>
																		date > new Date() ||
																		date < new Date("1900-01-01")
																	}
																/>
															</PopoverContent>
														</Popover>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</>
								)}
								{step === 1 && (
									<>
										<FormField
											control={control}
											name="username"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Username</FormLabel>
													<FormControl>
														<Input {...field} placeholder="Username" />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name="email"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Email</FormLabel>
													<FormControl>
														<Input {...field} placeholder="Email" />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={control}
											name="password"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Password</FormLabel>
													<FormControl>
														<PasswordInput {...field} placeholder="Password" />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</>
								)}
								<div className="flex justify-between">
									<Button type="button" variant="outline" disabled={step === 0} onClick={handleBack}>
										Back
									</Button>
									<Button
										type="button" // Always a button, avoid auto-submit
										onClick={() => {
											if (step < stepTitles.length - 1) {
												nextStep();
											} else {
												handleSubmit(onSubmit)(); // Manually trigger submit only on last step
											}
										}}
										disabled={!isStepValid()}
									>
										{step === stepTitles.length - 1 ? "Submit" : "Next"}
									</Button>
								</div>
							</form>
						</Form>
						<p className="text-center text-sm text-gray-500">
							Already have an account?{" "}
							<Link href="/signin" className="text-blue-600 hover:underline">
								Sign in
							</Link>
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
