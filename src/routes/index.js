"use strict";

const express = require("express");
const { apiKey, permissions } = require("../auth/apiKeys");
const { PERMISSIONS } = require("../constants");
const asyncHandler = require("../helpers/asyncHandler");
const router = express.Router();

// check apiKey
router.use(asyncHandler(apiKey));
// check permissions
router.use(permissions(PERMISSIONS[0]));

router.use("/v1/api", require("./access"));
router.use("/v1/api/product", require("./product"));

module.exports = router;
