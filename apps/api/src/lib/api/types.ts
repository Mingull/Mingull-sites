import { httpCodePhrases, httpCodes } from "./http-codes";

export type SuccessResponse<
	TCodePhrase extends HttpCodePhrase = HttpCodePhrase,
	TCode extends HttpCode = HttpCode,
	TData = unknown,
	TMeta = Record<string, unknown>,
> = {
	/**
	 * Whether the request was successful
	 */
	success: true;
	/**
	 * The http code phrase for the error
	 */
	code: TCodePhrase;
	/**
	 * The HTTP status code for the error
	 */
	status: TCode;
	/**
	 * The data returned from the request
	 */
	data?: TData;
	/**
	 * Optional message to provide more context for the response
	 */
	message?: string;
	/**
	 * Metadata providing extra information about the response, such as pagination details.
	 */
	meta?: TMeta;
	/**
	 * Optional debug information for development purposes (should not be exposed in production).
	 * @deprecated
	 */
	debugInfo?: Record<string, unknown>;
};

export type ErrorResponse<TCodePhrase extends HttpCodePhrase = HttpCodePhrase, TCode extends HttpCode = HttpCode> = {
	/**
	 * Whether the request was successful
	 */
	success: false;
	/**
	 * The http code phrase for the error
	 */
	code: TCodePhrase;
	/**
	 * The HTTP status code for the error
	 */
	status: TCode;
	/**
	 * Optional message to provide more context for the error
	 */
	message?: string;
	/**
	 * Additional details for the error
	 */
	details?: Record<string, unknown>;
};

// Type to infer string keys for autocompletion
export type HttpCodePhrase = (typeof httpCodePhrases)[keyof typeof httpCodePhrases];
export type HttpCode = (typeof httpCodes)[keyof typeof httpCodes];
