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

  // login
  login = async (req, res) => {
    new OKResponse({
      message: "Login success",
      metadata: await AccessService.login(req.body),
    }).send(res);
  };

  //logout
  logout = async (req, res) => {
    new OKResponse({
      message: "Logout success",
      metadata: await AccessService.logout(req.keyToken),
    }).send(res);
  };
}

module.exports = new AccessController();
