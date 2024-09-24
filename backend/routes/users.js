const express = require("express");
const { getUserController, updateUserController, followUserController,unfollowUserController,blockUserController,unblockUserController } = require("../controllers/userController");

const router = express.Router();

router.get("/:userId", getUserController);
router.put("/:userId", updateUserController);
router.put("/follow/:userId", followUserController); 
router.put("/unfollow/:userId", unfollowUserController); 
router.put("/block/:userId", blockUserController); 
router.put("/unblock/:userId", unblockUserController); 

module.exports = router;