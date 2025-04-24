import { RedisQueue } from "@mingull/lib/queuer";

export const queue = new RedisQueue({
	queueName: "api",
	redisUrl: process.env.REDIS_URL ?? "redis://localhost:6379",
});
