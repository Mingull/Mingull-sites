"use client";
import { defaults } from "@/app/defaults";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mingull/ui/comps/button";
import { Checkbox } from "@mingull/ui/comps/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@mingull/ui/comps/form";
import { Input } from "@mingull/ui/comps/input";
import { Eye, EyeOff, GalleryVerticalEnd } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Balancer } from "react-wrap-balancer";
import { z } from "zod";
import { GitHubIcon, DiscordIcon } from "@mingull/icons";

const formSchema = z.object({
	email: z
		.string()
		.min(2, {
			message: "Email must be at least 2 characters long",
		})
		.email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
	remember: z.boolean().optional(),
});
export function SigninForm({ className, ...props }: React.ComponentProps<"div">) {
	const [showPassword, setShowPassword] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			remember: false,
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
							<h1 className="text-xl font-bold">Sign into {defaults.TITLE}</h1>
							<div className="text-center text-sm">
								<Balancer>{defaults.SUBTITLE}</Balancer>
							</div>
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
							<div className="flex items-center justify-between text-sm">
								<FormField
									name="remember"
									render={({ field }) => (
										<FormItem className="flex items-center space-x-2">
											<FormControl>
												<Checkbox checked={field.value} onCheckedChange={field.onChange} />
											</FormControl>
											<FormLabel className="font-normal">Remember me</FormLabel>
										</FormItem>
									)}
								/>
								<a href="/forgot-password" className="underline underline-offset-4">
									Forgot password?
								</a>
							</div>
							<Button type="submit" className="w-full">
								{form.formState.isSubmitting ? "Logging in..." : "Login"}
							</Button>
							<div className="text-center text-sm">
								Don&apos;t have an account?{" "}
								<a href="/sign-up" className="underline underline-offset-4">
									Sign up
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
				By clicking continue, you agree to our <a href="#">Terms of Service</a> and{" "}
				<a href="#">Privacy Policy</a>.
			</div>
		</div>
	);
}
