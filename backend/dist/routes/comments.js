"use strict";

var express = require("express");
var _require = require("../controllers/commentController"),
  createCommentController = _require.createCommentController,
  createCommentReplyController = _require.createCommentReplyController,
  updateCommentController = _require.updateCommentController,
  updateReplyCommentController = _require.updateReplyCommentController,
  getCommentsByPostController = _require.getCommentsByPostController,
  deleteCommentController = _require.deleteCommentController,
  deleteReplyCommentController = _require.deleteReplyCommentController,
  likeCommentController = _require.likeCommentController,
  dislikeCommentController = _require.dislikeCommentController,
  likeReplyCommentController = _require.likeReplyCommentController,
  dislikeReplyCommentController = _require.dislikeReplyCommentController;
var router = express.Router();

//CREATE COMMENT
router.post("/create", createCommentController);

//CREATE COMMENT REPLY
router.post("/create/reply/:commentId", createCommentReplyController);

//UPDATE COMMENT
router.put("/update/:commentId", updateCommentController);

//UPDATE REPLY COMMENT
router.put("/update/:commentId/replies/:replyId", updateReplyCommentController);

//GET ALL POST COMMENTS
router.get("/post/:postId", getCommentsByPostController);

//DELETE A COMMENT
router["delete"]("/delete/:commentId", deleteCommentController);

//DELETE A REPLY COMMENT
router["delete"]("/delete/:commentId/replies/:replyId", deleteReplyCommentController);

//LIKE A COMMENT
router.post("/like/:commentId/", likeCommentController);

//DISLIKE A COMMENT
router.post("/dislike/:commentId/", dislikeCommentController);

//LIKE A REPLY COMMENT
router.post("/:commentId/replies/like/:replyId", likeReplyCommentController);

//DISLIKE A REPLY COMMENT
router.post("/:commentId/replies/dislike/:replyId", dislikeReplyCommentController);
module.exports = router;