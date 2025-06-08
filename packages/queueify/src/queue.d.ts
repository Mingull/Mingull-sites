import { Job, JobOptions } from "./types.js";
export type QueueOptions = {
    retryAttempts: number;
    retryDelay: number;
};
export type OptionalJobOptions = Partial<JobOptions> & {
    retry?: Partial<JobOptions["retry"]>;
};
export declare abstract class Queue<T> {
    protected queueName: string;
    protected options: QueueOptions;
    constructor(queueName: string, options?: QueueOptions);
    addJob(job: Omit<Job<T>, "id" | "options"> & {
        options?: OptionalJobOptions;
        id?: string;
    }): Promise<string>;
    protected abstract push(job: Job<T> & {
        options: {
            retry: Required<Job<T>["options"]["retry"]>;
        };
    }): Promise<unknown>;
    abstract getOrWaitForJob(): Promise<(Job<T> & {
        options: {
            retry: Required<Job<T>["options"]["retry"]>;
        };
    }) | null>;
    abstract get length(): Promise<number>;
}
//# sourceMappingURL=queue.d.ts.map