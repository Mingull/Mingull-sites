import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createDefaults } from ".././dist/index.js"; // top-level import!
import { z } from "zod";
import { renderHook } from "@testing-library/react";
import { IntlProvider } from "next-intl";
import type React from "react";
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

// Reusable wrapper for all tests
const createWrapper =
	(locale: string) =>
	({ children }: { children: React.ReactNode }) => (
		<IntlProvider locale={locale} messages={{}}>
			{children}
		</IntlProvider>
	);

const createDefaultInstance = (overrides = {}) =>
	createDefaults({
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

let instance: ReturnType<typeof createDefaults>;

beforeEach(() => {
	vi.resetModules();
	instance = createDefaultInstance();
});

afterEach(() => {
	vi.clearAllMocks();
	vi.unmock("next-intl");
});

describe("createDefaults (client-side)", () => {
	describe("locale-based defaults", () => {
		const testCases = [
			["en", "Test Title", "Test Subtitle"],
			["nl", "Test Titel", "Test Ondertitel"],
		] as const;

		it.each(testCases)("returns correct defaults for locale '%s'", (locale, expectedTitle, expectedSubtitle) => {
			const { result } = renderHook(() => instance.useDefaults(), {
				wrapper: createWrapper(locale),
			});

			expect(result.current.TITLE).toBe(expectedTitle);
			expect(result.current.SUBTITLE).toBe(expectedSubtitle);
			expect(result.current.ERROR_PAGES.NOT_FOUND.code).toBe(404);
			expect(result.current.ERROR_PAGES.NOT_FOUND.text).toBe("Not Found");
		});

		it("falls back to defaultLocale ('en') for unsupported locales", () => {
			const { result } = renderHook(() => instance.useDefaults(), {
				wrapper: createWrapper("fr"),
			});
			expect(result.current.TITLE).toBe("Test Title");
		});
	});

	describe("error handling", () => {
		it("calls onError callback on schema validation failure", () => {
			const onError = vi.fn();

			expect(() =>
				createDefaultInstance({
					locales: ["en"],
					onError,
					en: {
						// @ts-ignore: deliberately invalid type
						TITLE: 123,
						SUBTITLE: "Valid",
					},
				}),
			).rejects.toThrow(DefaultsError);

			expect(onError).toHaveBeenCalled();
			const error = onError.mock.calls[0]?.[0];
			expect(error).toBeInstanceOf(DefaultsError);
			expect(error.message).toContain("TITLE");
		});
	});

	describe("shared defaults", () => {
		it("includes shared defaults regardless of locale", () => {
			const { result } = renderHook(() => instance.useDefaults(), {
				wrapper: createWrapper("en"),
			});

			expect(result.current.ERROR_PAGES.NOT_FOUND.code).toBe(404);
			expect(result.current.ERROR_PAGES.NOT_FOUND.text).toBe("Not Found");
		});
	});
});
