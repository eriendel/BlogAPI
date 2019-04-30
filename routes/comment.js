const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');

router.get('/', commentCtrl.getAllComments);
router.get('/:id', commentCtrl.getOneComment);

module.exports = router;
