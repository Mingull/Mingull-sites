"use server";

import { newsletterFormSchema } from "@/schemas/news-letter";
import { Resend } from "resend";
import { z } from "zod";

type NewsletterFormInputs = z.infer<typeof newsletterFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribe(data: NewsletterFormInputs) {
	const result = newsletterFormSchema.safeParse(data);

	if (result.error) {
		return { error: result.error.format() };
	}

	try {
		const { email } = result.data;
		const { data, error } = await resend.contacts.create({
			email: email,
			audienceId: process.env.RESEND_AUDIENCE_ID as string,
		});

		if (!data || error) {
			throw new Error("Failed to subscribe");
		}

		// TODO: Send a welcome email

		return { success: true };
	} catch (error) {
		return { error };
	}
}
