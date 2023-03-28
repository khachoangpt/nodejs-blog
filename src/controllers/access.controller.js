"use strict";

const { CreatedResponse, OKResponse } = require("../core/success.response");
const AccessService = require("../services/access.service");

class AccessController {
  // signUp
  signUp = async (req, res) => {
    new CreatedResponse({
      message: "Create user success",
      metadata: await AccessService.signUp(req.body),
    }).send(res);
  };

  login = async (req, res) => {
    new OKResponse({
      metadata: await AccessService.login(req.body),
    }).send(res);
  };
}

module.exports = new AccessController();
