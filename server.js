"use strict";

const { default: mongoose } = require("mongoose");
const app = require("./src/app");

const PORT = 3055;

const server = app.listen(PORT, () => {
  console.log("WS blog start at " + PORT);
});

process.on("SIGINT", () => {
  mongoose.disconnect();
  server.close(() => {
    console.log("\nServer closed!!!");
  });
});
