"use client";

import { newsletterFormSchema } from "@/schemas/news-letter";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mingull/ui/comps/button";
import { Input } from "@mingull/ui/comps/input";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
// import { subscribe } from "@/lib/actions/send-email";
import { Card, CardContent } from "@mingull/ui/comps/card";

type Inputs = z.infer<typeof newsletterFormSchema>;

export default function NewsletterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<Inputs>({
		resolver: zodResolver(newsletterFormSchema),
		defaultValues: {
			email: "",
		},
	});

	const processForm: SubmitHandler<Inputs> = async () => {
		return toast.warning("This feature is disabled for now. Please try again later.");
		// const result = await subscribe(data);

		// if (result?.error) {
		// 	toast.error("An error occurred! Please try again.");
		// 	return;
		// }

		// toast.success("Subscribed successfully!");
		// reset();
	};

	return (
		<section>
			<Card className="rounded-lg border-0 dark:border">
				<CardContent className="flex flex-col gap-8 pt-6 md:flex-row md:justify-between md:pt-8">
					<div>
						<h2 className="text-2xl font-bold">Subscribe to my newsletter</h2>
						<p className="text-muted-foreground">Get updates on my work and projects.</p>
					</div>

					<form onSubmit={handleSubmit(processForm)} className="flex flex-col items-start gap-3">
						<div className="w-full">
							<Input
								type="email"
								id="email"
								autoComplete="email"
								placeholder="Email"
								className="w-full"
								{...register("email")}
							/>

							{errors.email?.message && (
								<p className="ml-1 mt-2 text-sm text-rose-400">{errors.email.message}</p>
							)}
						</div>

						<div className="w-full">
							<Button type="submit" disabled={isSubmitting} className="w-full disabled:opacity-50">
								{isSubmitting ? "Submitting..." : "Subscribe"}
							</Button>
						</div>

						<div>
							<p className="text-muted-foreground text-xs">
								We care about your data. Read our{" "}
								<Link href="/" className="font-bold">
									privacy&nbsp;policy.
								</Link>
							</p>
						</div>
					</form>
				</CardContent>
			</Card>
		</section>
	);
}
