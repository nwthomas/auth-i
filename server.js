const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());

server.get("/", (req, res) => {
  console.log("Working!");
});

module.exports = server;
