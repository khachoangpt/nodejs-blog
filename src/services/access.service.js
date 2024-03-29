"use strict";

const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const { UserRoles } = require("../constants");
const crypto = require("node:crypto");
const KeyTokenService = require("./keyToken.service");
const { createTokenPair } = require("../auth/authUtils");
const { getInfoData } = require("../utils");
const {
  ConflictErrorResponse,
  InternalServerErrorErrorResponse,
  BadRequestErrorResponse,
  UnAuthorizedErrorResponse,
} = require("../core/error.response");
const serverStatusCode = require("../constants/serverStatusCode");
const UserService = require("./user.service");
const { NotFoundErrorResponse } = require("../core/error.response");

class AccessService {
  //signUp
  static signUp = async ({ name, email, password }) => {
    //check user registered
    const holderUser = await userModel.findOne({ email });

    if (holderUser) {
      throw new ConflictErrorResponse("User already registered");
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: passwordHash,
      roles: UserRoles.USER,
    });

    // create privateKey, publicKey
    const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
    });
    const publicKeyString = await KeyTokenService.createKeyToken({
      userId: newUser._id,
      publicKey,
      privateKey,
      refreshToken: "",
    });
    if (!publicKeyString) {
      throw new InternalServerErrorErrorResponse("Create keyToken error");
    }
    // create accessToken, refreshToken
    const tokens = await createTokenPair(
      { userId: newUser._id, email },
      privateKey
    );
    return {
      code: serverStatusCode.CREATED,
      user: getInfoData({
        fields: ["_id", "name", "email"],
        object: newUser,
      }),
      tokens,
    };
  };

  // eslint-disable-next-line no-unused-vars
  static login = async ({ email, password, refreshToken = null }) => {
    // check if user exist
    const foundUser = await UserService.findByEmail({ email });
    if (!foundUser) {
      throw new BadRequestErrorResponse("User not found");
    }

    // check match password
    const match = bcrypt.compareSync(password, foundUser.password);
    if (!match) throw new UnAuthorizedErrorResponse("Login error");

    // create key pair
    const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
    });

    // create token pair
    const tokens = await createTokenPair(
      { userId: foundUser._id, email },
      privateKey
    );

    // save keyToken of user
    await KeyTokenService.createKeyToken({
      publicKey,
      privateKey,
      userId: foundUser._id,
      refreshToken: tokens.refreshToken,
    });

    return {
      code: serverStatusCode.OK,
      user: getInfoData({
        fields: ["_id", "name", "email"],
        object: foundUser,
      }),
      tokens,
    };
  };

  static logout = async (keyToken) => {
    const removeKey = await KeyTokenService.removeById(keyToken._id);
    return {
      code: serverStatusCode.OK,
      removedKeyToken: removeKey,
    };
  };

  static handleRefreshToken = async ({ refreshToken, user, keyToken }) => {
    const { userId, email } = user;
    // refresh token used
    if (keyToken.refreshTokensUsed.includes(refreshToken)) {
      // remove key token
      await KeyTokenService.removeById(keyToken._id);
      throw new NotFoundErrorResponse(
        "Something went wrong. Please login again."
      );
    }

    // refresh token not in keyToken
    if (refreshToken !== keyToken.refreshToken) {
      throw new UnAuthorizedErrorResponse("Token error");
    }

    const foundUser = await UserService.findByEmail({ email });
    if (!foundUser) {
      throw new UnAuthorizedErrorResponse("User not registered");
    }

    // create token pair
    const tokens = await createTokenPair(
      { userId, email },
      keyToken.privateKey
    );

    // update key token
    await keyToken.updateOne({
      $set: {
        refreshToken: tokens.refreshToken,
      },
      $addToSet: {
        refreshTokensUsed: refreshToken,
      },
    });

    return {
      code: serverStatusCode.OK,
      user: { userId: foundUser._id, email },
      tokens,
    };
  };
}

module.exports = AccessService;
