const express = require("express");
const server = express();

server.get("/", (req, res) => {
  console.log("Working!");
});

module.exports = server;
