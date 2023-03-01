"use strict";

const {
  db: { host, name, port },
} = require("../configs/config.mongodb");
const { default: mongoose } = require("mongoose");
const { countConnect } = require("../helpers/check.connect");

const connectString = `mongodb://${host}:${port}/${name}`;
const env = process.env.NODE_ENV || "dev";

class Database {
  constructor() {
    this.connect();
  }

  //connect
  connect(type = "mongodb") {
    if (env === "dev") {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString, { maxPoolSize: 50 })
      .then((_) => {
        console.log(`Connected to ${connectString}`);
        countConnect();
      })
      .catch((err) => console.log(`Error connect`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
