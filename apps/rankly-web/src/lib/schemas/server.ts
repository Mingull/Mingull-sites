import z from "zod";

export const serverSchema = z.object({
	name: z.string(),
	serverUuid: z.string(),
	setupToken: z.string(),
	status: z.number(),
	id: z.string().nullable(),
	createdAt: z.date().nullable(),
	updatedAt: z.date().nullable(),
	deletedAt: z.date().nullable(),
	ownerId: z.string().nullable(),
	organizationId: z.string().nullable(),
	activated: z.boolean().nullable(),
	hostname: z.string().nullable(),
	ip: z.string().nullable(),
	port: z.number().nullable(),
	version: z.string().nullable(),
	plugins: z.unknown(),
	bannerUrl: z.string().nullable(),
	iconUrl: z.string().nullable(),
	motd: z.string().nullable(),
	playerCount: z.number().nullable(),
	maxPlayers: z.number().nullable(),
});

export const newServerSchema = z
	.object({
		name: z.string(),
		serverUuid: z.string().nullable().optional(),
		setupToken: z.string().nullable().optional(),
		status: z.number(),
		activated: z.boolean(),
		hostname: z.string().nullable().optional(),
		ip: z.string().nullable().optional(),
		port: z.number().nullable().optional(),
		version: z.string().nullable().optional(),
		plugins: z.unknown(),
		bannerUrl: z.string().nullable().optional(),
		iconUrl: z.string().nullable().optional(),
		motd: z.string().nullable().optional(),
		playerCount: z.number().nullable().optional(),
		maxPlayers: z.number().nullable().optional(),
	})
	.refine((data) => (data.serverUuid && data.setupToken) || (!data.serverUuid && !data.setupToken), {
		message: "Both serverUuid and setupToken must be set together or left empty",
		path: ["serverUuid", "setupToken"], // optionally highlight both fields
	});
