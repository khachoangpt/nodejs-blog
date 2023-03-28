"use strict";

const express = require("express");
const { asyncHandler } = require("../../auth/apiKeys");
const accessController = require("../../controllers/access.controller");
const router = express.Router();

// signUp
router.post("/user/signup", asyncHandler(accessController.signUp));

// login
router.post("/user/login", asyncHandler(accessController.login));

module.exports = router;
