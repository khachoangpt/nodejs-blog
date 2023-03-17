"use strict";

const process = require("node:process");

const dev = {
  db: {
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    name: process.env.DEV_DB_NAME,
  },
};

const product = {
  db: {
    host: process.env.PRO_DB_HOST,
    port: process.env.PRO_DB_PORT,
    name: process.env.PRO_DB_NAME,
  },
};
const config = { dev, product };
const env = process.env.NODE_ENV || "dev";
module.exports = config[env];
