"use strict";

const { HEADER } = require("../constants");
const {
  ForbiddenErrorResponse,
  UnAuthorizedErrorResponse,
} = require("../core/error.response");
const ApiKeyService = require("../services/apiKey.service");

const apiKey = async (req, res, next) => {
  const key = req.headers[HEADER.API_KEY]?.toString();
  if (!key) {
    throw new ForbiddenErrorResponse("Forbidden Error!");
  }
  const objKey = await ApiKeyService.getById(key);
  if (!objKey) {
    throw new ForbiddenErrorResponse("Forbidden Error!");
  }
  req.objKey = objKey;
  return next();
};

const permissions = (permission) => {
  return (req, res, next) => {
    if (!req.objKey.permissions) {
      throw new UnAuthorizedErrorResponse("Permission denied");
    }
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
