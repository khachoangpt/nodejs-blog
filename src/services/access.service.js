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
} = require("../core/error.response");
const serverStatusCode = require("../constants/serverStatusCode");

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
      publicKey: publicKey,
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
}

module.exports = AccessService;
