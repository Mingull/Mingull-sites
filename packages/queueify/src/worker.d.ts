import { Queue } from "./queue.js";
import { Job } from "./types.js";
export declare class Worker<T> {
    private queue;
    private processJob;
    private concurrency;
    private activeJobs;
    constructor({ queue, options }: {
        queue: Queue<T>;
        options: {
            concurrency?: number;
        };
    });
    setProcessor(job: (job: Job<T>) => Promise<void>): void;
    start(): Promise<void>;
}
//# sourceMappingURL=worker.d.ts.map