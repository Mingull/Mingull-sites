import { httpCodes } from "../http-codes.ts";

export const getHttpCode = <TCode extends keyof (typeof httpCodes)["success"] | keyof (typeof httpCodes)["error"]>(
	code: TCode,
) => {
	if (code in httpCodes.success) {
		return httpCodes.success[code as keyof typeof httpCodes.success] as TCode extends (
			keyof (typeof httpCodes)["success"]
		) ?
			(typeof httpCodes)["success"][TCode]
		: TCode extends keyof (typeof httpCodes)["error"] ? (typeof httpCodes)["error"][TCode]
		: undefined;
	}
	if (code in httpCodes.error) {
		return httpCodes.error[code as keyof typeof httpCodes.error] as TCode extends (
			keyof (typeof httpCodes)["success"]
		) ?
			(typeof httpCodes)["success"][TCode]
		: TCode extends keyof (typeof httpCodes)["error"] ? (typeof httpCodes)["error"][TCode]
		: undefined;
	}
	return undefined as TCode extends keyof (typeof httpCodes)["success"] ? (typeof httpCodes)["success"][TCode]
	: TCode extends keyof (typeof httpCodes)["error"] ? (typeof httpCodes)["error"][TCode]
	: undefined;
};
