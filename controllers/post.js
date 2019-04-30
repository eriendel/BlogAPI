const Post = require('../models/Post');

exports.getAllPosts = (req, res, next) => {
  Post.find().then(
    (posts) => {
      res.status(200).json(posts);
    }
  ).catch(
    (error) => {
      res.status(400).send(error);
    }
  );
};

exports.getOnePost = (req, res, next) => {
  Post.findById(req.params.id).then(
    (post) => {
      if (!post) {
        return res.status(404).send(new Error('Post not found!'));
      }
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(500).send(error);
    }
  )
};
