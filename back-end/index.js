const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://keely:test1234@cluster0.edhyy.mongodb.net/Formative_3_2?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const Post = require("./models/Post");

//Get all posts
app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

//Get specific post
app.get("/posts/:postId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
  res.status(200).json(post);
});

