const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const zodiacController = require('../controllers/zodiacController');

router.get('/', asyncHandler(zodiacController.getAllZodiacs));
router.post('/', asyncHandler(zodiacController.createZodiac));
router.put('/:id', asyncHandler(zodiacController.updateZodiac));
router.delete('/:id', asyncHandler(zodiacController.deleteZodiac));

module.exports = router;