"use strict";

var express = require("express");
var connectDB = require("./database/db");
var cookieParser = require("cookie-parser");
var authRoute = require("./routes/auth");
var userRoute = require("./routes/users");
var postRoute = require("./routes/post");
var commentRoute = require("./routes/comments");
var path = require("path");
var _require = require("./middlewares/error"),
  errorHandler = _require.errorHandler;
var app = express();
var dotenv = require("dotenv");
dotenv.config();

// Add middleware to parse JSON request bodies
app.use(express.json());
app.use(cookieParser());

// Add middleware to serve static files from the 'uploads' directory
app.use("/uploads", express["static"](path.join(__dirname, "uploads")));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/post", postRoute);
app.use("/api/comments", commentRoute);
app.use(errorHandler);

/*app.get("/", (req, res) => {
  res.send("Hello Worlds");
});

const posts = [
  { id: 1, title: "Post 1", content: "Content 1" },
  { id: 2, title: "Post 2", content: "Content 2" },
  { id: 3, title: "Post 3", content: "Content 3" },
];

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/:id", (req, res) => {
  const postId = req.params.id;
  const post = posts.find((post) => post.id === parseInt(postId));

  if (!post) {
    res.status(404).json({ error: "Post not found" });
  }
  res.send(post);
});


app.post("/posts", (req, res) => {
  // Get the title and content from the request body
  const title = "this is a new post"
  const content = "my post name"
  // Create a new post object
  const newPost = { id: posts.length + 1, title, content };
  // Add new post to the posts array
  posts.push(newPost);
  // Send the new post back to the client
  res.send(newPost);
});*/

app.listen(process.env.PORT, function () {
  connectDB();
  console.log("Server is running on port 5000");
});