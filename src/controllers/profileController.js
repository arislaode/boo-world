const { createProfile, getProfileById } = require('../services/profileService');
const asyncHandler = require('express-async-handler');

exports.createProfile = asyncHandler(async (req, res, next) => {
    const profile = await createProfile(req.body);
    res.sendSuccess(profile, 201, 'Profile created successfully');
});

exports.getProfileById = asyncHandler(async (req, res, next) => {
    const profile = await getProfileById(req.params.id);
    res.sendSuccess(profile, 200, 'Profile retrieved successfully');
});
