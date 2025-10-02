"use server";
import { getConstants } from "@/constants/server";
import { auth } from "@mingull/auth";
import { BetterAuthError } from "better-auth";

export const signIn = async ({ email, password, rememberMe }: { email: string; password: string; rememberMe?: boolean }) => {
	const constants = await getConstants();

	try {
		await auth.api.signInEmail({ body: { email, password, rememberMe } });

		const successState = constants.SUCCESS_STATES.find((state) => state.type === "auth:sign-in");
		const message = successState?.texts[Math.floor(Math.random() * (successState?.texts.length || 1))];

		return {
			success: true,
			message: message ?? "Signed in successfully.",
		};
	} catch (error) {
		console.log("there is an error in signIn", error);
		const authErrors = constants.ERROR_STATES.find((state) => state.type === "auth:sign-in")?.texts ?? [];
		const unknownErrors = constants.ERROR_STATES.find((state) => state.type === "unknown")?.texts ?? [];

		let message: string;

		if (error instanceof BetterAuthError) {
			message = authErrors[Math.floor(Math.random() * authErrors.length)]!;
		} else if (error instanceof Error) {
			message = authErrors[Math.floor(Math.random() * authErrors.length)]!;
		} else {
			message = unknownErrors[Math.floor(Math.random() * unknownErrors.length)]!;
		}

		return {
			success: false,
			message,
		};
	}
};

export const signUp = async ({ email, password }: { email: string; password: string }) => {
	const constants = await getConstants();
	try {
		await auth.api.signUpEmail({ body: { name: "John Doe", email, password } });
		const successState = constants.SUCCESS_STATES.find((state) => state.type === "auth:sign-up");
		const message = successState?.texts[Math.floor(Math.random() * successState?.texts.length)];

		return {
			success: true,
			message: message ?? "Signed up successfully.",
		};
	} catch (error) {
		console.log("there is an error in signUp", error);
		const authErrors = constants.ERROR_STATES.find((state) => state.type === "auth:sign-up")?.texts ?? [];
		const unknownErrors = constants.ERROR_STATES.find((state) => state.type === "unknown")?.texts ?? [];

		let message: string;

		if (error instanceof BetterAuthError) {
			message = authErrors[Math.floor(Math.random() * authErrors.length)]!;
		} else if (error instanceof Error) {
			message = authErrors[Math.floor(Math.random() * authErrors.length)]!;
		} else {
			message = unknownErrors[Math.floor(Math.random() * unknownErrors.length)]!;
		}

		return {
			success: false,
			message,
			error,
		};
	}
};
