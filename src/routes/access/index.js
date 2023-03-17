"use strict";

const express = require("express");
const { asyncHandler } = require("../../auth/apiKeys");
const accessController = require("../../controllers/access.controller");
const router = express.Router();

router.post("/user/signup", asyncHandler(accessController.signUp));

module.exports = router;
