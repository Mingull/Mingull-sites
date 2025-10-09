import { db } from "@/db";
import { Organization, User } from "@/db/schemas";
import { murmurhash } from "./murmurhash";

const MAX_UINT_32 = 4294967295;

type TenantContext = {
	tenantId: string;
	tenantType: "user" | "organization";
	user?: User;
	organization?: Organization;
};

export async function normalizeTenantContext(input: User | Organization | { user?: User; org?: Organization }): Promise<TenantContext> {
	// --- 1. Direct entity inference ---
	if ("email" in input && "username" in input) {
		// User entity
		return {
			tenantId: input.id,
			tenantType: "user",
			user: input,
		};
	}

	if ("name" in input && "slug" in input) {
		// Organization entity
		return {
			tenantId: input.id,
			tenantType: "organization",
			organization: input,
		};
	}

	// --- 2. Combined object { user, org } ---
	const { user, org } = input as { user?: User; org?: Organization };

	if (org) {
		// Organization takes priority
		return {
			tenantId: org.id,
			tenantType: "organization",
			organization: org,
			user,
		};
	}

	if (user) {
		return {
			tenantId: user.id,
			tenantType: "user",
			user,
		};
	}

	throw new Error("normalizeTenantContext: could not infer tenant type from input");
}

export async function canViewFeature(flagName: string, context: TenantContext): Promise<unknown> {
	// return type needs to be made

	// --- 1. Get normalized tenant context ---
	const tenantContext = await normalizeTenantContext(context);

	// --- 2. Fetch flag, rules, variants, category, tenant override ---
	const flag = await db.query.featureFlags.findFirst({ where: (ff, { eq }) => eq(ff.key, flagName) });
	if (!flag) return false;

	const rules = await db.query.flagRules.findMany({ where: (fr, { eq }) => eq(fr.featureFlagId, flag.id) });
	const variants = await db.query.flagVariants.findMany({ where: (fv, { eq }) => eq(fv.featureFlagId, flag.id) });
	const category = flag.categoryId ? await db.query.flagCategories.findFirst({ where: (fc, { eq }) => eq(fc.id, flag.categoryId!) }) : null;

	// --- 3. Check if flag is overridden ---
	const tenantOverride = await db.query.tenantFlags.findFirst({
		where: (tf, { and, eq }) => and(eq(tf.featureFlagId, flag.id), eq(tf.tenantId, tenantContext.tenantId), eq(tf.type, tenantContext.tenantType)),
	});
	if (tenantOverride) {
		return tenantOverride.overrideValue;
	}

	// --- 4. Evaluate global rules ---
	rules.forEach((rule) => {
		// dont know how to handle these yet
	});

	// --- 5. Evaluate percentage rollout ---
	if (flag.rolloutPercentage && flag.rolloutPercentage > 0 && flag.rolloutPercentage <= 100) {
		if (userIsWithinPercentage(flag.key, flag.rolloutPercentage / 100, tenantContext.tenantId)) {
			return true;
		}
	}

	// --- 6. fallback default ---
	return flag.defaultValue;
}

function userIsWithinPercentage(flagKey: string, allowedPercent: number, tenantId: string) {
	return murmurhash(`${flagKey}-${tenantId}`) / MAX_UINT_32 < allowedPercent;
}

async function getUserRole(userId: string): Promise<"user" | "admin"> {
	const user = await db.query.users.findFirst({ where: (u, { eq }) => eq(u.id, userId) });
	return (user?.role || "user") as "user" | "admin";
}
