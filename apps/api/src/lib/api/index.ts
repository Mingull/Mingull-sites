import { ErrorResponse, SuccessResponse } from "./types";
import { httpCodePhrases, httpCodes } from "./http-codes";

export const getHttpCode = <TCodePhrase extends keyof typeof httpCodePhrases>(
	phrase: TCodePhrase,
): (typeof httpCodePhrases)[TCodePhrase] => {
	return httpCodePhrases[phrase];
};

export const getStatus = <TCodePhrase extends keyof typeof httpCodePhrases>(
	code: TCodePhrase,
): (typeof httpCodes)[TCodePhrase] => {
	return httpCodes[code];
};

export type CreateErrorProps<TCodePhrase extends keyof typeof httpCodePhrases> = {
	code: TCodePhrase;
	message?: string;
	details?: Record<string, unknown>;
};

/**
 * Create an error response
 * @param {CreateErrorProps<TCodePhrase>} props
 * @returns error response
 */
export const createErrorResponse = <TCodePhrase extends keyof typeof httpCodePhrases>({
	code,
	message,
	details,
}: CreateErrorProps<TCodePhrase>): ErrorResponse<
	(typeof httpCodePhrases)[TCodePhrase],
	(typeof httpCodes)[TCodePhrase]
> => ({
	success: false,
	code: getHttpCode(code),
	status: getStatus(code),
	message,
	details,
});

export type CreateSuccessProps<
	TCodePhrase extends keyof typeof httpCodePhrases,
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
 * @param {CreateSuccessProps<TCodePhrase, TData, TMeta>} props
 * @returns success response
 */
export const createSuccessResponse = <
	TCodePhrase extends keyof typeof httpCodePhrases,
	TData,
	TMeta = Record<string, unknown>,
>({
	code,
	data,
	message,
	meta,
	debugInfo,
}: CreateSuccessProps<TCodePhrase, TData, TMeta>): SuccessResponse<
	(typeof httpCodePhrases)[TCodePhrase],
	(typeof httpCodes)[TCodePhrase],
	TData,
	TMeta
> => ({
	success: true,
	code: getHttpCode(code),
	status: getStatus(code),
	data,
	message,
	meta,
	debugInfo,
});

export * from "./types";
