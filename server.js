const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const db = require("./data/dbConfig.js");
const server = express();
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("Working!");
});

server.get("/api/users", async (req, res) => {
  try {
    const users = await db("users").select("id", "username");
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: "Error. Could not find any users." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error. Users could not be returned." });
  }
});

server.post("/api/register", async (req, res) => {
  const creds = req.body;
  const hash = bcrypt.hashSync(creds.password, 14);
  creds.password = hash;
  try {
    const ids = await db("users").insert(creds);
    if (ids) {
      res.status(201).json(ids);
    } else {
      res.status(404).json({ message: "Error. Could not create account." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error. Could not create account." });
  }
});

server.post("/api/login", async (req, res) => {
  const creds = req.body;
  try {
    const user = await db("users")
      .where({ username: creds.username })
      .first();
    if (user && bcrypt.compareSync(creds.password, user.password)) {
      res.status(200).json({ message: "User logged in successfully." });
    } else {
      res.status(404).json({ message: "Error. User could not be logged in." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error. User could not be logged in." });
  }
});

module.exports = server;
