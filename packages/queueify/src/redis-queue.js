import { Redis } from "ioredis";
import { Queue } from "./queue.js";
export class RedisQueue extends Queue {
    redisBlocking;
    redisNonBlocking;
    redisSubscriber;
    constructor({ redisUrl, queueName, options }) {
        super(queueName, options);
        this.redisBlocking = new Redis(redisUrl);
        this.redisNonBlocking = new Redis(redisUrl);
        this.redisSubscriber = new Redis(redisUrl);
        this.listenForExpiredJobs();
        this.checkForExpiredJobs();
    }
    get length() {
        return this.redisNonBlocking.zcard(this.activeJobsQueue);
    }
    async getOrWaitForJob() {
        const data = await this.redisBlocking.bzpopmin(this.activeJobsQueue, 0);
        return data?.[1] ? JSON.parse(data[1]) : null;
    }
    async push(job) {
        if (job.options.delay > 0) {
            return await this.redisNonBlocking
                .multi()
                .set(this.expiringJobIdList(job.id), job.id)
                .pexpire(this.expiringJobIdList(job.id), job.options.delay)
                .zadd(this.delayedJobIdsQueue, Date.now() + job.options.delay, job.id)
                .hset(this.delayedJobsList, job.id, JSON.stringify(job))
                .exec();
        }
        else {
            return await this.addActiveJob(job);
        }
    }
    // Ready to execute jobs sorted by priority
    get activeJobsQueue() {
        return `${this.queueName}:active`;
    }
    // Full job data for delayed jobs
    get delayedJobsList() {
        return `${this.queueName}:jobs`;
    }
    // Delayed job ids sorted by execution date
    get delayedJobIdsQueue() {
        return `${this.queueName}:delayed`;
    }
    // Delayed job ids that will expire after the delay
    expiringJobIdList(jobId) {
        return `${this.queueName}:expiringJobs:${jobId}`;
    }
    async addActiveJob(job) {
        return await this.redisNonBlocking.zadd(this.activeJobsQueue, (job.options.priority ?? 0) * -1, JSON.stringify(job));
    }
    async moveJobToActive(jobId) {
        const job = await this.redisNonBlocking.hget(this.delayedJobsList, jobId);
        if (job == null)
            return;
        await this.addActiveJob(JSON.parse(job));
        await this.redisNonBlocking
            .multi()
            .zrem(this.delayedJobIdsQueue, jobId)
            .hdel(this.delayedJobsList, jobId)
            .exec();
    }
    async listenForExpiredJobs() {
        await this.redisSubscriber.subscribe("__keyevent@0__:expired");
        this.redisSubscriber.on("message", async (channel, message) => {
            if (channel !== "__keyevent@0__:expired")
                return;
            if (!message.startsWith(this.expiringJobIdList("")))
                return;
            const jobId = message.split(":").pop();
            if (jobId == null)
                return;
            await this.moveJobToActive(jobId);
        });
    }
    async checkForExpiredJobs() {
        const expiredJobs = await this.redisNonBlocking.zrangebyscore(this.delayedJobIdsQueue, 0, Date.now());
        for (const jobId of expiredJobs) {
            await this.moveJobToActive(jobId);
        }
    }
}
