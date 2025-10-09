import { auth } from "@/lib/auth";
import { sql } from "drizzle-orm";
import { db } from ".";
import { serverStatus } from "./schemas";

// async function createStripeProducts() {
// 	console.log("Creating Stripe products and prices...");

// 	const baseProduct = await stripe.products.create({
// 		name: "Base",
// 		description: "Base subscription plan",
// 	});

// 	await stripe.prices.create({
// 		product: baseProduct.id,
// 		unit_amount: 800, // $8 in cents
// 		currency: "usd",
// 		recurring: {
// 			interval: "month",
// 			trial_period_days: 7,
// 		},
// 	});

// 	const plusProduct = await stripe.products.create({
// 		name: "Plus",
// 		description: "Plus subscription plan",
// 	});

// 	await stripe.prices.create({
// 		product: plusProduct.id,
// 		unit_amount: 1200, // $12 in cents
// 		currency: "usd",
// 		recurring: {
// 			interval: "month",
// 			trial_period_days: 7,
// 		},
// 	});

// 	console.log("Stripe products and prices created successfully.");
// }

const createUser = async (name = "Niels Plug", username = "Mingull", email = "nielsplug@outlook.com", password = "Pass1234") => {
	try {
		const { user } = await auth.api.signUpEmail({
			body: {
				name,
				username,
				email,
				password,
			},
		});
		return user;
	} catch (e) {
		const existingUser = await db.query.users.findFirst({
			where: (users, { eq }) => eq(users.email, email),
		});
		if (!existingUser) throw e;
		return existingUser;
	}
};

const createOrganization = async (name: string, slug: string, userId: string) => {
	try {
		await auth.api.createOrganization({
			body: { name, slug, userId },
		});
	} catch (e) {}
};

const createServerStatus = async (...statuses: { name: string; descriptor?: string; type: "runtime" | "lifecycle" }[]) => {
	await db
		.insert(serverStatus)
		.values(statuses.map(({ name, descriptor, type }) => ({ name, descriptor, type })))
		.onDuplicateKeyUpdate({
			set: {
				descriptor: sql`VALUES(descriptor)`,
				type: sql`VALUES(type)`,
			},
		});
};

const seed = async () => {
	const user = await createUser();
	console.log("Initial user created.");

	await createOrganization("Test Organization", "test-organization", user.id);
	console.log("Initial organization created.");

	await createServerStatus(
		{ name: "PENDING", descriptor: "Server created but not yet activated/setup", type: "lifecycle" },
		{ name: "UNCLAIMED", descriptor: "Server exists but no owner/org has claimed it", type: "lifecycle" },
		{ name: "ACTIVATED", descriptor: "Server is active and ready for use", type: "lifecycle" },
		{ name: "DECOMMISSIONED", descriptor: "Server is retired or deleted", type: "lifecycle" },
		{ name: "ONLINE", descriptor: "Server is currently online", type: "runtime" },
		{ name: "OFFLINE", descriptor: "Server is currently offline", type: "runtime" },
		{ name: "MAINTENANCE", descriptor: "Server is under maintenance or temporarily down", type: "runtime" },
		{ name: "ERROR", descriptor: "Server reported an error (plugin/API failure)", type: "runtime" },
	);
	console.log("Server statuses created or updated.");

	// await createStripeProducts();
};

seed()
	.catch((error) => {
		console.error("Seed process failed:", error);
		process.exit(1);
	})
	.finally(() => {
		console.log("Seed process finished. Exiting...");
		process.exit(0);
	});
