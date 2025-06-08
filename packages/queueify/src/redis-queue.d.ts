import { Job } from "./types.js";
import { Queue, QueueOptions } from "./queue.js";
export declare class RedisQueue<T> extends Queue<T> {
    private redisBlocking;
    private redisNonBlocking;
    private redisSubscriber;
    constructor({ redisUrl, queueName, options }: {
        redisUrl: string;
        queueName: string;
        options?: QueueOptions;
    });
    get length(): Promise<number>;
    getOrWaitForJob(): Promise<any>;
    protected push(job: Job<T>): Promise<number | [error: Error | null, result: unknown][] | null>;
    private get activeJobsQueue();
    private get delayedJobsList();
    private get delayedJobIdsQueue();
    private expiringJobIdList;
    private addActiveJob;
    private moveJobToActive;
    private listenForExpiredJobs;
    private checkForExpiredJobs;
}
//# sourceMappingURL=redis-queue.d.ts.map