const express = require("express");
const connectDB = require("./database/db");
const cookieParser = require("cookie-parser")
const authRoute = require("./routes/auth")
const { errorHandler } = require("./middlewares/error")


const app = express();
const dotenv = require("dotenv");

dotenv.config();

// Add middleware to parse JSON request bodies
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoute)

app.use(errorHandler)

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

app.listen(process.env.PORT, () => {
    connectDB();
  console.log("Server is running on port 5000");
});