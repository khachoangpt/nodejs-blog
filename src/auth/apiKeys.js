"use strict";

const { HEADER } = require("../constants");
const {
  ForbiddenErrorResponse,
  UnAuthorizedErrorResponse,
} = require("../core/error.response");
const ApiKeyService = require("../services/apiKey.service");

const apiKey = async (req, res, next) => {
  // check api key in request headers
  const key = req.headers[HEADER.API_KEY]?.toString();
  if (!key) {
    throw new ForbiddenErrorResponse("Forbidden Error!");
  }

  // find api key in db
  const objKey = await ApiKeyService.getById(key);
  if (!objKey) {
    throw new ForbiddenErrorResponse("Forbidden Error!");
  }

  // add found api key to request
  req.objKey = objKey;
  return next();
};

const permissions = (permission) => {
  return (req, res, next) => {
    // check permission in objKey in request
    if (!req.objKey.permissions) {
      throw new UnAuthorizedErrorResponse("Permission denied");
    }

    // check permission
    const validPermission = req.objKey.permissions.includes(permission);
    if (!validPermission) {
      throw new UnAuthorizedErrorResponse("Permission denied");
    }
    return next();
  };
};

module.exports = {
  apiKey,
  permissions,
};
