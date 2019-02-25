const express = require("express");
const server = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  console.log("Working!");
});

module.exports = server;
