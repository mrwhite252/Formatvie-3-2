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

//create a new item to read POST request body data
app.post("/posts", async (req,res, next) =>{
  try{
  const post = new Post ({
    title: req.body.title,
    author: req.body.author,
    imageUrl: req.body.imageUrl,
    description: req.body.description
  });
  console.log(post);
  const savedPost = await post.save();
  res.json(savedPost);
} catch (error) {
  next (error);
}
}); 

/// delete post
app.delete("/posts/:postId", async (req, res, next) => {
  try {
    const deletedPost = await Post.findByIdAndRemove(
      req.params.postId
    ); // use the model to find and delete the matching document
    res.json(deletedPost); // send the response from the db to the client
  } catch (error) {
    next(error);
  }
});


//Update specific post
app.patch("/posts/:postId", async (req, res, next) => {
  try {
    const postData = {
      title: req.body.title,
      author: req.body.author,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
    };
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      postData
    );
    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
});