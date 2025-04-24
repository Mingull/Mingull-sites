import { Job, Worker } from "@mingull/queueify";
import { emailQueue } from "./queues";

export const emailWorker = new Worker({
	queue: emailQueue,
	options: {
		concurrency: 1,
	},
});
emailWorker.setProcessor(async (job) => {
	// Simulate sending an email
	console.log(`Sending email to ${job.data.email} with subject "${job.data.subject}"`);
	await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async operation
	console.log(`Email sent to ${job.data.email}`);
});
