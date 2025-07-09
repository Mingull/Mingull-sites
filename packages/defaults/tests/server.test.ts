import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { DefaultsError } from "../src/utils/default-error.ts";

const schema = {
	TITLE: z.string(),
	SUBTITLE: z.string(),
	ERROR_PAGES: z.record(
		z.string(),
		z.object({
			code: z.number(),
			text: z.string(),
		}),
	),
};

const createDefaultInstance = async (overrides = {}) => {
	const { createDefaults } = await import("../src/old/index.ts");
	return createDefaults({
		schema,
		locales: ["en", "nl"],
		defaultLocale: "en",
		shared: {
			ERROR_PAGES: {
				NOT_FOUND: { code: 404, text: "Not Found" },
			},
		},
		en: {
			TITLE: "Test Title",
			SUBTITLE: "Test Subtitle",
		},
		nl: {
			TITLE: "Test Titel",
			SUBTITLE: "Test Ondertitel",
		},
		...overrides,
	});
};

// Helper to mock next-intl/server locale and get defaults
const setupDefaults = async (locale: string) => {
	vi.doMock("next-intl/server", () => ({
		getLocale: () => locale,
	}));
	const instance = await createDefaultInstance();
	return instance.getDefaults();
};

beforeEach(() => {
	vi.resetModules();
});

afterEach(() => {
	vi.clearAllMocks();
	vi.unmock("next-intl/server");
});

describe("createDefaults (server-side)", () => {
	describe("client-side usage", () => {
		let onErrorMock: ReturnType<typeof vi.fn>;
		beforeEach(() => {
			onErrorMock = vi.fn();
			// Delete window if it exists to simulate server environment
			delete (global as any).window;
		});

		afterEach(() => {
			vi.resetAllMocks();
			delete (global as any).window;
		});
		it("should call onError if called on client-side (window exists)", async () => {
			(global as any).window = {}; // Simulate client environment
			const instance = await createDefaultInstance({
				schema: {
					TITLE: z.string(),
					SUBTITLE: z.string(),
				},
				locales: ["en"],
				defaultLocale: "en",
				onError: onErrorMock,
				en: {
					TITLE: "Hello",
					SUBTITLE: "World",
				},
				// shared: undefined, // No shared defaults for this test
			});

			const { getDefaults } = instance;

			// We expect onError to be called because window exists
			await expect(getDefaults()).rejects.toThrow("getDefaults cannot be called in the client-side code");

			expect(onErrorMock).toHaveBeenCalled();
			expect(onErrorMock.mock.calls[0]?.[0].message).toContain(
				"getDefaults cannot be called in the client-side code",
			);
		});
	});
	describe("locale-based defaults", () => {
		it.each([
			["en", "Test Title", "Test Subtitle"],
			["nl", "Test Titel", "Test Ondertitel"],
		] as const)(
			"should return correct defaults for locale '%s'",
			async (locale, expectedTitle, expectedSubtitle) => {
				const defaults = await setupDefaults(locale);
				expect(defaults.TITLE).toBe(expectedTitle);
				expect(defaults.SUBTITLE).toBe(expectedSubtitle);
				expect(defaults.ERROR_PAGES.NOT_FOUND.code).toBe(404);
				expect(defaults.ERROR_PAGES.NOT_FOUND.text).toBe("Not Found");
			},
		);

		it("falls back to defaultLocale ('en') when an unsupported locale is provided", async () => {
			const defaults = await setupDefaults("fr");
			expect(defaults.TITLE).toBe("Test Title");
		});
	});

	describe("error handling", () => {
		it("calls onError callback when defaults don't match schema", async () => {
			const onError = vi.fn();
			// try {
			// 	await createDefaultInstance({
			// 		locales: ["en"],
			// 		onError,
			// 		en: {
			// 			// @ts-ignore
			// 			TITLE: 123,
			// 			SUBTITLE: "Valid",
			// 		},
			// 	});
			// } catch (error) {
			// 	console.log("error.constructor === DefaultsError:", error.constructor === DefaultsError);
			// 	console.log("error instanceof DefaultsError:", error instanceof DefaultsError);
			// 	console.log("error.name:", error.name);
			// 	throw error;
			// }

			await expect(
				createDefaultInstance({
					locales: ["en"],
					onError,
					en: {
						// @ts-ignore - purposely invalid type
						TITLE: 123,
						SUBTITLE: "Valid",
					},
				}),
			).rejects.toThrow(DefaultsError);

			expect(onError).toHaveBeenCalled();
			const error = onError.mock.calls[0]?.[0];
			expect(error).toBeInstanceOf(DefaultsError);
			expect(error.message).toContain('Invalid data for locale "en"');
		});
	});

	describe("shared defaults", () => {
		it("always includes shared defaults regardless of locale", async () => {
			const defaults = await setupDefaults("nl");
			expect(defaults.ERROR_PAGES.NOT_FOUND.code).toBe(404);
			expect(defaults.ERROR_PAGES.NOT_FOUND.text).toBe("Not Found");
		});
	});
});
