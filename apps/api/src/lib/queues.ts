import { RedisQueue } from "@mingull/queueify";

type queueData = {
	email: string;
	subject: string;
	body: string;
}
export const emailQueue = new RedisQueue<>({
	queueName: "email-queue",
	redisUrl: process.env.REDIS_URL ?? "redis://localhost:6379",
});
