"use client";

import Link from "next/link";
import { sendEmail } from "@/lib/actions/send-email";
import { contactFormSchema } from "@/schemas/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Input } from "@mingull/ui/comps/input";
import { Textarea } from "@mingull/ui/comps/textarea";
import { Button } from "@mingull/ui/comps/button";

type Inputs = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<Inputs>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const processForm: SubmitHandler<Inputs> = async (data) => {
		return toast.warning("This feature is disabled for now. Please try again later.");
		const result = await sendEmail(data);

		if (result?.error) {
			toast.error("An error occurred! Please try again.");
			return;
		}

		toast.success("Message sent successfully!");
		reset();
	};

	return (
		<section className="relative isolate">
			{/* Background pattern */}
			{/* <svg
				className="absolute inset-0 -z-10 h-full w-full stroke-zinc-200 opacity-75 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-zinc-700"
				aria-hidden="true"
			>
				<defs>
					<pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width={200} height={200} x="50%" y={-64} patternUnits="userSpaceOnUse">
						<path d="M100 200V.5M.5 .5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y={-64} className="overflow-visible fill-zinc-50 dark:fill-zinc-900/75">
					<path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z" strokeWidth={0} />
				</svg>
				<rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
			</svg> */}

			{/* Form */}
			<div className="relative">
				<form onSubmit={handleSubmit(processForm)} className="mt-16 lg:flex-auto" noValidate>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						{/* Name */}
						<div>
							<Input
								id="name"
								type="text"
								placeholder="Name"
								autoComplete="given-name"
								{...register("name")}
							/>

							{errors.name?.message && (
								<p className="ml-1 mt-2 text-sm text-rose-400">{errors.name.message}</p>
							)}
						</div>

						{/* Email */}
						<div>
							<Input
								type="email"
								id="email"
								autoComplete="email"
								placeholder="Email"
								{...register("email")}
							/>

							{errors.email?.message && (
								<p className="ml-1 mt-2 text-sm text-rose-400">{errors.email.message}</p>
							)}
						</div>

						{/* Message */}
						<div className="sm:col-span-2">
							<Textarea rows={4} placeholder="Message" {...register("message")} />

							{errors.message?.message && (
								<p className="ml-1 mt-2 text-sm text-rose-400">{errors.message.message}</p>
							)}
						</div>
					</div>
					<div className="mt-6">
						<Button type="submit" disabled={isSubmitting} className="w-full disabled:opacity-50">
							{isSubmitting ? "Submitting..." : "Contact Me"}
						</Button>
					</div>
					<p className="text-muted-foreground mt-4 text-xs">
						By submitting this form, I agree to the{" "}
						<Link href="/" className="font-bold">
							privacy&nbsp;policy.
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
}
