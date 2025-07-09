"use server";

import ContactFormEmail from "@/emails/contact-form-email";
import { contactFormSchema } from "@/schemas/contact";
import { Resend } from "resend";
import { z } from "zod";

type ContactFormInputs = z.infer<typeof contactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
	const result = contactFormSchema.safeParse(data);

	if (result.error) {
		return { error: result.error.format() };
	}

	try {
		const { name, email, message } = result.data;
		const { data, error } = await resend.emails.send({
			from: "hello@hamedbahram.io",
			to: [email],
			cc: ["hello@hamedbahram.io"],
			subject: "Contact form submission",
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
			react: await ContactFormEmail({ name, email, message }),
		});

		if (!data || error) {
			throw new Error("Failed to send email");
		}

		return { success: true };
	} catch (error) {
		return { error };
	}
}
