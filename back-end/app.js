// import express
const express = require("express");

// import mongoose
const mongoose = require("mongoose");

//import morgan
const morgan= require("morgan");

// import the model for articles
const Image = require("./models/Images");

// set the port number
const PORT = 3000;

// set the connection string
const DB_CONNECTION = "mongodb+srv://yoobeestudent21:yoobeestudent2021@cluster0.s6ods.mongodb.net/image-posts?retryWrites=true&w=majority"
// create a server
const app = express();

// use mongoose to attempt to connect to the DB
mongoose.connect(
  DB_CONNECTION, // connection string

  // options to fix deprecation warnings
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, 
  },

  // callback function to execute when database connection has been established
  () => {
    console.log("connected to db"); 
    // log success message

    app.listen(PORT, () => {
       // switch on the server
      console.log("listening on port " + PORT);
    });
  }
);

// MIDDLEWARE

// add ability to read POST request body data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan("dev"));

// ENDPOINTS

//create a new item to read POST request body data
app.post("/images", async (req,res, next) =>{
  try{
  const image = new Image ({
    title: req.body.title,
    author: req.body.author,
    url: req.body.url,
  });
  console.log(image);
  const savedImage = await image.save();
  res.json(savedImage);
} catch (error) {
  next (error);
}
}); 

// get all image
app.get("/images", async (req, res, next) => {
  try {
    const images = await Image.find(); // use the model to get all articles from the database and store them in articles
    res.json(images); // send the articles to the client
    console.log(images)
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.json(err.message);
});

//delete one image
app.delete("/images/:id", async (request, response) => {
  try {
    const image = await Images.findByIdAndDelete(request.params.id);

    if (!image) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
