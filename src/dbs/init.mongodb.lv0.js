"use strict";

const { default: mongoose } = require("mongoose");

const connectString = `mongodb://localhost:27017/nodejs-blog`;
mongoose
  .connect(connectString)
  .then(() => console.log(`Connected Mongodb`))
  .catch((error) => console.log(`Error connect::${error.message}`));

mongoose.set("debug", true);
mongoose.set("debug", { color: true });

module.exports = mongoose;
