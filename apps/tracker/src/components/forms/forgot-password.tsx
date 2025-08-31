"use client";

import { useConstants } from "@/constants/client";
import { Link } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@mingull/lib";
import { Button } from "@mingull/ui/comps/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@mingull/ui/comps/form";
import { Input } from "@mingull/ui/comps/input";
import { GalleryVerticalEnd } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Balancer } from "react-wrap-balancer";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
	email: z.string().min(2, {
		message: "Please enter your email",
	}),
});

export function ForgotPasswordForm({ className, ...props }: React.ComponentProps<"div">) {
	const BASE_URL = process.env.TRACKER_BASE_URL;
	const constants = useConstants();
	const t = useTranslations("forgot-password");

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { email: "" },
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const { error } = await authClient.forgetPassword({
			email: values.email,
			redirectTo: `${BASE_URL}/reset-password`,
		});

		if (error) {
			toast.error(error.message);
		} else {
			toast.success("Password reset email sent");
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
