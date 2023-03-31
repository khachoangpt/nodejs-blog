"use strict";

const keyTokenModel = require("../models/keyToken.model");

class KeyTokenService {
  //create keyToken
  static createKeyToken = async ({ userId, publicKey, refreshToken }) => {
    try {
      const publicKeyString = publicKey.toString();
      const filter = { user: userId };
      const update = {
        publicKey: publicKeyString,
        refreshTokensUsed: [],
        refreshToken,
      };
      const options = { upsert: true, new: true };
      const token = await keyTokenModel
        .findOneAndUpdate(filter, update, options)
        .lean();
      return token ? token.publicKey : null;
    } catch (error) {
      return error;
    }
  };

  static findByUserId = async (userId) => {
    const keyToken = await keyTokenModel
      .findOne({
        user: userId,
      })
      .lean();
    return keyToken;
  };

  static removeById = async (id) => {
    return await keyTokenModel.findByIdAndRemove(id).lean();
  };
}

module.exports = KeyTokenService;
