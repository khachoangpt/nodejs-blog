const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet")
const compression = require("compression")
const app = express();

//init middleware
app.use(morgan("combined"));
app.use(helmet())
app.use(compression())

//init db

//init router
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Welcome to nodejs",
  });
});

//handle error

module.exports = app;
