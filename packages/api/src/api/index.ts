import { getHttpCode } from "./getters/get-http-code.ts";
import { getStatus } from "./getters/get-status.ts";
import { httpCodePhrases, httpCodes } from "./http-codes.ts";
import { ErrorResponse, HttpCode, SuccessResponse } from "./types.ts";

export type CreateErrorProps<TCode extends keyof typeof httpCodePhrases.error> = {
	code: TCode;
	message?: string;
	details?: Record<string, unknown>;
};

/**
 * Create an error response
 * @param {CreateErrorProps<TCode>} props
 * @returns error response
 */
export const createErrorResponse = <TCode extends keyof typeof httpCodePhrases.error>({
	code,
	message,
	details,
}: CreateErrorProps<TCode>): ErrorResponse<(typeof httpCodePhrases.error)[TCode], (typeof httpCodes.error)[TCode]> => ({
	success: false,
	code: getStatus(code) as (typeof httpCodePhrases)["error"][TCode],
	status: getHttpCode(code) as (typeof httpCodes)["error"][TCode],
	message,
	details,
});

export type CreateSuccessProps<
	TCodePhrase extends keyof typeof httpCodePhrases.success,
	TData,
	TMeta = Record<string, unknown>,
> = {
	code: TCodePhrase;
	data?: TData;
	message?: string;
	meta?: TMeta;
	debugInfo?: Record<string, unknown>;
};
/**
 * Create a success response
 * @param {CreateSuccessProps<TCode, TData, TMeta>} props
 * @returns success response
 */
export const createSuccessResponse = <
	TCode extends keyof typeof httpCodePhrases.success,
	TData,
	TMeta = Record<string, unknown>,
>({
	code,
	data,
	message,
	meta,
	debugInfo,
}: CreateSuccessProps<TCode, TData, TMeta>): SuccessResponse<
	(typeof httpCodePhrases.success)[TCode],
	(typeof httpCodes.success)[TCode],
	TData,
	TMeta
> => ({
	success: true,
	code: getStatus(code) as (typeof httpCodePhrases.success)[TCode],
	status: getHttpCode(code) as (typeof httpCodes.success)[TCode],
	data,
	message,
	meta,
	debugInfo,
});

export * from "./getters/get-http-code.ts";
export * from "./getters/get-status.ts";
