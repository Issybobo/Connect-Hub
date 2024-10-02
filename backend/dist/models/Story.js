"use strict";

var mongoose = require("mongoose");
var storySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  text: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
var Story = mongoose.model("Story", storySchema);
module.exports = Story;