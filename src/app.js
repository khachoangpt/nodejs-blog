"use strict";

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const { ReasonPhrases, StatusCodes } = require("./constants/httpStatusCode");
const app = express();

//init middleware
app.use(morgan("combined"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init db
require("./dbs/init.mongodb");

//init router
app.use("", require("./routes"));

//handle error
app.use((error, req, res, next) => {
  const statusCode = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(statusCode).json({
    status: "error",
    code: statusCode,
    message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
  });
});

module.exports = app;
