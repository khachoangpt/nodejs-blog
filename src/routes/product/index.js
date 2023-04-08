"use strict";

const express = require("express");
const asyncHandler = require("../../helpers/asyncHandler");
const { authentication } = require("../../auth/authUtils");
const productController = require("../../controllers/product.controller");
const router = express.Router();

// middleware required auth api
router.use(authentication);

// handle refresh token
router.post("/", asyncHandler(productController.createProduct));
module.exports = router;
