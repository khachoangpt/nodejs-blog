"use strict";

const keyTokenModel = require("../models/keyToken.model");

class KeyTokenService {
  //create keyToken
  static createKeyToken = async ({
    userId,
    publicKey,
    privateKey,
    refreshToken,
  }) => {
    try {
      const publicKeyString = publicKey.toString();
      const privateKeyString = privateKey.toString();
      const filter = { user: userId };
      const update = {
        publicKey: publicKeyString,
        privateKey: privateKeyString,
        refreshTokensUsed: [],
        refreshToken,
      };
      const options = { upsert: true, new: true };
      const token = await keyTokenModel
        .findOneAndUpdate(filter, update, options)
        .lean();
      return token;
    } catch (error) {
      return error;
    }
  };

  static findByUserId = async (userId) => {
    const keyToken = await keyTokenModel.findOne({
      user: userId,
    });

    return keyToken;
  };

  static removeById = async (id) => {
    return await keyTokenModel.findByIdAndRemove(id).lean();
  };

  static findByRefreshTokenUsed = async (refreshToken) => {
    return await keyTokenModel.findOne({ refreshTokensUsed: refreshToken });
  };

  static findByRefreshToken = async (refreshToken) => {
    return await keyTokenModel.findOne({ refreshToken });
  };
}

module.exports = KeyTokenService;
