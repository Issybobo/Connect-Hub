const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },

  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters"],
  },

  fullName: {
    type: String,
    required: true,
    trim: true,
  },

  bio: {
    type: String,
    trim: true,
  },

  profilePicture: {
    type: String,
    default: "",
  },

  coverPicture: {
    type: String,
    default: "",
  },

  posts: [{ 
    type: mongoose.Schema.Types.ObjectId,
     ref: "Post" 
    }],

  followers: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User"
}],

  following: [{
     type: mongoose.Schema.Types.ObjectId,
      ref: "User"
     }],
    
  blockList : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"

     }]

}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
