import { z } from "zod";

export const newsletterFormSchema = z.object({
	email: z.email("Invalid email."),
});
