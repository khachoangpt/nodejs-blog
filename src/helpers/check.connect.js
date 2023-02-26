"use strict";

const { default: mongoose } = require("mongoose");
const os = require("os");
const process = require("process");

const SECONDS = 5000;

//Count connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections::${numConnection}`);
};

//Check overload
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUse = process.memoryUsage().rss;
    //Example 1 core can have 5 connections
    const maxConnections = numCores * 5;
    console.log(`Active connection:: ${numConnection}`);
    console.log(`Memory usage:: ${memoryUse / 1024 / 1024} MB`);
    if (numConnection > maxConnections) {
      console.log(`Connection overload`);
    }
  }, SECONDS); // Monitor every 5 seconds
};

module.exports = {
  countConnect,
  checkOverload,
};
