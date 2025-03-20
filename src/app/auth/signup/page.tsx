"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { cn } from "@/lib/utils";

// Validation Schema
const signUpSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	username: z.string().min(3, "Username must be at least 3 characters"),
	email: z.string().email("Invalid email format"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function SignUpPage() {
	const [step, setStep] = useState(0);
	const router = useRouter();
	const totalSteps = 3;

	const form = useForm({
		resolver: zodResolver(signUpSchema),
		defaultValues: { name: "", username: "", email: "", password: "" },
	});

	const { handleSubmit, control, trigger, getValues } = form;

	const nextStep = async () => {
		const fields = step === 0 ? (["name", "username"] as const) : (["email", "password"] as const);
		if (await trigger(fields)) setStep((prev) => prev + 1);
	};

	const handleBack = () => setStep((prev) => Math.max(0, prev - 1));

	const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
		console.log(values);
		toast.success("Form successfully submitted");
		router.push("/dashboard");
	};

	return (
		<div className="flex min-h-screen flex-col items-center justify-center space-y-4">
			{/* Step Indicator */}
			<div className="flex items-center justify-center">
				{Array.from({ length: totalSteps }).map((_, index) => (
					<div key={index} className="flex items-center">
						<div className={cn("h-4 w-4 rounded-full", index <= step ? "bg-primary" : "bg-primary/30")} />
						{index < totalSteps - 1 && (
							<div className={cn("h-0.5 w-8", index < step ? "bg-primary" : "bg-primary/30")} />
						)}
					</div>
				))}
			</div>

			<Card className="w-full max-w-md shadow-sm">
				<CardHeader>
					<CardTitle className="text-2xl">Sign Up</CardTitle>
					<CardDescription>
						Step {step + 1} of {totalSteps}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
							{/* Step 1: Name & Username */}
							{step === 0 && (
								<>
									<FormField
										control={control}
										name="name"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Name</FormLabel>
												<FormControl>
													<Input {...field} placeholder="Full Name" />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
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
								</>
							)}

							{/* Step 2: Email & Password */}
							{step === 1 && (
								<>
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

							{/* Step 3: Confirmation */}
							{step === 2 && (
								<>
									<p className="text-center">Confirm your details:</p>
									<div className="space-y-2 rounded-lg border p-4">
										<p>
											<strong>Name:</strong> {getValues("name")}
										</p>
										<p>
											<strong>Username:</strong> {getValues("username")}
										</p>
										<p>
											<strong>Email:</strong> {getValues("email")}
										</p>
									</div>
								</>
							)}

							{/* Navigation Buttons */}
							<div className="flex justify-between">
								<Button type="button" variant="outline" disabled={step === 0} onClick={handleBack}>
									Back
								</Button>
								<Button
									type={step === totalSteps - 1 ? "submit" : "button"}
									onClick={step < totalSteps - 1 ? nextStep : undefined}
								>
									{step === totalSteps - 1 ? "Submit" : "Next"}
								</Button>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
