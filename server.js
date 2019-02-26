const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const db = require("./data/dbConfig.js");
const session = require("express-session");
const sessionConfig = {
  name: "monkey", // Default is sid which gives away the name of the library
  secret: "asdfp9auy0987yuhaif", // Anything we want to add that just makes a random secret
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    secure: false // Should be true in production so that cookies can send/receive over HTTPS
  },
  httpOnly: true, // js can't touch this
  resave: false,
  saveUninitalized: false
};
const server = express();
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.get("/", (req, res) => {
  res.send("Working!");
});

server.get("/api/restricted/users", restricted, async (req, res) => {
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
      req.session.user = user; // Gets added to the reqests and can be used to add information
      res.status(200).json({ message: "User logged in successfully." });
    } else {
      res.status(404).json({ message: "Error. User could not be logged in." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error. User could not be logged in." });
  }
});

function restricted(req, res, next) {
  const { username, password } = req.headers;

  if (username && password) {
    db("users")
      .where({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: "Ran into an unexpected error" });
      });
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
}

function protected(req, res, next) {
  // if the use is logged in, use next()
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "You could not be logged in." });
  }
}

server.get("/users", protected, async (req, res) => {
  const users = await db("users").select("id", "username");
  res.status(200).json(users);
});

server.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(500).json({ message: "There was an error logging out." });
      } else {
        res.status(200).json({ message: "User was successfully logged out." });
      }
    });
  } else {
    res.json({ message: "Logged out already." });
  }
});

module.exports = server;
