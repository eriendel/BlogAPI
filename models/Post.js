const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  imageUrl: { type: String, required: true },
  published: { type: Date, required: true }
});

module.exports = mongoose.model('Post', postSchema);
