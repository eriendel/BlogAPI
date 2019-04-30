const ObjectId = require('mongodb').ObjectId;
const Comment = require('../models/Comment');

exports.getAllComments = (req, res, next) => {
  const query = req.query.postId ? Comment.find({postId: ObjectId(req.query.postId)}) : Comment.find();
  query.then(
    (comments) => {
      res.status(200).json(comments);
    }
  ).catch(
    (error) => {
      res.status(400).send(error);
    }
  );
};

exports.getOneComment = (req, res, next) => {
  Comment.findById(req.params.id).then(
    (comment) => {
      if (!comment) {
        return res.status(404).send(new Error('Comment not found!'));
      }
      res.status(200).json(comment);
    }
  ).catch(
    (error) => {
      res.status(500).send(error);
    }
  )
};
