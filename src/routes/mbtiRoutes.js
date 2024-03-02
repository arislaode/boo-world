const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const mbtiController = require('../controllers/mbtiController');

router.post('/', asyncHandler(mbtiController.createMBTIs));
router.get('/', asyncHandler(mbtiController.getAllMBTIs));
router.put('/:id', asyncHandler(mbtiController.updateMBTI));
router.delete('/:id', asyncHandler(mbtiController.deleteMBTI));

module.exports = router;
