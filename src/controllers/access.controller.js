"use strict";

const { CreatedResponse } = require("../core/success.response");
const AccessService = require("../services/access.service");

class AccessController {
  // signUp
  signUp = async (req, res, next) => {
    new CreatedResponse({
      message: "Create user success",
      metadata: await AccessService.signUp(req.body),
    }).send(res);
  };
}

module.exports = new AccessController();
