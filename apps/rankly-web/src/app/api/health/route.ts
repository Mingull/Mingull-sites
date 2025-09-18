import { withDummy } from "@/lib/middlewares/with-dummy";
import { createSuccessResponse, createErrorResponse, getHttpCode } from "@mingull/api";
import { NextResponse } from "next/server";
import os from "os";

export const GET = withDummy(async () => {
	try {
		const memoryUsage = process.memoryUsage();
		const cpuLoad = os.loadavg(); // [1min, 5min, 15min] averages

		const rss = memoryUsage.rss;
		const heapUsed = memoryUsage.heapUsed;
		const heapTotal = memoryUsage.heapTotal;
		const external = memoryUsage.external;

		const sysTotal = os.totalmem();
		const sysFree = os.freemem();

		// --- Health evaluation ---
		const freeRatio = sysFree / sysTotal;
		const avgCpuLoad = cpuLoad[0]! / os.cpus().length; // 1-min load / cores
		let status: "healthy" | "degraded" | "unhealthy" = "healthy";

		if (freeRatio < 0.1 || avgCpuLoad > 0.8) {
			status = "degraded";
		}

		// (Optional DB check here: if failed, set status = "unhealthy")

		const health = createSuccessResponse({
			code: "Ok",
			data: {
				status,
				timestamp: new Date().toISOString(),
				uptime: process.uptime(),
				env: process.env.NODE_ENV,
				cpu: {
					load: cpuLoad,
					cores: os.cpus().length,
					averageLoadPerCore: avgCpuLoad.toFixed(2),
				},
				memory: {
					rss: {
						value: rss,
						human: new Byter(rss).format(),
					},
					heapUsed: {
						value: heapUsed,
						human: new Byter(heapUsed).format(),
					},
					heapTotal: {
						value: heapTotal,
						human: new Byter(heapTotal).format(),
					},
					external: {
						value: external,
						human: new Byter(external).format(),
					},
				},
				systemMemory: {
					total: {
						value: sysTotal,
						human: new Byter(sysTotal).format(),
					},
					free: {
						value: sysFree,
						human: new Byter(sysFree).format(),
					},
					freeRatio: freeRatio.toFixed(2),
				},
				// db: "connected",
			},
		});

		return NextResponse.json(health, { status: getHttpCode("Ok") });
	} catch (err) {
		const error = createErrorResponse({
			code: "ServiceUnavailable",
			details: {
				status: "unhealthy",
				timestamp: new Date().toISOString(),
				message: "One or more checks failed",
				// db: "unreachable",
			},
		});

		return NextResponse.json(error, { status: getHttpCode("ServiceUnavailable") });
	}
});

class Byter {
	private bytes: number;

	constructor(bytes: number) {
		this.bytes = bytes;
	}

	format(options?: ByterFormat): string {
		return Byter.format(this.bytes, options);
	}

	static format(bytes: number, { precision }: ByterFormat = { precision: 2 }): string {
		const units = ["B", "KB", "MB", "GB", "TB"];
		let i = 0;
		while (bytes >= 1024 && i < units.length - 1) {
			bytes /= 1024;
			i++;
		}
		return `${bytes.toFixed(precision)} ${units[i]}`;
	}
}

type ByterFormat = {
	precision?: number;
};
