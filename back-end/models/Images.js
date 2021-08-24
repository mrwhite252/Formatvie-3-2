//import mongoose
const mongoose = require("mongoose");

//define the structure of an image document using a mongoose schema
const ImageSchema = mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    author: {
        type: String,
        required:true,
    },
    url: {
        type: String,
        required:true
    }
});

//create a model based on the schema and export it
module.exports = mongoose.model("Image", ImageSchema);