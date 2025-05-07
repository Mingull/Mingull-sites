import { RedisQueue } from "@mingull/queueify";

type notificationQueueEntry = {
	email: string;
	subject: string;
	body: string;
};
export const emailQueue = new RedisQueue<notificationQueueEntry>({
	queueName: "email-queue",
	redisUrl: process.env.REDIS_URL ?? "redis://localhost:6379",
});
