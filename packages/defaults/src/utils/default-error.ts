export type ErrorType = "locales" | "shared" | "client-side" | "server-side" | "unknown";
export type DefaultsErrorType = `${ErrorType}-validation` | ErrorType;

export class DefaultsError extends Error {
	constructor(
		message: string,
		private type: DefaultsErrorType | DefaultsErrorType[],
		private options: {
			/**
			 * Optional original error that caused this DefaultsError.
			 * Useful for wrapping lower-level errors.
			 */
			originalError?: Error;
			/**
			 * Optional additional context for the error.
			 * This can be used to provide more details about the error. like the validation context.
			 * For example, it can include the locale that caused the error or other relevant data.
			 */
			context?: Record<string, any>;
		} = {},
	) {
		super(message);
		this.name = "DefaultsError";
		this.type = type;
		Object.setPrototypeOf(this, new.target.prototype);
	}

	getType() {
		return this.type;
	}

	getOriginalError() {
		return this.options.originalError;
	}

	getContext() {
		return this.options.context;
	}
}
