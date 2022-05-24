const ayncHander = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/userModel");
const { json } = require("express/lib/response");

const registerUser = (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);
  if (!req.body) {
    res.status(401).json("Error: Body missing");
    return;
  }

  res.status(201).json({
    username,
    password,
  });
};

const loginUser = (req, res) => {
  res.json({ test: "Hello" });
};

const retrieveUser = (req, res) => {
  res.json({ user: { name: "john" } });
};

module.exports = {
  registerUser,
  retrieveUser,
  loginUser,
};
