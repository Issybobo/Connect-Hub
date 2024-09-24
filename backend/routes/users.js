const express = require("express");
const { getUserController, updateUserController, 
    followUserController,unfollowUserController,blockUserController,unblockUserController,
    getBlockedUsersController,deleteUserController ,searchUsersController,
    updateProfilePictureController, uploadCoverPictureController } = require("../controllers/userController");

//upload middleware
const {upload}=require("../middlewares/upload")
const router = express.Router();

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
router.delete("/:userId", deleteUserController); 

// Search users route
router.get("/search/:query", searchUsersController); 

// Upload profile picture route
router.put("/update-profile-picture/:userId",upload.single("profilePicture"),updateProfilePictureController)

// Update cover picture route
router.put("/update-cover-picture/:userId",upload.single("coverPicture"),uploadCoverPictureController)

module.exports = router;