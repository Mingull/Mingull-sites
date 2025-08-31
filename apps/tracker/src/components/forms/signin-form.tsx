"use client";

import { useConstants } from "@/constants/client";
import { Link, useRouter } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";
import { signIn } from "@/server/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { DiscordIcon, GoogleIcon } from "@mingull/icons";
import { cn } from "@mingull/lib";
import { Button } from "@mingull/ui/comps/button";
import { Checkbox } from "@mingull/ui/comps/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@mingull/ui/comps/form";
import { Input } from "@mingull/ui/comps/input";
import { Eye, EyeOff, GalleryVerticalEnd } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Balancer } from "react-wrap-balancer";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
	email: z.string().min(2, {
		message: "Please enter your email",
	}),
	password: z.string().min(6, "Password must be at least 6 characters long"),
	remember: z.boolean().optional(),
});
export function SigninForm({ className, ...props }: React.ComponentProps<"div">) {
	const router = useRouter();
	const constants = useConstants();
	const t = useTranslations("sign-in");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			remember: false,
		},
	});

	const handleSignInProvider = async (provider: "google" | "discord") => {
		await authClient.signIn.social({ provider, callbackURL: "/dashboard" });
	};
	async function onSubmit(values: z.infer<typeof formSchema>) {
		const { message, success } = await signIn({
			email: values.email,
			password: values.password,
			rememberMe: values.remember,
		});

		if (success) {
			toast.success(message);
			router.push("/dashboard");
		} else {
			setError(message);
			setTimeout(() => {
				setError(null);
			}, 5000);
		}
	}

	const authLoadingText = useMemo(() => {
		const auth = constants.LOADING_STATES.find((s) => s.type === "auth");
		return auth?.texts[Math.floor(Math.random() * auth.texts.length)];
	}, [form.formState.isSubmitting]);

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
								<span className="sr-only">{constants.TITLE}</span>
							</a>
							<h1 className="text-xl font-bold">{t("title", { title: constants.TITLE })}</h1>
							<div className="text-center text-sm">
								<Balancer>{constants.SUBTITLE}</Balancer>
							</div>
						</div>
						{error ?
							<div className="text-center text-red-500">{error}</div>
						:	null}
						<div className="flex flex-col gap-6">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="email">{t("email")}</FormLabel>
										<FormControl>
											<Input placeholder="your@email.com" {...field} />
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
										<FormLabel htmlFor="password">{t("password")}</FormLabel>
										<FormControl>
											<div className="relative">
												<Input type={showPassword ? "text" : "password"} placeholder="********" {...field} />
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
											<FormLabel className="font-normal">{t("remember")}</FormLabel>
										</FormItem>
									)}
								/>
								<a href="/forgot-password" className="underline underline-offset-4">
									{t("forgot")}
								</a>
							</div>
							<Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
								{form.formState.isSubmitting ? authLoadingText : t("button")}
							</Button>
							<div className="text-center text-sm">
								{t("no-account")}{" "}
								<Link href="/sign-up" className="underline underline-offset-4">
									{t("linkText")}
								</Link>
							</div>
						</div>
						<div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
							<span className="bg-background text-muted-foreground relative z-10 px-2">{t("divider")}</span>
						</div>
						<div className="grid gap-4 sm:grid-cols-2">
							<Button variant="outline" type="button" className="w-full" onClick={() => handleSignInProvider("google")} aria-label={t("continue", { provider: "Google" })}>
								<GoogleIcon className="text-foreground" />
								{t("continue", { provider: "Google" })}
							</Button>
							<Button variant="outline" type="button" className="w-full" onClick={() => handleSignInProvider("discord")} aria-label={t("continue", { provider: "Discord" })}>
								<DiscordIcon className="text-foreground" />
								{t("continue", { provider: "Discord" })}
							</Button>
						</div>
					</div>
				</form>
			</Form>
			<div className="text-muted-foreground *:[a]:hover:text-primary *:[a]:underline *:[a]:underline-offset-4 text-balance text-center text-xs">
				<Balancer>
					{t.rich("tos", {
						tos: (chunks) => (
							<Link href="/terms-of-service" className="underline">
								{chunks}
							</Link>
						),
						privacy: (chunks) => (
							<Link href="/privacy-policy" className="underline">
								{chunks}
							</Link>
						),
					})}
				</Balancer>
			</div>
		</div>
	);
}
