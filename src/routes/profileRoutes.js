const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const profileController = require('../controllers/profileController');

router.post('/', asyncHandler(profileController.createProfile));

router.get('/:id', asyncHandler(profileController.getProfileById));

module.exports = router;
