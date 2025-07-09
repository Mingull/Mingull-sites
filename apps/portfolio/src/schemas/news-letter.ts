import { z } from "zod";

export const newsletterFormSchema = z.object({
	email: z.string().email("Invalid email."),
});
