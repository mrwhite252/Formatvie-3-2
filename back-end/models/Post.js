const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, default: "anonymous" },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Post", PostSchema);
