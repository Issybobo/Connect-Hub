"use strict";

var express = require("express");
var _require = require("../controllers/userController"),
  getUserController = _require.getUserController,
  updateUserController = _require.updateUserController,
  followUserController = _require.followUserController,
  unfollowUserController = _require.unfollowUserController,
  blockUserController = _require.blockUserController,
  unblockUserController = _require.unblockUserController,
  getBlockedUsersController = _require.getBlockedUsersController,
  deleteUserController = _require.deleteUserController,
  searchUsersController = _require.searchUsersController,
  updateProfilePictureController = _require.updateProfilePictureController,
  uploadCoverPictureController = _require.uploadCoverPictureController;

//upload middleware
var _require2 = require("../middlewares/upload"),
  upload = _require2.upload;
var router = express.Router();

// get user route   
router.get("/:userId", getUserController);

// update user route
router.put("/:userId", updateUserController);

// follow user route
router.put("/follow/:userId", followUserController);

// unfollow user route
router.put("/unfollow/:userId", unfollowUserController);

// block user route
router.put("/block/:userId", blockUserController);

// unblock user route
router.put("/unblock/:userId", unblockUserController);

// get blocked users route
router.get("/blocked/:userId", getBlockedUsersController);

// delete user route
router["delete"]("/:userId", deleteUserController);

// Search users route
router.get("/search/:query", searchUsersController);

// Upload profile picture route
router.put("/update-profile-picture/:userId", upload.single("profilePicture"), updateProfilePictureController);

// Update cover picture route
router.put("/update-cover-picture/:userId", upload.single("coverPicture"), uploadCoverPictureController);
module.exports = router;