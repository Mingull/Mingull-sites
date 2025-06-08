export class Queue {
    queueName;
    options;
    constructor(queueName, options = { retryAttempts: 10, retryDelay: 1000 }) {
        this.queueName = queueName;
        this.options = options;
    }
    async addJob(job) {
        const id = job.id ?? crypto.randomUUID();
        if ((job.options?.retry?.totalAttempts ?? 0) >= (job.options?.retry?.maxAttempts ?? 1)) {
            return id;
        }
        await this.push({
            ...job,
            id,
            options: {
                delay: job.options?.delay ?? 0,
                priority: job.options?.priority ?? 0,
                retry: {
                    totalAttempts: job.options?.retry?.totalAttempts ?? 0,
                    maxAttempts: job.options?.retry?.maxAttempts ?? this.options.retryAttempts,
                    delay: job.options?.retry?.delay ?? this.options.retryDelay,
                },
            },
        });
        return id;
    }
}
