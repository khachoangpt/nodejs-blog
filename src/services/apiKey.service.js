"use strict";

const apiKeyModel = require("../models/apiKey.model");
// const crypto = require("node:crypto");

class ApiKeyService {
  static getById = async (key) => {
    // await apiKeyModel.create({
    //   key: crypto.randomBytes(64).toString("hex"),
    //   permissions: ["0000"],
    // });
    const objKey = await apiKeyModel.findOne({ key, status: true });
    return objKey;
  };
}

module.exports = ApiKeyService;
