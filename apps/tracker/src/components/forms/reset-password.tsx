"use client";

import { useConstants } from "@/constants/client";
import { Link, useRouter } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@mingull/lib";
import { AdvancedInput, defineRequirements, requirementsToSchema } from "@mingull/ui/comps";
import { Button } from "@mingull/ui/comps/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@mingull/ui/comps/form";
import { Input } from "@mingull/ui/comps/input";
import { Eye, EyeOff, GalleryVerticalEnd } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Balancer } from "react-wrap-balancer";
import { toast } from "sonner";
import { z } from "zod";

const passwordRequirements = defineRequirements(({ min, regex, noRepeats }) => [
	min(8, "Password must be at least 8 characters long"),
	regex(/[0-9]/, "Password must contain at least 1 numbers"),
	regex(/[a-z]/, "Password must contain at least 1 lowercase letters"),
	regex(/[A-Z]/, "Password must contain at least 1 uppercase letter"),
	regex(/[^a-zA-Z0-9]/, "Password must contain at least 1 special character"),
	noRepeats(3, "Password must not contain more than 3 repeating characters", ["hidden"]),
]);

const formSchema = z
	.object({
		password: requirementsToSchema(passwordRequirements),
		confirmPassword: z.string().min(8, { error: "Confirm password must be at least 8 characters long" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export function ResetPasswordForm({ className, ...props }: React.ComponentProps<"div">) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const constants = useConstants();
	const t = useTranslations("reset-password");
	const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { password: "", confirmPassword: "" },
	});

	const token = searchParams.get("token") as string;

	async function onSubmit(values: z.infer<typeof formSchema>) {
		if (values.password !== values.confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

		const { error } = await authClient.resetPassword({
			newPassword: values.password,
			token,
		});

		if (error) {
			toast.error(error.message);
		} else {
			toast.success("Password reset successfully");
			router.push("/sign-in");
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
							<h1 className="text-xl font-bold">{t("title")}</h1>
							<div className="text-center text-sm">
								<Balancer>{t("description")}</Balancer>
							</div>
						</div>
						<div className="flex flex-col gap-6">
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="password">{t("password")}</FormLabel>
										<FormControl>
											<AdvancedInput
												{...field}
												type="password"
												placeholder="********"
												requirements={passwordRequirements}
												onStrengthChange={(strength) => {
													if (strength === 0) return { color: "bg-border", text: "Enter a password" };
													if (strength <= 1) return { color: "bg-red-500", text: "Very weak password" };
													if (strength <= 2) return { color: "bg-orange-500", text: "Weak password" };
													if (strength <= 3) return { color: "bg-amber-500", text: "Medium password" };
													if (strength <= 4) return { color: "bg-yellow-500", text: "Good password" };
													if (strength === 5) return { color: "bg-green-500", text: "Strong password" };
													return { color: "bg-emerald-500", text: "Strong password" };
												}}
											/>
										</FormControl>
										{/* <FormMessage /> */}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="confirmPassword">{t("confirmPassword")}</FormLabel>
										<FormControl>
											<div className="relative">
												<Input type={showPasswordConfirm ? "text" : "password"} placeholder="********" {...field} />
												<Button
													type="button"
													variant="ghost"
													size="icon"
													className="text-muted-foreground/80 absolute right-0 top-1/2 -translate-y-1/2"
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
