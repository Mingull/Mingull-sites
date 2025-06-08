export class Worker {
    queue;
    processJob = undefined;
    concurrency;
    activeJobs = new Map();
    constructor({ queue, options }) {
        this.queue = queue;
        this.concurrency = options.concurrency ?? 1;
    }
    setProcessor(job) {
        this.processJob = job;
    }
    async start() {
        if (!this.processJob) {
            throw new Error("Process job function is not set. Please set it using setProcessJob() method.");
        }
        while (true) {
            const job = await this.queue.getOrWaitForJob();
            if (job == null) {
                await new Promise((resolve) => setTimeout(resolve, 15000));
            }
            else {
                this.activeJobs.set(job.id, this.processJob(job)
                    .catch(async () => {
                    await this.queue.addJob({
                        ...job,
                        options: {
                            ...job.options,
                            retry: {
                                ...job.options.retry,
                                totalAttempts: job.options.retry.totalAttempts + 1,
                            },
                            delay: job.options.retry.delay * (job.options.retry.totalAttempts + 1) ** 2,
                        },
                    });
                })
                    .finally(() => {
                    this.activeJobs.delete(job.id);
                }));
            }
            if (this.activeJobs.size >= this.concurrency) {
                await Promise.any(this.activeJobs.values());
            }
        }
    }
}
