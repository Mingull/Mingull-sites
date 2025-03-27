"use client";
import { defaults } from "@/app/defaults";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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
		mode: "all", // Ensures validation updates immediately
	});

	useEffect(() => {
		console.log({ step, totalSteps: totalSteps - 1 });
		console.log(step < totalSteps - 1);
	}, [step]);

	const { handleSubmit, control, trigger, getValues, formState, watch } = form;

	const stepTitles = ["Account Information", "Security Details", "Confirmation"];

	// Watching fields for the current step
	const isStepValid = () => {
		if (step === 0) {
			return watch("name")?.length >= 2 && watch("username")?.length >= 3;
		} else if (step === 1) {
			return watch("email")?.includes("@") && watch("password")?.length >= 8;
		}
		return true;
	};

	const nextStep = async () => {
		const fields = step === 0 ? (["name", "username"] as const) : (["email", "password"] as const);
		if (await trigger(fields)) setStep((prev) => prev + 1);
	};

	const handleBack = () => setStep((prev) => Math.max(0, prev - 1));

	const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
		console.log({ values });
		try {
			await authClient.signUp.email({
				email: values.email,
				password: values.password,
				name: values.name,
				username: values.username,
			});
			toast.success("Account created successfully. Please sign in.");
			router.push("/signin");
		} catch (error) {
			toast.error("Failed to sign up. Please try again.");
		}
	};

	return (
		<div className="flex h-screen items-center justify-center overflow-hidden">
			<div className="flex h-full w-full flex-col items-center space-y-4 px-2">
				<header className="flex w-full justify-center p-8 pb-12 xl:p-18 xl:pb-48">
					<Link href="/" className="text-primary text-4xl font-bold transition hover:opacity-80">
						{defaults.TITLE}
					</Link>
				</header>
				<h2 className="text-xl font-semibold">{stepTitles[step]}</h2>
				<div className="flex items-center justify-center">
					{Array.from({ length: totalSteps }).map((_, index) => (
						<div key={index} className="flex items-center">
							<div className={cn("h-4 w-4 rounded-full", index <= step ? "bg-primary" : "bg-primary/30")}>
								{index === step && <span className="sr-only">Current Step</span>}
							</div>
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
								<div className="flex justify-between">
									<Button type="button" variant="outline" disabled={step === 0} onClick={handleBack}>
										Back
									</Button>
									<Button
										type="button" // Always a button, avoid auto-submit
										onClick={() => {
											if (step < totalSteps - 1) {
												nextStep();
											} else {
												handleSubmit(onSubmit)(); // Manually trigger submit only on last step
											}
										}}
										disabled={!isStepValid()}
									>
										{step === totalSteps - 1 ? "Submit" : "Next"}
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
