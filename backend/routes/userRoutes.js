const express = require("express");
const router = express.Router();
const {
  registerUser,
  retrieveUser,
  loginUser,
} = require("../controllers/userController");

// /api/users
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

router.route("/me").get(retrieveUser);

module.exports = router;
