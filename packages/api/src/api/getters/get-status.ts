import { httpCodePhrases } from "../http-codes.ts";

export const getStatus = <
	TCode extends keyof (typeof httpCodePhrases)["success"] | keyof (typeof httpCodePhrases)["error"],
>(
	code: TCode,
) => {
	if (code in httpCodePhrases.success) {
		return httpCodePhrases.success[code as keyof typeof httpCodePhrases.success] as TCode extends (
			keyof (typeof httpCodePhrases)["success"]
		) ?
			(typeof httpCodePhrases)["success"][TCode]
		: TCode extends keyof (typeof httpCodePhrases)["error"] ? (typeof httpCodePhrases)["error"][TCode]
		: undefined;
	}
	if (code in httpCodePhrases.error) {
		return httpCodePhrases.error[code as keyof typeof httpCodePhrases.error] as TCode extends (
			keyof (typeof httpCodePhrases)["success"]
		) ?
			(typeof httpCodePhrases)["success"][TCode]
		: TCode extends keyof (typeof httpCodePhrases)["error"] ? (typeof httpCodePhrases)["error"][TCode]
		: undefined;
	}
	return undefined as TCode extends keyof (typeof httpCodePhrases)["success"] ?
		(typeof httpCodePhrases)["success"][TCode]
	: TCode extends keyof (typeof httpCodePhrases)["error"] ? (typeof httpCodePhrases)["error"][TCode]
	: undefined;
};
