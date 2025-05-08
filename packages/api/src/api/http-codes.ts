export const httpCodePhrases = {
	success: {
		/**
		 * The client should continue with its request.
		 */
		Continue: "CONTINUE",
		/**
		 * The server is switching to a different protocol, as requested.
		 */
		SwitchingProtocols: "SWITCHING_PROTOCOLS",
		/**
		 * The request was successful.
		 */
		Ok: "OK",
		/**
		 * The request has been fulfilled and a new resource has been created.
		 */
		Created: "CREATED",
		/**
		 * The request has been accepted for processing, but the processing is not complete.
		 */
		Accepted: "ACCEPTED",
		/**
		 * The information returned by the server is not from the origin source.
		 */
		NonAuthoritativeInformation: "NON_AUTHORITATIVE_INFORMATION",
		/**
		 * The server successfully processed the request and does not need to return content.
		 */
		NoContent: "NO_CONTENT",
		/**
		 * The request was successful, and the user agent should reset the view.
		 */
		ResetContent: "RESET_CONTENT",
		/**
		 * The server is delivering part of the resource due to a range request.
		 */
		PartialContent: "PARTIAL_CONTENT",
		/**
		 * Provides status for multiple operations on resources.
		 */
		MultiStatus: "MULTI_STATUS",
		/**
		 * The server is processing the request but has not completed it.
		 */
		Processing: "PROCESSING",
	},
	error: {
		/**
		 * The request can be satisfied by multiple resources.
		 */
		MultipleChoices: "MULTIPLE_CHOICES",
		/**
		 * The resource has been moved to a new URL permanently.
		 */
		MovedPermanently: "MOVED_PERMANENTLY",
		/**
		 * The resource has been temporarily moved to a new URL.
		 */
		MovedTemporarily: "MOVED_TEMPORARILY",
		/**
		 * The server redirects the client to another URL.
		 */
		SeeOther: "SEE_OTHER",
		/**
		 * The resource has not been modified since the last request.
		 */
		NotModified: "NOT_MODIFIED",
		/**
		 * The client should use a proxy server to access the resource.
		 */
		UseProxy: "USE_PROXY",
		/**
		 * The resource has been temporarily moved to a new URL.
		 */
		TemporaryRedirect: "TEMPORARY_REDIRECT",
		/**
		 * The resource has been permanently moved to a new URL.
		 */
		PermanentRedirect: "PERMANENT_REDIRECT",

		/**
		 * The server could not understand the request due to invalid syntax.
		 */
		BadRequest: "BAD_REQUEST",
		/**
		 * The request lacks valid authentication credentials.
		 */
		Unauthorized: "UNAUTHORIZED",
		/**
		 * Payment is required to access the requested resource.
		 */
		PaymentRequired: "PAYMENT_REQUIRED",
		/**
		 * The client does not have access rights to the content.
		 */
		Forbidden: "FORBIDDEN",
		/**
		 * The server cannot find the requested resource.
		 */
		NotFound: "NOT_FOUND",
		/**
		 * The method specified in the request is not allowed for the resource.
		 */
		MethodNotAllowed: "METHOD_NOT_ALLOWED",
		/**
		 * The requested resource is not acceptable according to the Accept headers sent.
		 */
		NotAcceptable: "NOT_ACCEPTABLE",
		/**
		 * The client must authenticate with the proxy.
		 */
		ProxyAuthenticationRequired: "PROXY_AUTHENTICATION_REQUIRED",
		/**
		 * The server timed out waiting for the request to complete.
		 */
		RequestTimeout: "REQUEST_TIMEOUT",
		/**
		 * The request conflicts with the current state of the resource.
		 */
		Conflict: "CONFLICT",
		/**
		 * The requested resource is no longer available and will not be available again.
		 */
		Gone: "GONE",
		/**
		 * The server requires a Content-Length header in the request.
		 */
		LengthRequired: "LENGTH_REQUIRED",
		/**
		 * The precondition given in the request headers was not met.
		 */
		PreconditionFailed: "PRECONDITION_FAILED",
		/**
		 * The request was too large to be processed.
		 */
		RequestTooLong: "REQUEST_TOO_LONG",
		/**
		 * The request URI is too long for the server to process.
		 */
		RequestUriTooLong: "REQUEST_URI_TOO_LONG",
		/**
		 * The request media type is not supported by the server.
		 */
		UnsupportedMediaType: "UNSUPPORTED_MEDIA_TYPE",
		/**
		 * The requested range cannot be provided by the server.
		 */
		RequestedRangeNotSatisfiable: "REQUESTED_RANGE_NOT_SATISFIABLE",
		/**
		 * The server cannot meet the requirements of the Expect request-header field.
		 */
		ExpectationFailed: "EXPECTATION_FAILED",
		/**
		 * The client must meet certain preconditions to make the request.
		 */
		PreconditionRequired: "PRECONDITION_REQUIRED",
		/**
		 * The client has made too many requests in a given amount of time.
		 */
		TooManyRequests: "TOO_MANY_REQUESTS",
		/**
		 * The request headers are too large for the server to process.
		 */
		RequestHeaderFieldsTooLarge: "REQUEST_HEADER_FIELDS_TOO_LARGE",
		/**
		 * The resource is unavailable due to legal reasons.
		 */
		UnavailableForLegalReasons: "UNAVAILABLE_FOR_LEGAL_REASONS",
		/**
		 * The server cannot process the request due to semantic errors.
		 */
		UnprocessableEntity: "UNPROCESSABLE_ENTITY",
		/**
		 * The client must switch to a different protocol to continue.
		 */
		UpgradeRequired: "UPGRADE_REQUIRED",

		/**
		 * The server encountered an unexpected condition that prevented it from fulfilling the request.
		 */
		InternalServerError: "INTERNAL_SERVER_ERROR",
		/**
		 * The server does not support the functionality required to fulfill the request.
		 */
		NotImplemented: "NOT_IMPLEMENTED",
		/**
		 * The server, acting as a gateway, received an invalid response from an upstream server.
		 */
		BadGateway: "BAD_GATEWAY",
		/**
		 * The server is temporarily unavailable due to maintenance or overloading.
		 */
		ServiceUnavailable: "SERVICE_UNAVAILABLE",
		/**
		 * The server did not receive a timely response from an upstream server.
		 */
		GatewayTimeout: "GATEWAY_TIMEOUT",
		/**
		 * The server does not support the HTTP protocol version used in the request.
		 */
		HttpVersionNotSupported: "HTTP_VERSION_NOT_SUPPORTED",
		/**
		 * The resource does not have enough storage space to complete the request.
		 */
		InsufficientSpaceOnResource: "INSUFFICIENT_SPACE_ON_RESOURCE",
		/**
		 * The client must authenticate to gain network access.
		 */
		NetworkAuthenticationRequired: "NETWORK_AUTHENTICATION_REQUIRED",

		/**
		 * An Easter egg status code indicating that the server is a teapot, not a coffee machine.
		 */
		ImATeapot: "IM_A_TEAPOT",
		/**
		 * A generic error message for a failed method call.
		 */
		MethodFailure: "METHOD_FAILURE",
		/**
		 * The method could not be performed because the resource is dependent on another resource that failed.
		 */
		FailedDependency: "FAILED_DEPENDENCY",
		/**
		 * The resource is locked and cannot be accessed.
		 */
		Locked: "LOCKED",
		/**
		 * The server does not have enough storage to complete the request.
		 */
		InsufficientStorage: "INSUFFICIENT_STORAGE",
	},
} as const;

export const httpCodes = {
	success: {
		Continue: 100,
		SwitchingProtocols: 101,
		Processing: 102,
		Ok: 200,
		Created: 201,
		Accepted: 202,
		NonAuthoritativeInformation: 203,
		NoContent: 204,
		ResetContent: 205,
		PartialContent: 206,
		MultiStatus: 207,
	},
	error: {
		MultipleChoices: 300,
		MovedPermanently: 301,
		MovedTemporarily: 302,
		SeeOther: 303,
		NotModified: 304,
		UseProxy: 305,
		TemporaryRedirect: 307,
		PermanentRedirect: 308,

		BadRequest: 400,
		Unauthorized: 401,
		PaymentRequired: 402,
		Forbidden: 403,
		NotFound: 404,
		MethodNotAllowed: 405,
		NotAcceptable: 406,
		ProxyAuthenticationRequired: 407,
		RequestTimeout: 408,
		Conflict: 409,
		Gone: 410,
		LengthRequired: 411,
		PreconditionFailed: 412,
		RequestTooLong: 413,
		RequestUriTooLong: 414,
		UnsupportedMediaType: 415,
		RequestedRangeNotSatisfiable: 416,
		ExpectationFailed: 417,
		ImATeapot: 418,
		InsufficientSpaceOnResource: 419,
		MethodFailure: 420,
		UnprocessableEntity: 422,
		Locked: 423,
		FailedDependency: 424,
		UpgradeRequired: 426,
		PreconditionRequired: 428,
		TooManyRequests: 429,
		RequestHeaderFieldsTooLarge: 431,
		UnavailableForLegalReasons: 451,

		InternalServerError: 500,
		NotImplemented: 501,
		BadGateway: 502,
		ServiceUnavailable: 503,
		GatewayTimeout: 504,
		HttpVersionNotSupported: 505,
		InsufficientStorage: 507,
		NetworkAuthenticationRequired: 511,
	},
} as const;
