const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const commentSchema = mongoose.Schema({
  postId: { type: ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
  published: { type: Date, required: true }
});

module.exports = mongoose.model('Comment', commentSchema);
