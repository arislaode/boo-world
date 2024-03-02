const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const commentController = require('../controllers/commentController');

router.post('/', asyncHandler(commentController.createComment));
router.get('/', asyncHandler(commentController.getComments));
router.patch('/:id/like', asyncHandler(commentController.toggleLike));

module.exports = router;
