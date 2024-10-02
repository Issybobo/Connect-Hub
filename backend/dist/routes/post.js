"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../middlewares/upload"),
  upload = _require.upload;
var _require2 = require("../controllers/postController"),
  createPostController = _require2.createPostController,
  createPostWithImagesController = _require2.createPostWithImagesController,
  updatePostController = _require2.updatePostController,
  getPostsController = _require2.getPostsController,
  getUserPostsController = _require2.getUserPostsController,
  deletePostController = _require2.deletePostController,
  likePostController = _require2.likePostController,
  dislikePostController = _require2.dislikePostController;

//CREATE POST
router.post("/create", createPostController);

//CREATE POST WITH IMAGES
router.post("/create/:userId", upload.array("images", 2), createPostWithImagesController);

//UPDATE POST
router.put("/update/:postId", updatePostController);

//GET ALL POSTS
router.get("/all/:userId", getPostsController);

//GET USER POSTS
router.get("/user/:userId", getUserPostsController);

//DELETE POST
router["delete"]("/delete/:postId", deletePostController);

//LIKE POST 
router.post("/like/:postId", likePostController);

//DISLIKE POST
router.post("/dislike/:postId", dislikePostController);
module.exports = router;