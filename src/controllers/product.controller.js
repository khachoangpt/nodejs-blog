"use strict";

const { CreatedResponse } = require("../core/success.response");
const ProductService = require("../services/product.service");

class ProductController {
  // create a new product
  createProduct = async (req, res) => {
    new CreatedResponse({
      message: "Create product success",
      metadata: await ProductService.createProduct(req.body.product_type, {
        ...req.body,
        product_user: req.user.userId,
      }),
    }).send(res);
  };
}

module.exports = new ProductController();
