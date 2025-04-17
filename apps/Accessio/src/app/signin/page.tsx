"use client";
import { defaults } from "@/app/defaults";
import { Discord, Github } from "@/components/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@mingull/lib/auth/client";
import { Button } from "@mingull/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@mingull/ui/components/card";
import { Checkbox } from "@mingull/ui/components/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@mingull/ui/components/form";
import { Input } from "@mingull/ui/components/input";
import { PasswordInput } from "@mingull/ui/components/password-input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const signInSchema = z.object({
	email: z.string().email("Invalid email format"),
	password: z.string().min(8, "Password must be at least 8 characters"),
	remember: z.boolean().optional(),
});

export default function SignIn() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const form = useForm({
		resolver: zodResolver(signInSchema),
		defaultValues: { email: "", password: "", remember: false },
		mode: "all",
	});

	const onSubmit = async ({ email, password, remember }: z.infer<typeof signInSchema>) => {
		setLoading(true);
		setError("");
		const { data, error } = await authClient.signIn.email({
			email,
			password,
			rememberMe: remember,
		});
		setLoading(false);
		if (error) {
			setError(error.message || "Something went wrong. Please try again.");
			toast.error(error.message || "Something went wrong. Please try again.");
		} else {
			router.push("/");
		}
	};

	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex h-full w-full flex-col items-center space-y-4 px-2">
				<header className="xl:p-18 flex w-full justify-center p-8 pb-12 xl:pb-48">
					<Link href="/" className="text-primary text-4xl font-bold transition hover:opacity-80">
						{defaults.TITLE}
					</Link>
				</header>
				<Card className="w-full max-w-md shadow-sm">
					<CardHeader>
						<CardTitle className="text-2xl">Sign In</CardTitle>
						<CardDescription>Sign in to your account to continue</CardDescription>
						{error && <p className="text-sm text-red-500">{error}</p>}
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-4">
								<FormField
									control={form.control}
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
									control={form.control}
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
								<FormField
									control={form.control}
									name="remember"
									render={({ field }) => (
										<FormItem className="flex items-center space-x-2">
											<FormControl>
												<Checkbox
													id="remember"
													checked={field.value}
													onCheckedChange={field.onChange}
												/>
											</FormControl>
											<FormLabel htmlFor="remember" className="text-sm">
												Remember me
											</FormLabel>
										</FormItem>
									)}
								/>
								<Button type="submit" className="w-full" disabled={loading}>
									{loading ? "Signing in..." : "Sign in"}
								</Button>
							</form>
						</Form>
						<div className="relative my-4 flex items-center">
							<div className="flex-grow border-t border-gray-300"></div>
							<span className="px-2 text-sm text-gray-500">or</span>
							<div className="flex-grow border-t border-gray-300"></div>
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex gap-2">
								<Button
									onClick={async () => {
										const { data, error } = await authClient.signIn.social({ provider: "discord" });

										if (error) {
											setError(error.message || "An error occurred. Please try again.");
											toast.error(error.message || "An error occurred. Please try again.");
										} else {
											router.push("/");
										}
									}}
									className="flex-1 bg-[#7289DA] text-white hover:bg-[#677bc4]"
								>
									<Discord /> Discord
								</Button>
								<Button
									onClick={() => authClient.signIn.social({ provider: "github" })}
									className="flex-1 bg-[#333] text-white hover:bg-[#222]"
								>
									<Github /> Github
								</Button>
							</div>
							<p className="text-center text-sm text-gray-500">
								Don't have an account?{" "}
								<Link href="/signup" className="text-blue-600 hover:underline">
									Sign up
								</Link>
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
