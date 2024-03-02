const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/', commentController.createComment);
router.get('/', commentController.getComments);
router.patch('/:id/like', commentController.toggleLike);
router.get('/filter', commentController.filterComments);

module.exports = router;
