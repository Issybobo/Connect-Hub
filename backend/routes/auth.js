const express = require("express");
const { registerController, loginContoller, logoutController, refetchController } = require("../controllers/authController");

const router = express.Router();


// Register a new user
router.post("/register", registerController);

// Login
router.post("/login", loginContoller);

// Logout
router.get("/logout", logoutController);

// Refetch current user 
router.get("/refetch", refetchController);


module.exports = router;