const Profile = require('../models/profileModel');

const createProfile = async (profileData) => {
    if (!profileData.name) {
        throw new Error('Name is required.');
    }
    
    const existingProfile = await Profile.findOne({ email: profileData.email });
    if (existingProfile) {
        throw new Error('Email already in use.');
    }

    const profile = new Profile(profileData);
    await profile.save();
    return profile;
};

const getProfileById = async (id) => {
    const profile = await Profile.findById(id);
    if (!profile) {
        throw new Error('Profile not found.');
    }
    return profile;
};

module.exports = { createProfile, getProfileById };
