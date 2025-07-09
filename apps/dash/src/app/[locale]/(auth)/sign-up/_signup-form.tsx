"use client";
import { defaults } from "@/app/defaults";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { DiscordIcon, GitHubIcon } from "@mingull/icons";
import { Button } from "@mingull/ui/comps/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@mingull/ui/comps/form";
import { Input } from "@mingull/ui/comps/input";
import { Eye, EyeOff, GalleryVerticalEnd } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
	.object({
		email: z.string().email("Invalid email address"),
		password: z.string().min(6, "Password must be at least 6 characters long"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col items-center gap-2">
							<a href="#" className="flex flex-col items-center gap-2 font-medium">
								<div className="flex size-8 items-center justify-center rounded-md">
									<GalleryVerticalEnd className="size-6" />
								</div>
								<span className="sr-only">{defaults.TITLE}</span>
							</a>
							<h1 className="text-xl font-bold">Create an account</h1>
						</div>
						<div className="flex flex-col gap-6">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="email">Email</FormLabel>
										<FormControl>
											<Input placeholder="m@example.com" {...field} />
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
										<FormLabel htmlFor="password">Password</FormLabel>
										<FormControl>
											<div className="relative">
												<Input
													type={showPassword ? "text" : "password"}
													placeholder="********"
													{...field}
												/>
												<Button
													type="button"
													variant="ghost"
													size="icon"
													className="absolute right-0 top-1/2 -translate-y-1/2"
													onClick={() => setShowPassword((prev) => !prev)}
													aria-label={showPassword ? "Hide password" : "Show password"}
												>
													{showPassword ?
														<EyeOff />
													:	<Eye />}
												</Button>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
										<FormControl>
											<div className="relative">
												<Input
													type={showPasswordConfirm ? "text" : "password"}
													placeholder="********"
													{...field}
												/>
												<Button
													type="button"
													variant="ghost"
													size="icon"
													className="absolute right-0 top-1/2 -translate-y-1/2"
													onClick={() => setShowPasswordConfirm((prev) => !prev)}
													aria-label={showPasswordConfirm ? "Hide password" : "Show password"}
												>
													{showPasswordConfirm ?
														<EyeOff />
													:	<Eye />}
												</Button>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit" className="w-full">
								Sign up
							</Button>
							<div className="text-center text-sm">
								Already have an account?{" "}
								<a href="/sign-in" className="underline underline-offset-4">
									Log in
								</a>
							</div>
						</div>

						<div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
							<span className="bg-background text-muted-foreground relative z-10 px-2">Or</span>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<Button variant="outline" type="button" className="w-full">
								<GitHubIcon className="text-foreground" />
								Continue with Github
							</Button>
							<Button variant="outline" type="button" className="w-full">
								<DiscordIcon className="text-foreground" />
								Continue with Discord
							</Button>
						</div>
					</div>
				</form>
			</Form>

			<div className="text-muted-foreground *:[a]:hover:text-primary *:[a]:underline *:[a]:underline-offset-4 text-balance text-center text-xs">
				By clicking sign up, you agree to our <a href="#">Terms of Service</a> and{" "}
				<a href="#">Privacy Policy</a>.
			</div>
		</div>
	);
}
