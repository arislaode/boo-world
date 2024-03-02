const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const enneagramController = require('../controllers/enneagramController');

router.post('/', asyncHandler(enneagramController.createEnneagrams));
router.get('/', asyncHandler(enneagramController.getAllEnneagrams));
router.put('/:id',asyncHandler(enneagramController.updateEnneagram));
router.delete('/:id', asyncHandler(enneagramController.deleteEnneagram));

module.exports = router;
