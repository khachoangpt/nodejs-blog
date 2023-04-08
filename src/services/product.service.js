"use strict";

const { ProductTypes } = require("../constants");
const serverStatusCode = require("../constants/serverStatusCode");
const { BadRequestErrorResponse } = require("../core/error.response");
const { product, clothing, electronic } = require("../models/product.model");

// define Factory to create product
class ProductFactory {
  static async createProduct(type, payload) {
    switch (type) {
      case ProductTypes.CLOTHING:
        return await new Clothing(payload).createProduct();
      case ProductTypes.ELECTRONIC:
        return await new Electronic(payload).createProduct();
      default:
        throw new BadRequestErrorResponse(
          "Product type not in enum ProductTypes"
        );
    }
  }
}

class Product {
  constructor({
    product_name,
    product_thumb,
    product_description,
    product_price,
    product_quantity,
    product_type,
    product_user,
    product_attributes,
  }) {
    this.product_name = product_name;
    this.product_thumb = product_thumb;
    this.product_description = product_description;
    this.product_price = product_price;
    this.product_quantity = product_quantity;
    this.product_type = product_type;
    this.product_user = product_user;
    this.product_attributes = product_attributes;
  }

  // create a new product
  async createProduct() {
    return await product.create(this);
  }
}

class Clothing extends Product {
  async createProduct() {
    // create a new clothing
    const newClothing = await clothing.create(this.product_attributes);
    if (!newClothing) {
      throw new BadRequestErrorResponse("Create clothing error");
    }

    // create a new product
    const newProduct = await super.createProduct();
    if (!newProduct) {
      throw new BadRequestErrorResponse("Create product error");
    }
    return { code: serverStatusCode.OK, product: newProduct };
  }
}

class Electronic extends Product {
  async createProduct() {
    // create a new electronic
    const newElectronic = await electronic.create(this.product_attributes);
    if (!newElectronic) {
      throw new BadRequestErrorResponse("Create electronic error");
    }

    // create a new product
    const newProduct = await super.createProduct();
    if (!newProduct) {
      throw new BadRequestErrorResponse("Create electronic error");
    }
    return { code: serverStatusCode.OK, product: newProduct };
  }
}

module.exports = ProductFactory;
