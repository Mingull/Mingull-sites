"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Validation Schema
const signUpSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	username: z.string().min(3, "Username must be at least 3 characters"),
	email: z.string().email("Invalid email format"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function SignUpPage() {
	const [step, setStep] = useState(1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(signUpSchema),
		defaultValues: { name: "", username: "", email: "", password: "" },
	});

	const nextStep = () => {
		const stepValidation = [
			{ fields: ["name", "username"], step: 1 },
			{ fields: ["email"], step: 2 },
			{ fields: ["password"], step: 3 },
		];

		const currentStep = stepValidation.find((s) => s.step === step);
		if (currentStep) {
			// const isValid = currentStep.fields.every((field) => form.getFieldState(field).isDirty);
			// if (!isValid) {
			// 	form.trigger(currentStep.fields);
			// 	return;
			// }
		}

		setStep((prev) => prev + 1);
	};

	const prevStep = () => setStep((prev) => prev - 1);

	const handleSignUp = async (values: z.infer<typeof signUpSchema>) => {
		setLoading(true);
		setError(null);

		const { error } = await authClient.signUp.email({
			email: values.email,
			password: values.password,
			name: values.name,
			image: `https://api.dicebear.com/7.x/identicon/svg?seed=${values.username}`,
		});

		if (error) {
			setError(error.message ?? "An error occurred. Please try again.");
			setLoading(false);
			return;
		}

		router.push("/dashboard");
	};

	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="w-full max-w-md space-y-6 bg-white p-8 shadow-lg">
				<h2 className="text-center text-2xl font-bold">Sign Up</h2>

				{/* Stepper UI */}
				<div className="flex justify-center gap-2">
					{[1, 2, 3, 4].map((s) => (
						<div
							key={s}
							className={cn("h-2 w-8 rounded-full", step >= s ? "bg-blue-600" : "bg-gray-300")}
						/>
					))}
				</div>

				{error && <p className="text-center text-red-500">{error}</p>}

				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
						{/* Step 1: Name & Username */}
						{step === 1 && (
							<>
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input placeholder="Full Name" {...field} />
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
											<FormLabel>Username</FormLabel>
											<FormControl>
												<Input placeholder="Username" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button onClick={nextStep} className="w-full">
									Next
								</Button>
							</>
						)}

						{/* Step 2: Email */}
						{step === 2 && (
							<>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input placeholder="Email" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="flex justify-between">
									<Button onClick={prevStep} variant="outline">
										Back
									</Button>
									<Button onClick={nextStep} className="w-24">
										Next
									</Button>
								</div>
							</>
						)}

						{/* Step 3: Password */}
						{step === 3 && (
							<>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input type="password" placeholder="Password" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="flex justify-between">
									<Button onClick={prevStep} variant="outline">
										Back
									</Button>
									<Button onClick={nextStep} className="w-24">
										Next
									</Button>
								</div>
							</>
						)}

						{/* Step 4: Confirmation */}
						{step === 4 && (
							<>
								<p className="text-center">Confirm your details:</p>
								<div className="rounded-lg border p-4">
									<p>
										<strong>Name:</strong> {form.getValues("name")}
									</p>
									<p>
										<strong>Username:</strong> {form.getValues("username")}
									</p>
									<p>
										<strong>Email:</strong> {form.getValues("email")}
									</p>
								</div>
								<div className="flex justify-between">
									<Button onClick={prevStep} variant="outline">
										Back
									</Button>
									<Button type="submit" disabled={loading} className="w-24">
										{loading ? "Signing Up..." : "Submit"}
									</Button>
								</div>
							</>
						)}
					</form>
				</Form>

				<p className="text-center text-sm">
					Already have an account?{" "}
					<Link href="/auth/signin" className="text-blue-600 hover:underline">
						Sign In
					</Link>
				</p>
			</div>
		</div>
	);
}
