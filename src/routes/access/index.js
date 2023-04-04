"use strict";

const express = require("express");
const asyncHandler = require("../../helpers/asyncHandler");
const accessController = require("../../controllers/access.controller");
const { authentication } = require("../../auth/authUtils");
const router = express.Router();

// signUp
router.post("/user/signup", asyncHandler(accessController.signUp));

// login
router.post("/user/login", asyncHandler(accessController.login));

// middleware required auth api
router.use(authentication);

// logout
router.post("/user/logout", asyncHandler(accessController.logout));

// handle refresh token
router.post(
  "/user/refreshToken",
  asyncHandler(accessController.handleRefreshToken)
);
module.exports = router;
