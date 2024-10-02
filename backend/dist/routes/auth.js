"use strict";

var express = require("express");
var _require = require("../controllers/authController"),
  registerController = _require.registerController,
  loginContoller = _require.loginContoller,
  logoutController = _require.logoutController,
  refetchController = _require.refetchController;
var router = express.Router();

// Register a new user
router.post("/register", registerController);

// Login
router.post("/login", loginContoller);

// Logout
router.get("/logout", logoutController);

// Refetch current user 
router.get("/refetch", refetchController);
module.exports = router;