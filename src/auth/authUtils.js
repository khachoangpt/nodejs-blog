"use strict";

const JWT = require("jsonwebtoken");
const asyncHandler = require("../helpers/asyncHandler");
const { HEADER } = require("../constants");
const {
  UnAuthorizedErrorResponse,
  NotFoundErrorResponse,
} = require("../core/error.response");
const KeyTokenService = require("../services/keyToken.service");

const createTokenPair = async (payload, privateKey) => {
  const accessToken = JWT.sign(payload, privateKey, {
    algorithm: "RS256",
    expiresIn: "2 days",
  });
  const refreshToken = JWT.sign(payload, privateKey, {
    algorithm: "RS256",
    expiresIn: "7 days",
  });

  return { accessToken, refreshToken };
};

const authentication = asyncHandler(async (req, res, next) => {
  // check client_id
  const userId = req.headers[HEADER.CLIENT_ID];
  if (!userId) throw new NotFoundErrorResponse("User not found");

  // check accessToken
  const accessToken = req.headers[HEADER.AUTHORIZATION];
  if (!accessToken) throw new NotFoundErrorResponse("Token not found");

  // check keyToken is exist
  const keyToken = await KeyTokenService.findByUserId(userId);
  if (!keyToken) throw new UnAuthorizedErrorResponse("KeyToken not found");

  // check userId match with accessToken
  const decodeUser = JWT.verify(accessToken, keyToken.publicKey);

  if (userId !== decodeUser.userId)
    throw new UnAuthorizedErrorResponse("Client_id not in keyToken");
  req.keyToken = keyToken;
  return next();
});

module.exports = {
  createTokenPair,
  authentication,
};
