const { Schema, model } = require("mongoose");
const { ProductTypes } = require("../constants");

const DOCUMENT_NAME = "Product";
const COLLECTION_NAME = "Products";
const { CLOTHING, ELECTRONICS, FURNITURE } = ProductTypes;
const productSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_thumb: {
      type: String,
      required: true,
    },
    product_description: {
      type: String,
    },
    product_price: {
      type: Number,
      required: true,
    },
    product_quantity: {
      type: Number,
      required: true,
    },
    product_type: {
      type: String,
      required: true,
      enum: [ELECTRONICS, CLOTHING, FURNITURE],
    },
    product_user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    product_attributes: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
  { collection: COLLECTION_NAME, timestamps: true }
);

const electronicSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    material: {
      type: String,
    },
  },
  {
    collection: "Electronics",
    timestamps: true,
  }
);

const clothingSchema = new Schema(
  {
    manufacturer: {
      type: String,
      required: true,
    },
    model: { type: String },
    color: {
      type: String,
    },
  },
  { collection: "Clothes", timestamps: true }
);

module.exports = {
  product: model(DOCUMENT_NAME, productSchema),
  electronic: model("Electronic", electronicSchema),
  clothing: model("Clothing", clothingSchema),
};
