"use strict";

const { ReasonPhrases, StatusCodes } = require("../constants/httpStatusCode");

class ErrorResponse extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class BadRequestErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.BAD_REQUEST,
    statusCode = StatusCodes.BAD_REQUEST
  ) {
    super(message, statusCode);
  }
}

class UnAuthorizedErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.UNAUTHORIZED,
    statusCode = StatusCodes.UNAUTHORIZED
  ) {
    super(message, statusCode);
  }
}

class PaymentRequiredErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.PAYMENT_REQUIRED,
    statusCode = StatusCodes.PAYMENT_REQUIRED
  ) {
    super(message, statusCode);
  }
}

class ForbiddenErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.FORBIDDEN,
    statusCode = StatusCodes.FORBIDDEN
  ) {
    super(message, statusCode);
  }
}

class NotFoundErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.NOT_FOUND,
    statusCode = StatusCodes.NOT_FOUND
  ) {
    super(message, statusCode);
  }
}

class MethodNotAllowedErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.METHOD_NOT_ALLOWED,
    statusCode = StatusCodes.METHOD_NOT_ALLOWED
  ) {
    super(message, statusCode);
  }
}

class NotAcceptableErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.NOT_ACCEPTABLE,
    statusCode = StatusCodes.NOT_ACCEPTABLE
  ) {
    super(message, statusCode);
  }
}

class ProxyAuthenticationRequiredErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.PROXY_AUTHENTICATION_REQUIRED,
    statusCode = StatusCodes.PROXY_AUTHENTICATION_REQUIRED
  ) {
    super(message, statusCode);
  }
}

class RequestTimeoutErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.REQUEST_TIMEOUT,
    statusCode = StatusCodes.REQUEST_TIMEOUT
  ) {
    super(message, statusCode);
  }
}

class ConflictErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.CONFLICT,
    statusCode = StatusCodes.CONFLICT
  ) {
    super(message, statusCode);
  }
}

class GoneErrorResponse extends ErrorResponse {
  constructor(message = ReasonPhrases.GONE, statusCode = StatusCodes.GONE) {
    super(message, statusCode);
  }
}

class LengthRequiredErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.LENGTH_REQUIRED,
    statusCode = StatusCodes.LENGTH_REQUIRED
  ) {
    super(message, statusCode);
  }
}

class PreconditionFailedErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.PRECONDITION_FAILED,
    statusCode = StatusCodes.PRECONDITION_FAILED
  ) {
    super(message, statusCode);
  }
}

class RequestTooLargeErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.REQUEST_TOO_LONG,
    statusCode = StatusCodes.REQUEST_TOO_LONG
  ) {
    super(message, statusCode);
  }
}

class RequestURITooLongErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.REQUEST_URI_TOO_LONG,
    statusCode = StatusCodes.REQUEST_URI_TOO_LONG
  ) {
    super(message, statusCode);
  }
}

class UnsupportedMediaTypeErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.UNSUPPORTED_MEDIA_TYPE,
    statusCode = StatusCodes.UNSUPPORTED_MEDIA_TYPE
  ) {
    super(message, statusCode);
  }
}

class RequestedRangeNotSatisfiableErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.REQUESTED_RANGE_NOT_SATISFIABLE,
    statusCode = StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE
  ) {
    super(message, statusCode);
  }
}

class ExpectationFailedErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.EXPECTATION_FAILED,
    statusCode = StatusCodes.EXPECTATION_FAILED
  ) {
    super(message, statusCode);
  }
}

class MisdirectedRequestErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.MISDIRECTED_REQUEST,
    statusCode = StatusCodes.MISDIRECTED_REQUEST
  ) {
    super(message, statusCode);
  }
}

class UnprocessableContentErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.UNPROCESSABLE_ENTITY,
    statusCode = StatusCodes.UNPROCESSABLE_ENTITY
  ) {
    super(message, statusCode);
  }
}

class LockedErrorResponse extends ErrorResponse {
  constructor(message = ReasonPhrases.LOCKED, statusCode = StatusCodes.LOCKED) {
    super(message, statusCode);
  }
}

class FailedDependencyErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.FAILED_DEPENDENCY,
    statusCode = StatusCodes.FAILED_DEPENDENCY
  ) {
    super(message, statusCode);
  }
}

class PreconditionRequiredErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.PRECONDITION_REQUIRED,
    statusCode = StatusCodes.PRECONDITION_REQUIRED
  ) {
    super(message, statusCode);
  }
}

class TooManyRequestsErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.TOO_MANY_REQUESTS,
    statusCode = StatusCodes.TOO_MANY_REQUESTS
  ) {
    super(message, statusCode);
  }
}

class RequestHeaderFieldsTooLargeErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.REQUEST_HEADER_FIELDS_TOO_LARGE,
    statusCode = StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE
  ) {
    super(message, statusCode);
  }
}

class UnavailableForLegalReasonsErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.UNAVAILABLE_FOR_LEGAL_REASONS,
    statusCode = StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS
  ) {
    super(message, statusCode);
  }
}

class InternalServerErrorErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.INTERNAL_SERVER_ERROR,
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message, statusCode);
  }
}

class NotImplementedErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.NOT_IMPLEMENTED,
    statusCode = StatusCodes.NOT_IMPLEMENTED
  ) {
    super(message, statusCode);
  }
}

class BadGatewayErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.BAD_GATEWAY,
    statusCode = StatusCodes.BAD_GATEWAY
  ) {
    super(message, statusCode);
  }
}

class ServiceUnavailableErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.SERVICE_UNAVAILABLE,
    statusCode = StatusCodes.SERVICE_UNAVAILABLE
  ) {
    super(message, statusCode);
  }
}

class GatewayTimeoutErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.GATEWAY_TIMEOUT,
    statusCode = StatusCodes.GATEWAY_TIMEOUT
  ) {
    super(message, statusCode);
  }
}

class HTTPVersionNotSupportedErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.HTTP_VERSION_NOT_SUPPORTED,
    statusCode = StatusCodes.HTTP_VERSION_NOT_SUPPORTED
  ) {
    super(message, statusCode);
  }
}

class InsufficientStorageErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.INSUFFICIENT_STORAGE,
    statusCode = StatusCodes.INSUFFICIENT_STORAGE
  ) {
    super(message, statusCode);
  }
}

class NetworkAuthenticationRequiredErrorResponse extends ErrorResponse {
  constructor(
    message = ReasonPhrases.NETWORK_AUTHENTICATION_REQUIRED,
    statusCode = StatusCodes.NETWORK_AUTHENTICATION_REQUIRED
  ) {
    super(message, statusCode);
  }
}

module.exports = {
  ErrorResponse,
  GoneErrorResponse,
  LockedErrorResponse,
  ConflictErrorResponse,
  ConflictErrorResponse,
  NotFoundErrorResponse,
  ForbiddenErrorResponse,
  BadRequestErrorResponse,
  BadGatewayErrorResponse,
  UnAuthorizedErrorResponse,
  NotAcceptableErrorResponse,
  GatewayTimeoutErrorResponse,
  NotImplementedErrorResponse,
  RequestTimeoutErrorResponse,
  LengthRequiredErrorResponse,
  TooManyRequestsErrorResponse,
  RequestTooLargeErrorResponse,
  PaymentRequiredErrorResponse,
  FailedDependencyErrorResponse,
  MethodNotAllowedErrorResponse,
  ExpectationFailedErrorResponse,
  RequestURITooLongErrorResponse,
  ServiceUnavailableErrorResponse,
  MisdirectedRequestErrorResponse,
  PreconditionFailedErrorResponse,
  InsufficientStorageErrorResponse,
  InternalServerErrorErrorResponse,
  PreconditionRequiredErrorResponse,
  UnprocessableContentErrorResponse,
  UnsupportedMediaTypeErrorResponse,
  HTTPVersionNotSupportedErrorResponse,
  UnavailableForLegalReasonsErrorResponse,
  ProxyAuthenticationRequiredErrorResponse,
  RequestHeaderFieldsTooLargeErrorResponse,
  RequestedRangeNotSatisfiableErrorResponse,
  NetworkAuthenticationRequiredErrorResponse,
};
