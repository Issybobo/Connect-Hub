"use strict";

var mongoose = require("mongoose");
var conversationSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }]
}, {
  timestamps: true
});
var Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;