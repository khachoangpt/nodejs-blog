"use strict";

const process = require("node:process");
const { default: mongoose } = require("mongoose");
const app = require("./src/app");

const PORT = process.env.APP_PORT || 3055;

const server = app.listen(PORT, () => {
  console.log("WS blog start at " + PORT);
});

process.on("SIGINT", () => {
  mongoose.disconnect();
  server.close(() => {
    console.log("\nServer closed!!!");
  });
});
