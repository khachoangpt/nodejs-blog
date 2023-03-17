"use strict";

const { ReasonPhrases, StatusCodes } = require("../constants/httpStatusCode");

class SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.OK,
    reasonStatusCode = ReasonPhrases.OK,
    metadata,
  }) {
    this.message = !message ? reasonStatusCode : message;
    this.status = statusCode;
    this.metadata = metadata;
  }

  send(res) {
    return res.status(this.status).json(this);
  }
}

class OKResponse extends SuccessResponse {
  constructor({ message, metadata }) {
    super({ message, metadata });
  }
}

class CreatedResponse extends SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.CREATED,
    reasonStatusCode = ReasonPhrases.CREATED,
    metadata,
  }) {
    super({ message, statusCode, reasonStatusCode, metadata });
  }
}

class AcceptedResponse extends SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.ACCEPTED,
    reasonStatusCode = ReasonPhrases.ACCEPTED,
    metadata,
  }) {
    super({ message, statusCode, reasonStatusCode, metadata });
  }
}

class NonAuthoritativeInformationResponse extends SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.NON_AUTHORITATIVE_INFORMATION,
    reasonStatusCode = ReasonPhrases.NON_AUTHORITATIVE_INFORMATION,
    metadata,
  }) {
    super({ message, statusCode, reasonStatusCode, metadata });
  }
}

class NoContentResponse extends SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.NO_CONTENT,
    reasonStatusCode = ReasonPhrases.NO_CONTENT,
    metadata,
  }) {
    super({ message, statusCode, reasonStatusCode, metadata });
  }
}

class ResetContentResponse extends SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.RESET_CONTENT,
    reasonStatusCode = ReasonPhrases.RESET_CONTENT,
    metadata,
  }) {
    super({ message, statusCode, reasonStatusCode, metadata });
  }
}

class PartialContentResponse extends SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.PARTIAL_CONTENT,
    reasonStatusCode = ReasonPhrases.PARTIAL_CONTENT,
    metadata,
  }) {
    super({ message, statusCode, reasonStatusCode, metadata });
  }
}

class MultiStatusResponse extends SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.MULTI_STATUS,
    reasonStatusCode = ReasonPhrases.MULTI_STATUS,
    metadata,
  }) {
    super({ message, statusCode, reasonStatusCode, metadata });
  }
}

module.exports = {
  OKResponse,
  CreatedResponse,
  AcceptedResponse,
  NoContentResponse,
  MultiStatusResponse,
  ResetContentResponse,
  PartialContentResponse,
  NonAuthoritativeInformationResponse,
};
